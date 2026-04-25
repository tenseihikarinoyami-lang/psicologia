# Sherany Mercado | Sitio web

Landing profesional reconstruida en `Next.js` para presentar el acompañamiento psicológico de Sherany Mercado, con foco en claridad, confianza, rendimiento y contacto por WhatsApp.

## Tecnologías

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`

## Desarrollo local

1. Instala dependencias:

```bash
npm install
```

2. Levanta el servidor local:

```bash
npm run dev
```

3. Abre `http://localhost:3000`.

## Variable recomendada

Para que los metadatos usen la URL real del sitio en producción, crea un archivo `.env.local` con:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

En desarrollo puedes omitirlo.

## Verificación antes de publicar

Ejecuta:

```bash
npm run lint
npm run build
```

## Despliegue paso a paso en Vercel

1. Crea un repositorio nuevo en GitHub.
2. Sube este proyecto al repositorio:

```bash
git init
git add .
git commit -m "Sitio inicial Sherany Mercado"
git branch -M main
git remote add origin TU_URL_DEL_REPOSITORIO
git push -u origin main
```

3. Entra a [Vercel](https://vercel.com/) e inicia sesión.
4. Haz clic en `Add New Project`.
5. Importa el repositorio de GitHub.
6. Vercel detectará automáticamente que es un proyecto `Next.js`.
7. Antes de desplegar, agrega la variable de entorno:
   - Nombre: `NEXT_PUBLIC_SITE_URL`
   - Valor: la URL final del sitio o la URL temporal que te dará Vercel.
8. Haz clic en `Deploy`.
9. Cuando termine, entra al dominio generado por Vercel y revisa:
   - carga general del sitio
   - enlaces de WhatsApp
   - enlace de Instagram
   - título y descripción al compartir
10. Si luego conectas un dominio propio, vuelve a Vercel y actualiza `NEXT_PUBLIC_SITE_URL` con ese dominio definitivo.

## Publicar cambios futuros

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Describe tu cambio"
git push
```

Vercel hará un nuevo despliegue automáticamente.
