# Guía de Deployment en Vercel

## 🚀 Solución de Problemas de Node.js

### Error: Node.js Version "18.x" is discontinued

**Causa:** Vercel ha descontinuado Node.js 18.x y requiere actualización a versiones más recientes.

**Solución Aplicada:**

1. ✅ Actualizado `package.json` con engines requirement
2. ✅ Creado archivo `.nvmrc` especificando Node 20
3. ✅ Removido flag `--openssl-legacy-provider` (no necesario en Node 20+)

---

## 📋 Pasos para Configurar en Vercel

### Opción 1: Desde el Dashboard de Vercel (Recomendado)

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en **Settings** (Configuración)
3. Ve a la sección **General**
4. Busca **Node.js Version**
5. Selecciona **20.x** (o la más reciente disponible)
6. Haz clic en **Save** (Guardar)
7. Ve a la pestaña **Deployments**
8. Haz clic en **Redeploy** en el último deployment

### Opción 2: Usando vercel.json

Crea un archivo `vercel.json` en la raíz del proyecto:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

---

## 🔄 Hacer Deploy Nuevos Cambios

### 1. Commit y Push los cambios

```bash
git add .
git commit -m "fix: update Node.js version for Vercel deployment"
git push origin main
```

### 2. Vercel detectará automáticamente el push

- Si tienes GitHub integration activada, Vercel desplegará automáticamente
- Verifica el estado en: https://vercel.com/[tu-usuario]/[tu-proyecto]

---

## ✅ Verificación Post-Deployment

Después del deploy exitoso, verifica:

- [ ] El sitio carga correctamente
- [ ] La navegación funciona
- [ ] Las imágenes se cargan
- [ ] El menú móvil funciona
- [ ] Las animaciones funcionan suavemente
- [ ] Los enlaces externos abren correctamente

---

## 🐛 Troubleshooting Común

### Build falla con "out of memory"

**Solución:** Asegúrate que estás en un plan que soporte proyectos de este tamaño, o optimiza el build:

```json
// package.json
"scripts": {
  "build": "NODE_OPTIONS='--max-old-space-size=4096' react-scripts build"
}
```

### Imágenes no cargan

**Verificar:**
- Las URLs de imágenes en `data.json` son accesibles
- Las imágenes en `/public` están siendo copiadas correctamente

### Estilos no se aplican

**Verificar:**
- Todos los archivos `.scss` se importan correctamente
- No hay errores de compilación de Sass en los logs

### Rutas no funcionan (404)

**Solución:** Vercel necesita configuración especial para SPAs:

Crear `vercel.json`:
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

---

## 📊 Variables de Entorno (Si las necesitas)

Si tu proyecto necesita variables de entorno:

1. Ve a **Settings** > **Environment Variables** en Vercel
2. Agrega las variables necesarias:
   - `REACT_APP_API_URL`
   - Cualquier otra que uses

---

## 🎯 Comandos Útiles Locales

```bash
# Verificar que el build funciona localmente
npm run build

# Servir el build localmente para testing
npx serve -s build

# Verificar versión de Node
node -v

# Usar versión específica de Node (si tienes nvm)
nvm use 20
```

---

## 📝 Checklist Pre-Deployment

Antes de cada deploy importante:

- [ ] El código funciona localmente sin errores
- [ ] No hay errores en la consola del navegador
- [ ] `npm run build` termina exitosamente
- [ ] Todos los tests pasan: `npm test`
- [ ] Los linter errors están resueltos
- [ ] El sitio es responsive en móvil/tablet/desktop
- [ ] Todas las imágenes cargan correctamente
- [ ] Los enlaces funcionan

---

## 🔗 Enlaces Útiles

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Docs - Node.js](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/node-js)
- [React Deployment](https://create-react-app.dev/docs/deployment/)

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard
2. Verifica que la versión de Node está correctamente configurada
3. Asegúrate que `package.json` tiene `"engines": { "node": ">=18.x" }`
4. Verifica que el archivo `.nvmrc` existe con el contenido `20`

---

¡Buen deploy! 🚀

