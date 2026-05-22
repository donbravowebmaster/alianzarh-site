import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { supabaseAdmin } from '@/lib/supabase'

// Función de escape de HTML para prevenir inyecciones (XSS / HTML Injection) en las plantillas de correo
function escapeHtml(text: string): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

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
      if (supabaseAdmin) {
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
      } else {
        console.warn('Supabase no está configurado (variables vacías). Saltando inserción en BD.')
      }
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

    // Escapar variables de usuario para renderizado seguro en los correos HTML
    const safeNombre = escapeHtml(nombre)
    const safeEmpresa = escapeHtml(empresa)
    const safeCargo = cargo ? escapeHtml(cargo) : ''
    const safeEmail = escapeHtml(email)
    const safeTelefono = telefono ? escapeHtml(telefono) : ''
    const safeVacantes = vacantes ? escapeHtml(vacantes) : ''
    const safeUrgencia = urgencia ? escapeHtml(urgencia) : ''
    const safeMensaje = mensaje ? escapeHtml(mensaje).replace(/\n/g, '<br>') : ''

    // 4. Plantilla de correo HTML premium para notificaciones internas (Admin)
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        </head>
        <body style="background-color: #f8fafc; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px; -webkit-font-smoothing: antialiased;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);">
                  <!-- Top accent bar -->
                  <tr>
                    <td height="6" style="background-color: #357ee3; background-image: linear-gradient(90deg, #357ee3 0%, #c379d8 100%); line-height: 0px; font-size: 0px;">&nbsp;</td>
                  </tr>
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0d1117; padding: 32px 40px; text-align: left;">
                      <span style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                        alianza<span style="color: #357ee3;">rh</span>
                      </span>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px; background-color: #ffffff;">
                      <h2 style="color: #0d1117; font-size: 22px; margin-top: 0; font-weight: 800; border-bottom: 2px solid #357ee3; padding-bottom: 12px; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">Nuevo Lead Registrado</h2>
                      <p style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 24px 0;">
                        Se ha recibido un nuevo registro a través del formulario de contacto del sitio web. A continuación se presentan los detalles del prospecto:
                      </p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; padding: 16px;">
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; width: 35%; text-transform: uppercase; letter-spacing: 0.05em;">Nombre</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #0d1117;"><strong>${safeNombre}</strong></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Empresa</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #0d1117;"><strong>${safeEmpresa}</strong></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Cargo / Puesto</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #0d1117;">${safeCargo || '<em>No especificado</em>'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #0d1117;"><a href="mailto:${safeEmail}" style="color: #357ee3; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Teléfono</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #0d1117;">${safeTelefono || '<em>No especificado</em>'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Vacantes</td>
                          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #0d1117;">${safeVacantes || '<em>No especificado</em>'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Urgencia</td>
                          <td style="padding: 10px 0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: ${safeUrgencia === 'inmediata' ? '700' : 'normal'}; color: ${safeUrgencia === 'inmediata' ? '#ef4444' : '#0d1117'};">
                            ${safeUrgencia === 'inmediata' ? 'Inmediata' : safeUrgencia === 'pronto' ? 'Próximas 2-4 semanas' : safeUrgencia === 'planificacion' ? 'Planificación (1-3 meses)' : safeUrgencia || '<em>No especificada</em>'}
                          </td>
                        </tr>
                      </table>
                      
                      ${safeMensaje ? `
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-left: 4px solid #357ee3; padding: 20px; border-radius: 8px; margin-top: 24px; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                        <tr>
                          <td style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; padding-bottom: 8px; letter-spacing: 0.05em;">Perfiles solicitados / Mensaje:</td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-style: italic; color: #1e293b; line-height: 1.6; padding: 0;">${safeMensaje}</td>
                        </tr>
                      </table>
                      ` : ''}
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0d1117; padding: 24px; text-align: center; border-top: 1px solid #1e293b;">
                      <p style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #94a3b8; margin: 0; line-height: 1.5;">
                        Este correo fue enviado automáticamente desde el formulario de contacto de Alianza RH.<br>
                        &copy; ${new Date().getFullYear()} Alianza RH. Todos los derechos reservados.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    // 4.5. Plantilla de correo HTML ultra-premium para auto-respuesta al CLIENTE
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        </head>
        <body style="background-color: #f8fafc; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; -webkit-font-smoothing: antialiased;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.03);">
                  <!-- Top accent bar -->
                  <tr>
                    <td height="6" style="background-color: #357ee3; background-image: linear-gradient(90deg, #357ee3 0%, #c379d8 100%); line-height: 0px; font-size: 0px;">&nbsp;</td>
                  </tr>
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0d1117; padding: 32px 40px; text-align: left;">
                      <span style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                        alianza<span style="color: #357ee3;">rh</span>
                      </span>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px; background-color: #ffffff;">
                      <h2 style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0d1117; font-size: 24px; font-weight: 800; margin: 0 0 16px 0; line-height: 1.25;">¡Hola, ${safeNombre}! 👋</h2>
                      <p style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 32px 0;">
                        Queremos agradecerte por tu interés en Alianza RH. Confirmamos que hemos recibido tu solicitud de información de forma exitosa. Nos entusiasma mucho la posibilidad de colaborar con <strong>${safeEmpresa}</strong> para optimizar sus procesos de selección de personal.
                      </p>
                      
                      <!-- Request Summary Card -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 32px;">
                        <tr>
                          <td style="padding: 24px;">
                            <div style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 700; color: #357ee3; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Resumen de tu solicitud</div>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #64748b; width: 40%;">Empresa</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #0d1117; font-weight: 700;">${safeEmpresa}</td>
                              </tr>
                              ${safeCargo ? `
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #64748b;">Tu Cargo</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #0d1117; font-weight: 500;">${safeCargo}</td>
                              </tr>
                              ` : ''}
                              ${safeTelefono ? `
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #64748b;">Teléfono</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #0d1117; font-weight: 500;">${safeTelefono}</td>
                              </tr>
                              ` : ''}
                              ${safeVacantes ? `
                              <tr>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #64748b;">Vacantes a Cubrir</td>
                                <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #0d1117; font-weight: 500;">
                                  ${safeVacantes === '30+' ? 'Más de 30 posiciones' : safeVacantes + ' posiciones'}
                                </td>
                              </tr>
                              ` : ''}
                              ${safeUrgencia ? `
                              <tr>
                                <td style="padding: 8px 0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #64748b;">Urgencia</td>
                                <td style="padding: 8px 0; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #0d1117; font-weight: 500;">
                                  ${safeUrgencia === 'inmediata' ? 'Inmediata (esta semana)' : safeUrgencia === 'pronto' ? 'Próximas 2-4 semanas' : safeUrgencia === 'planificacion' ? 'Planificación (1-3 meses)' : safeUrgencia}
                                </td>
                              </tr>
                              ` : ''}
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Pillars of Service (Bento Concept) -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; margin-bottom: 32px;">
                        <tr>
                          <td>
                            <div style="text-align: center; margin-bottom: 28px;">
                              <span style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #eaf2fc; color: #357ee3; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 6px 16px; border-radius: 100px; display: inline-block;">
                                NUESTRO VALOR AGREGADO
                              </span>
                              <h3 style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0d1117; font-size: 18px; font-weight: 800; margin: 12px 0 0 0;">¿Por qué elegir Alianza RH?</h3>
                            </div>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <!-- Pillar 1 -->
                              <tr>
                                <td valign="top" style="padding-bottom: 24px; width: 40px;">
                                  <table border="0" cellpadding="0" cellspacing="0" style="background-color: #eaf2fc; border-radius: 50%; width: 36px; height: 36px; text-align: center;">
                                    <tr>
                                      <td style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; line-height: 36px;">⚡</td>
                                    </tr>
                                  </table>
                                </td>
                                <td valign="top" style="padding-left: 16px; padding-bottom: 24px; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                                  <strong style="color: #0d1117; font-size: 15px; font-weight: 700; display: block; margin: 0 0 4px 0;">Contratación 78% más rápida</strong>
                                  <span style="font-size: 13px; color: #475569; display: block; line-height: 1.5;">Nuestra tecnología de pauta digital avanzada y automatización atrae talento calificado en tiempo récord.</span>
                                </td>
                              </tr>
                              
                              <!-- Pillar 2 -->
                              <tr>
                                <td valign="top" style="padding-bottom: 24px; width: 40px;">
                                  <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f9effb; border-radius: 50%; width: 36px; height: 36px; text-align: center;">
                                    <tr>
                                      <td style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; line-height: 36px;">🎯</td>
                                    </tr>
                                  </table>
                                </td>
                                <td valign="top" style="padding-left: 16px; padding-bottom: 24px; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                                  <strong style="color: #0d1117; font-size: 15px; font-weight: 700; display: block; margin: 0 0 4px 0;">Filtros y Evaluación Avanzada</strong>
                                  <span style="font-size: 13px; color: #475569; display: block; line-height: 1.5;">Pre-evaluamos minuciosamente a cada candidato antes de presentártelo, asegurando la máxima afinidad cultural y técnica.</span>
                                </td>
                              </tr>
                              
                              <!-- Pillar 3 -->
                              <tr>
                                <td valign="top" style="width: 40px;">
                                  <table border="0" cellpadding="0" cellspacing="0" style="background-color: #eaf2fc; border-radius: 50%; width: 36px; height: 36px; text-align: center;">
                                    <tr>
                                      <td style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 16px; line-height: 36px;">⚙️</td>
                                    </tr>
                                  </table>
                                </td>
                                <td valign="top" style="padding-left: 16px; font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                                  <strong style="color: #0d1117; font-size: 15px; font-weight: 700; display: block; margin: 0 0 4px 0;">Reclutamiento sin Fricción</strong>
                                  <span style="font-size: 13px; color: #475569; display: block; line-height: 1.5;">Eliminamos la carga administrativa y las tareas manuales para que tu equipo se concentre solo en tomar la decisión final.</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Next Steps Section -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #e2e8f0; padding-top: 32px; margin-bottom: 32px;">
                        <tr>
                          <td>
                            <h3 style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0d1117; font-size: 16px; font-weight: 800; margin: 0 0 12px 0;">¿Cuáles son los siguientes pasos?</h3>
                            <p style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 24px 0;">
                              Un consultor de nuestro equipo de atracción de talento analizará a fondo tus requerimientos específicos. Nos pondremos en contacto contigo en un plazo máximo de <strong>24 horas hábiles</strong> para coordinar una breve sesión de diagnóstico y demo personalizada.
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Button CTA -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center" style="padding: 8px 0 24px 0;">
                            <table border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td align="center" style="background-color: #357ee3; background-image: linear-gradient(135deg, #357ee3 0%, #c379d8 100%); border-radius: 12px;">
                                  <a href="https://alianzarh.com" target="_blank" style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; padding: 16px 36px; display: inline-block; letter-spacing: 0.5px;">Conocer más de Alianza RH</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #475569; margin: 32px 0 0 0; line-height: 1.5;">
                        Atentamente,<br />
                        <strong style="color: #0d1117;">El equipo de Alianza RH</strong><br />
                        <span style="font-size: 13px; color: #64748b;">Especialistas en Atracción de Talento y Tecnología RH</span>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0d1117; padding: 32px 40px; text-align: center; border-top: 1px solid #1e293b;">
                      <div style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 800; color: #ffffff; letter-spacing: 0.5px; margin: 0 0 12px 0;">ALIANZA RH</div>
                      <p style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #94a3b8; margin: 0 0 8px 0; line-height: 1.5;">Monterrey, Nuevo León, México | Cobertura en toda América Latina</p>
                      <p style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #94a3b8; margin: 0 0 16px 0; line-height: 1.5;">Teléfono: +52 81 2332 1719 | Email: <a href="mailto:contacto@alianzarh.com" style="color: #357ee3; text-decoration: none;">contacto@alianzarh.com</a></p>
                      
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #1e293b; padding-top: 16px;">
                        <tr>
                          <td style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; color: #475569; line-height: 1.5; text-align: center;">
                            Este es un correo de confirmación automática enviado tras tu registro en el sitio web de Alianza RH.<br />
                            Para conocer la forma en que salvaguardamos tu información personal, consulta nuestro <a href="https://alianzarh.com/privacidad" target="_blank" style="color: #357ee3; text-decoration: none;">Aviso de Privacidad</a>.
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    const senderEmail = process.env.SMTP_USER || 'contacto@alianzarh.com'
    const recipientEmail = process.env.NOTIFICATION_RECIPIENT || 'contacto@alianzarh.com'

    // 5. Configurar opciones del correo de notificación interna (Admin)
    const adminMailOptions = {
      from: `"Alianza RH Leads" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: safeEmail, // Al hacer clic en "Responder" responderá directamente al prospecto de manera segura
      subject: `Nuevo Lead: ${safeEmpresa} (${safeNombre})`,
      html: emailHtml,
    }

    // 5.5. Configurar opciones del correo de auto-respuesta (Cliente)
    const clientMailOptions = {
      from: `"Alianza RH" <${senderEmail}>`,
      to: email, // El remitente SMTP valida esto, pero usamos email del cuerpo que ya validamos
      subject: `¡Hemos recibido tu solicitud de demo! — Alianza RH`,
      html: clientEmailHtml,
    }

    // 6. Enviar notificaciones en paralelo para optimizar la velocidad del servidor
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ])

    return NextResponse.json({ success: true, savedInDb })
  } catch (error: any) {
    console.error('Error al enviar correo por SMTP:', error)
    return NextResponse.json(
      { success: false, error: 'Hubo un problema al procesar tu solicitud. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}

