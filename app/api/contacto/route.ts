import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, empresa, cargo, email, telefono, vacantes, urgencia, mensaje, honeypot } = body

    // 1. Detección de Spam (Honeypot)
    if (honeypot) {
      console.log('Spam detectado y bloqueado silenciosamente (Honeypot completado).')
      return NextResponse.json({ success: true, spam: true })
    }

    // 2. Validación de campos obligatorios
    if (!nombre || !empresa || !email) {
      return NextResponse.json(
        { success: false, error: 'Por favor completa todos los campos requeridos.' },
        { status: 400 }
      )
    }

    // 2.5 Inserción en base de datos Supabase (Defensivo / Tolerancia a fallas)
    let savedInDb = false
    try {
      const { error: dbError } = await supabaseAdmin
        .from('leads')
        .insert([
          {
            nombre,
            empresa,
            cargo: cargo || null,
            email,
            telefono: telefono || null,
            vacantes: vacantes || null,
            urgencia: urgencia || null,
            mensaje: mensaje || null,
          },
        ])

      if (dbError) {
        throw dbError
      }
      savedInDb = true
      console.log('Lead guardado exitosamente en Supabase.')
    } catch (dbErr) {
      console.error('Error al guardar lead en Supabase (Se continuará con el envío del correo de contingencia):', dbErr)
    }

    // 3. Configuración del transportador SMTP de Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL/TLS en puerto 465
      auth: {
        user: process.env.SMTP_USER || 'contacto@alianzarh.com',
        pass: process.env.SMTP_PASS || '', // Se lee desde .env.local o variables del hosting
      },
      tls: {
        rejectUnauthorized: false, // Previene bloqueos por certificados autofirmados
      },
    })

    // 4. Plantilla de correo HTML premium
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0; }
            .header { background-color: #0f172a; padding: 32px; text-align: center; }
            .content { padding: 40px; }
            h2 { color: #0f172a; font-size: 22px; margin-top: 0; font-weight: 800; border-bottom: 2px solid #3b82f6; padding-bottom: 12px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px; }
            td.label { font-weight: 700; color: #475569; width: 35%; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; }
            td.value { color: #0f172a; }
            .message-box { background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 8px; margin-top: 24px; }
            .message-title { font-weight: 700; font-size: 13px; text-transform: uppercase; color: #475569; margin-bottom: 8px; }
            .message-text { font-style: italic; color: #1e293b; line-height: 1.6; font-size: 15px; margin: 0; }
            .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0; letter-spacing: 1px;">ALIANZA RH — NUEVO PROSPECTO</h1>
            </div>
            <div class="content">
              <h2>Detalles del Lead</h2>
              <table>
                <tr>
                  <td class="label">Nombre</td>
                  <td class="value"><strong>${nombre}</strong></td>
                </tr>
                <tr>
                  <td class="label">Empresa</td>
                  <td class="value">${empresa}</td>
                </tr>
                <tr>
                  <td class="label">Cargo / Puesto</td>
                  <td class="value">${cargo || '<em>No especificado</em>'}</td>
                </tr>
                <tr>
                  <td class="label">Email</td>
                  <td class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Teléfono</td>
                  <td class="value">${telefono || '<em>No especificado</em>'}</td>
                </tr>
                <tr>
                  <td class="label">Vacantes</td>
                  <td class="value">${vacantes || '<em>No especificado</em>'}</td>
                </tr>
                <tr>
                  <td class="label">Urgencia</td>
                  <td class="value" style="color: ${urgencia === 'inmediata' ? '#ef4444' : '#0f172a'}; font-weight: ${urgencia === 'inmediata' ? '700' : 'normal'};">
                    ${urgencia === 'inmediata' ? 'Inmediata' : urgencia === 'pronto' ? 'Próximas 2-4 semanas' : urgencia === 'planificacion' ? 'Planificación (1-3 meses)' : urgencia || '<em>No especificada</em>'}
                  </td>
                </tr>
              </table>
              
              ${
                mensaje
                  ? `
                <div class="message-box">
                  <div class="message-title">Perfiles solicitados / Mensaje:</div>
                  <p class="message-text">${mensaje.replace(/\n/g, '<br>')}</p>
                </div>
              `
                  : ''
              }
            </div>
            <div class="footer">
              Este correo fue enviado automáticamente desde el formulario de contacto de Alianza RH.<br>
              &copy; ${new Date().getFullYear()} Alianza RH. Todos los derechos reservados.
            </div>
          </div>
        </body>
      </html>
    `

    const senderEmail = process.env.SMTP_USER || 'contacto@alianzarh.com'
    const recipientEmail = process.env.NOTIFICATION_RECIPIENT || 'contacto@alianzarh.com'

    // 5. Configurar opciones del correo
    const mailOptions = {
      from: `"Alianza RH Leads" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email, // Al hacer clic en "Responder" responderá directamente al prospecto
      subject: `Nuevo Lead: ${empresa} (${nombre})`,
      html: emailHtml,
    }

    // 6. Enviar
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, savedInDb })
  } catch (error: any) {
    console.error('Error al enviar correo por SMTP:', error)
    return NextResponse.json(
      { success: false, error: 'Hubo un problema al procesar tu solicitud. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
