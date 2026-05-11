# sergidiaz.com — Personal Brand Website

**Sergio Díaz · AI Product Builder · Barcelona**

Sitio web personal de Sergio Díaz, fundador de Flows Lab.

## Estructura

```
index.html          ← Archivo principal (autocontenido, todo inline)
privacidad.html     ← Política de privacidad
aviso-legal.html    ← Aviso legal
cookies.html        ← Política de cookies
sitemap.xml         ← Sitemap SEO
robots.txt          ← Instrucciones para bots
favicon.ico         ← Favicon
apple-touch-icon.png← Icono iOS
logo.svg            ← Logo maestro 400x400
logo-mark.svg       ← Símbolo del logo (nav)
og-image.svg        ← Imagen para redes sociales 1200x630
css/                ← Hojas de estilo modulares (referencia)
js/                 ← Scripts modulares (referencia)
sections/           ← Partials HTML actualizables (referencia)
```

## Notas
- `index.html` es autocontenido: todo CSS y JS está inline. No necesita servidor para abrir.
- Formulario de contacto vía Formspree (endpoint: mzdorbkl)
- Google Search Console: actualizar `PEGA_AQUI_TU_CODIGO_GSC` en index.html
- Fuentes de Google Fonts (requiere conexión a internet)

## Despliegue
Subir el contenido de esta carpeta a `public_html/` en Plesk.
