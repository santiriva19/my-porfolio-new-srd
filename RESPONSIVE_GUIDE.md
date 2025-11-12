# Guía del Sistema Responsive

## 📱 Enfoque Mobile-First

El proyecto ahora utiliza un enfoque **Mobile-First**, lo que significa que los estilos base son para móvil y se agregan estilos para pantallas más grandes usando `min-width`.

## 🎯 Breakpoints Estandarizados

### Breakpoints Disponibles

```scss
$breakpoint-xs: 320px;   // Móviles pequeños
$breakpoint-sm: 576px;   // Móviles grandes
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 1024px;  // Desktop pequeño
$breakpoint-xl: 1280px;  // Desktop grande
$breakpoint-xxl: 1536px; // Desktop extra grande
```

### Mixins de Responsive

#### Mobile First (Recomendado)

```scss
// Base: móvil (sin media query)
.component {
  font-size: 14px;
  
  // Tablets y superior
  @include md {
    font-size: 16px;
  }
  
  // Desktop y superior
  @include lg {
    font-size: 18px;
  }
}
```

#### Desktop First (Cuando sea necesario)

```scss
.component {
  width: 100%;
  
  // Tablet y menor
  @include max-md {
    width: 80%;
  }
  
  // Móvil
  @include max-sm {
    width: 100%;
  }
}
```

#### Rango Personalizado

```scss
// Solo para tablets (768px - 1023px)
@include between($breakpoint-md, $breakpoint-lg - 1px) {
  // estilos específicos para tablets
}
```

## 🎨 Variables de Diseño

### Colores

```scss
$color-primary: #762ada;
$color-primary-light: #d59cff;
$color-white: #ffffff;
$color-black: #000000;
$color-gray: rgb(160, 160, 160);
```

### Espaciado (Sistema de 4px)

```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-xxl: 3rem;     // 48px
$spacing-xxxl: 4rem;    // 64px
```

### Tipografía

```scss
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
// ... hasta 6xl
```

### Transiciones

```scss
$transition-fast: 0.15s ease;
$transition-base: 0.3s ease;
$transition-slow: 0.5s ease;
```

## 🔧 Mixins Útiles

### Focus Styles

```scss
.button {
  @include focus-visible; // Outline estándar
  // o
  @include focus-visible-strong; // Outline más grueso
}
```

### Interactive States

```scss
.card {
  @include interactive-states {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
}
```

### Screen Reader Only

```scss
.hidden-text {
  @include sr-only; // Oculto visualmente pero accesible
}
```

### Button Reset

```scss
.custom-button {
  @include button-reset; // Elimina estilos por defecto
  // Agrega tus estilos personalizados
}
```

### Container

```scss
.section {
  @include container; // Contenedor responsivo con max-width
  // o con max-width personalizado
  @include container($breakpoint-lg);
}
```

### Truncate & Line Clamp

```scss
.title {
  @include truncate; // Una línea con ellipsis
}

.description {
  @include line-clamp(3); // Máximo 3 líneas
}
```

### Reduced Motion

```scss
@include reduced-motion; // Respeta prefers-reduced-motion
```

## 📝 Ejemplos de Uso

### Componente Responsive Completo

```scss
@use "../../variables" as *;
@use "../../mixins" as *;

.card {
  // Base (móvil)
  padding: $spacing-md;
  font-size: $font-size-sm;
  
  // Tablet
  @include md {
    padding: $spacing-lg;
    font-size: $font-size-base;
  }
  
  // Desktop
  @include lg {
    padding: $spacing-xl;
    font-size: $font-size-lg;
  }
  
  // Interactive states
  @include interactive-states {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba($color-primary, 0.2);
  }
  
  // Focus
  @include focus-visible;
  
  // Reduced motion
  @include reduced-motion;
}
```

### Grid Responsive

