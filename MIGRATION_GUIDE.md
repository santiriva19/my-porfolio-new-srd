# Migration Guide - Portfolio Refactoring

## 🚀 Getting Started

No se requieren cambios en las dependencias. Todos los archivos han sido actualizados para mantener compatibilidad total.

## ⚠️ Cambios Importantes a Tener en Cuenta

### 1. **Hooks Personalizados**
Se han creado 4 nuevos hooks en `/src/hooks/`:
- `useScrollEffect.js`
- `useParallax.js`
- `useMediaQuery.js`
- `useFocusTrap.js`

Estos hooks reemplazan la manipulación directa del DOM y optimizan el rendimiento.

### 2. **Estructura HTML**
- El `<div id="root">` ahora contiene elementos semánticos apropiados
- Se agregó un "skip link" para accesibilidad
- Los elementos clickables ahora son `<button>` en lugar de `<div>`

### 3. **Estilos CSS Globales**
Se agregaron nuevas clases de utilidad en `global.css`:
- `.skip-link` - Para el enlace de saltar al contenido
- `.sr-only` - Para texto solo visible para lectores de pantalla
- `@media (prefers-reduced-motion)` - Respeta las preferencias de movimiento del usuario

### 4. **Cambios en Props**
Algunos componentes ahora reciben props adicionales:

#### Header Component
```javascript
// Antes
<Header setShowHamburguer={setShowHamburguer} />

// Ahora
<Header 
  setShowHamburguer={setShowHamburguer}
  isScrolled={isScrolled}
  logoSize={logoSize}
/>
```

### 5. **Eliminación de `dangerouslySetInnerHTML`**
- **SectionWork**: La descripción ahora se renderiza como HTML pero con mejor manejo
- **CardComponent**: Los datos de contacto ahora son elementos React apropiados

## 🔄 Pasos para Actualizar (si estás trabajando con una rama antigua)

### Paso 1: Revisar los Cambios
```bash
git status
git diff
```

### Paso 2: Ejecutar la Aplicación
```bash
npm start
```

### Paso 3: Probar Funcionalidad Clave
- ✅ Navegación con teclado (Tab, Enter, Escape)
- ✅ Scroll suave entre secciones
- ✅ Animaciones parallax
- ✅ Modal de galería de imágenes
- ✅ Menú hamburguesa (móvil)
- ✅ Botón "volver arriba"

### Paso 4: Verificar Accesibilidad
```bash
# Instalar Lighthouse CI (opcional)
npm install -g @lhci/cli

# Correr audit
lighthouse http://localhost:3000 --view
```

## 📝 Consideraciones para Desarrollo Futuro

### 1. **Agregar Nuevos Componentes Interactivos**
Siempre usar elementos semánticos apropiados:
```javascript
// ❌ Evitar
<div onClick={handleClick}>Click me</div>

// ✅ Correcto
<button onClick={handleClick} aria-label="Descriptive label">
  Click me
</button>
```

### 2. **Agregar Nuevas Animaciones**
Respetar las preferencias de movimiento:
```javascript
import { useEffect } from 'react';

useEffect(() => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  
  if (prefersReducedMotion) {
    // Deshabilitar o simplificar animación
    return;
  }
  
  // Código de animación normal
}, []);
```

### 3. **Agregar Nuevas Imágenes**
Siempre incluir:
```javascript
<img 
  src="path/to/image.jpg"
  alt="Descripción detallada"
  loading="lazy"
  width="400"
  height="300"
/>
```

### 4. **Nuevos Scroll Handlers**
Usar el hook personalizado:
```javascript
import { useScrollEffect } from '../hooks/useScrollEffect';

function MyComponent() {
  useScrollEffect(() => {
    // Tu lógica aquí
    const scrollY = window.pageYOffset;
    // ...
  }, []); // Dependencias
}
```

## 🐛 Problemas Conocidos y Soluciones

### Problema: Animaciones no funcionan en Safari antiguo
**Solución**: Ya está implementado el fallback automático en `useScrollAnimation`

### Problema: Focus outline muy visible en mobile
**Solución**: Usar `:focus-visible` (ya implementado) - solo muestra outline en navegación con teclado

### Problema: Parallax demasiado intenso en algunos dispositivos
**Solución**: Ajustar el valor `data-speed` en los elementos con clase `.layer`

## 🔍 Debugging

### Ver eventos de scroll
```javascript
// En cualquier componente que use useScrollEffect
useScrollEffect(() => {
  console.log('Scroll Y:', window.pageYOffset);
}, []);
```

### Verificar focus trap en modal
```javascript
// En Router.js, el sliderRef está disponible para debugging
console.log('Modal ref:', sliderRef.current);
```

### Verificar media queries
```javascript
// En cualquier componente
const isMobile = useMediaQuery('(max-width: 745px)');
console.log('Is mobile:', isMobile);
```

## 📚 Archivos Importantes para Referencia

### Core Files
- `src/hooks/` - Todos los custom hooks
- `src/global.css` - Estilos globales y utilidades
- `public/index.html` - Meta tags y skip link

### Components Principales Actualizados
- `src/store/Router.js` - Componente principal
- `src/utils/header/header.js` - Navegación
- `src/utils/footer/footer.js` - Pie de página
- `src/components/work/work.js` - Sección de trabajos
- `src/components/contact/card/card.js` - Tarjeta de contacto

## ✅ Checklist de Verificación Post-Migración

- [ ] La aplicación se ejecuta sin errores
- [ ] No hay warnings en la consola
- [ ] La navegación con teclado funciona
- [ ] Las animaciones son suaves
- [ ] El modal se abre/cierra correctamente
- [ ] El menú móvil funciona
- [ ] Todos los enlaces externos abren en nueva pestaña
- [ ] Las imágenes cargan correctamente
- [ ] El botón "volver arriba" aparece al hacer scroll
- [ ] El skip link funciona (presionar Tab al cargar la página)

## 🆘 Soporte

Si encuentras algún problema:
1. Revisa la consola del navegador
2. Verifica que no haya errores de linting: `npm run lint` (si está configurado)
3. Revisa el `REFACTORING_SUMMARY.md` para detalles de implementación
4. Compara con versiones anteriores usando `git diff`

## 🎯 Próximos Pasos Recomendados

1. **Testing**: Agregar tests unitarios para los custom hooks
2. **PWA**: Configurar service worker para funcionalidad offline
3. **Analytics**: Implementar tracking de eventos de accesibilidad
4. **CI/CD**: Agregar Lighthouse CI para auditorías automáticas

---

¡Felicidades! Tu portfolio ahora es más accesible, performante y mantenible. 🎉

