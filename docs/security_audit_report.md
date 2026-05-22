# Reporte de Auditoría de Seguridad — Alianza RH Site

Este documento presenta una evaluación detallada de la postura de seguridad actual del sitio web **Alianza RH Site** (Next.js frontend) y proporciona recomendaciones accionables para mitigar posibles vectores de ataque.

---

## 1. Resumen Ejecutivo

El sitio se encuentra en una fase de desarrollo madura para su frontend. Recientemente se implementaron mejoras clave de seguridad en la configuración del servidor, logrando mitigar los principales riesgos de la capa de transporte y del lado del cliente. Sin embargo, dado que el proyecto se encamina hacia la integración de base de datos y envío de formularios reales, es fundamental abordar vulnerabilidades en dependencias y establecer controles para prevenir abusos de bots.

### Estado General de Seguridad: **Bueno (Con acciones pendientes)**

- **Puntos evaluados**: Cabeceras de seguridad, CORS, enlaces externos, base de datos (RLS), vulnerabilidades en dependencias (`npm audit`) y seguridad de formularios.

---

## 2. Controles de Seguridad Ya Implementados

Se evaluaron de forma positiva los siguientes aspectos del sitio:

| Punto de Control | Estado | Detalle Técnico |
| :--- | :--- | :--- |
| **Cabeceras de Seguridad (HTTP)** | **Seguro** | Se implementaron políticas robustas en `next.config.mjs`, incluyendo **HSTS (fuerza HTTPS)**, **X-Frame-Options (evita clickjacking)**, **X-Content-Type-Options (evita MIME sniffing)** y **Permissions-Policy**. |
| **CORS (Cross-Origin Resource Sharing)** | **Seguro** | Configurado en `next.config.mjs` restringiendo peticiones `/api/*` estrictamente a `https://alianzarh.com` en producción y permitiendo `localhost` únicamente en desarrollo. |
| **Tabnabbing (Seguridad de Enlaces)** | **Seguro** | Todos los enlaces externos (`target="_blank"`) en la navegación y pie de página cuentan adecuadamente con la propiedad `rel="noopener noreferrer"`. |
| **Base de Datos (RLS)** | **Preparado** | Se ha creado la plantilla de migración SQL para activar **Row Level Security (RLS)** y definir políticas restrictivas para evitar lectura de datos no autorizados. |

---

## 3. Análisis de Vulnerabilidades en Dependencias (`npm audit`)

Se ejecutó una auditoría automatizada en el árbol de dependencias del proyecto. Se identificaron **5 vulnerabilidades** (1 moderada, 4 de severidad alta):

### Detalles de Vulnerabilidades Encontradas:
1. **Next.js (< 14.2.30)**
   - **Severidad**: Alta
   - **Riesgo**: Exposición potencial de información en el servidor de desarrollo, problemas de caché en rutas de imágenes (`next/image`) y vulnerabilidades de denegación de servicio (DoS) o falsificación de solicitudes del lado del servidor (SSRF) bajo escenarios específicos de hosting auto-alojado.
   - **Remediación recomendada**: Ejecutar una actualización menor del paquete a la versión parcheada más reciente de la rama v14.

2. **PostCSS (< 8.5.10)**
   - **Severidad**: Moderada (Inyectado a través de Next.js)
   - **Riesgo**: Posible Cross-Site Scripting (XSS) a través de salidas no sanitizadas en la cadena stringify del parser de estilos.
   - **Remediación recomendada**: Actualizar la dependencia interna mediante una resolución en el archivo lock.

3. **Glob (Vulnerable en dependencias de desarrollo de ESLint)**
   - **Severidad**: Alta (Solo afecta entorno de desarrollo/CI)
   - **Riesgo**: Posible inyección de comandos si el analizador de código ejecuta patrones maliciosos en la shell.
   - **Remediación recomendada**: No afecta el sitio final en producción, pero es recomendable actualizar ESLint y sus plugins relacionados.

> [!TIP]
> **Comando Seguro de Remediación:**
> Para resolver vulnerabilidades sin arriesgar cambios de versión mayor (evitando romper compatibilidades), ejecuta:
> ```bash
> npm update next eslint-config-next postcss
> ```

---

## 4. Auditoría del Formulario de Contacto (`ContactForm.tsx`)

El formulario de contacto es el principal punto de entrada de datos proporcionado por el usuario en el sitio actual.

### Riesgos Identificados y Recomendaciones:
* **Spam y Bots**: Actualmente no existe un mecanismo que prevenga que scripts automatizados envíen spam repetitivo una vez que el formulario esté conectado a un servicio de correo o base de datos.
  - **Recomendación**: Implementar un campo oculto tipo **Honeypot** (un campo invisible para usuarios reales que, si es completado por un bot, descarta la petición inmediatamente) o un widget ligero de privacidad como **Cloudflare Turnstile** o **Google reCAPTCHA v3**.
* **Sanitización del lado del cliente y servidor**: Asegurar que toda cadena de texto ingresada en los inputs sea sanitizada y escapada antes de guardarse en base de datos para prevenir inyecciones de código malicioso.

---

## 5. Prácticas de Configuración y Despliegue

Para mantener un entorno de producción totalmente protegido, te recomendamos seguir estas pautas durante la fase de lanzamiento:

1. **Variables de Entorno**:
   - Asegúrate de que las variables sensibles (como contraseñas de bases de datos o llaves privadas de APIs) se guarden exclusivamente en archivos `.env.local` y **nunca** sean añadidas al control de versiones de Git.
   - En Next.js, solo los valores que requieran ser expuestos al navegador del cliente deben llevar el prefijo `NEXT_PUBLIC_`.
2. **Cifrado SSL/TLS**:
   - Verifica que el proveedor de hosting (como Vercel o Netlify) mantenga forzado el uso de TLS 1.3 y redirección automática de HTTP a HTTPS. La cabecera HSTS ya configurada en el proyecto ayudará a garantizar esto de forma activa en el navegador del cliente.