```scss
.grid {
  display: grid;
  gap: $spacing-md;
  
  // Móvil: 1 columna
  grid-template-columns: 1fr;
  
  // Tablet: 2 columnas
  @include md {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
  }
  
  // Desktop: 3 columnas
  @include lg {
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-xl;
  }
  
  // Desktop grande: 4 columnas
  @include xl {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Tipografía Responsive

```scss
.heading {
  // Móvil
  font-size: $font-size-2xl;
  line-height: $line-height-tight;
  
  // Tablet
  @include md {
    font-size: $font-size-3xl;
  }
  
  // Desktop
  @include lg {
    font-size: $font-size-4xl;
    line-height: $line-height-normal;
  }
  
  // Desktop grande
  @include xl {
    font-size: $font-size-5xl;
  }
}
```

## 🎯 Mejores Prácticas

### 1. Usa Variables

❌ **Evitar:**
```scss
.card {
  color: #762ada;
  padding: 16px;
}
```

✅ **Correcto:**
```scss
.card {
  color: $color-primary;
  padding: $spacing-md;
}
```

### 2. Mobile First

❌ **Evitar (Desktop First):**
```scss
.button {
  width: 200px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
}
```

✅ **Correcto (Mobile First):**
```scss
.button {
  width: 100%;
  
  @include md {
    width: 200px;
  }
}
```

### 3. Usa Mixins

❌ **Evitar:**
```scss
.card {
  &:focus {
    outline: 2px solid #762ada;
    outline-offset: 4px;
  }
}
```

✅ **Correcto:**
```scss
.card {
  @include focus-visible;
}
```

### 4. Touch Targets

Asegúrate de que los elementos interactivos tengan al menos **44x44 píxeles**:

```scss
.button {
  min-width: 44px;
  min-height: 44px;
  padding: $spacing-sm $spacing-md;
}
```

### 5. Accesibilidad

```scss
.component {
  // Siempre incluye soporte para reduced motion
  @include reduced-motion;
  
  // Usa focus-visible para mejor UX
  @include focus-visible;
  
  // Textos ocultos para screen readers
  .hidden-label {
    @include sr-only;
  }
}
```

## 📦 Estructura de Archivos

```
src/
├── _variables.scss      # Variables globales
├── _mixins.scss         # Mixins de responsive y utilidades
├── _flex_custom.scss    # Mixins de flexbox
├── global.scss          # Estilos globales
└── components/
    └── MyComponent/
        └── MyComponent.module.scss  # Estilos del componente
```

## 🔄 Importar en Componentes

```scss
// En tu archivo .module.scss
@use "../../variables" as *;
@use "../../mixins" as *;
@use "../../flex_custom" as *;

.component {
  @include center_center;
  color: $color-primary;
  padding: $spacing-md;
  
  @include md {
    padding: $spacing-lg;
  }
}
```

## 🧪 Testing Responsive

### Breakpoints a Probar

1. **320px** - Móviles pequeños (iPhone SE)
2. **375px** - Móviles estándar (iPhone)
3. **768px** - Tablets (iPad)
4. **1024px** - Desktop pequeño
5. **1440px** - Desktop estándar
6. **1920px** - Desktop grande

### Chrome DevTools

1. Abre DevTools (F12)
2. Activa "Toggle device toolbar" (Ctrl+Shift+M)
3. Prueba diferentes dispositivos predefinidos
4. Usa "Responsive" para probar breakpoints exactos

## 🎨 Sistema de Diseño

Este sistema responsive es parte de un design system más amplio que incluye:

- ✅ Breakpoints consistentes
- ✅ Variables de color
- ✅ Sistema de espaciado
- ✅ Tipografía escalable
- ✅ Componentes reutilizables
- ✅ Mixins de utilidad
- ✅ Accesibilidad integrada
- ✅ Soporte para reduced motion

## 📚 Recursos

- [Responsive Web Design - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Mobile First CSS](https://zellwk.com/blog/how-to-write-mobile-first-css/)
- [SASS Guidelines](https://sass-guidelin.es/)
- [Inclusive Design](https://inclusive-components.design/)

---

¡Felicidades! Ahora tienes un sistema responsive moderno, mantenible y accesible. 🎉

