# Estructura del Proyecto Hidrocrin

## Organización de Componentes

### 📁 `components/`
- **`layout/`** - Componentes de estructura y navegación
  - `AnimatedNav.tsx` - Navegación animada con GSAP
  
- **`sections/`** - Componentes de secciones principales
  - `HidrocrinLanding.tsx` - Landing page principal
  
- **`ui/`** - Componentes de interfaz reutilizables
  - `button.tsx` - Botones personalizados
  - `input.tsx` - Campos de entrada
  - `textarea.tsx` - Áreas de texto
  - `card.tsx` - Tarjetas de contenido

### 📁 `assets/`
- **`images/`** - Constantes de rutas de imágenes
  - `index.ts` - Exportaciones centralizadas de imágenes y textos alternativos

### 📁 `lib/`
- **`utils.ts`** - Utilidades compartidas (clsx, tailwind-merge)

## Convenciones

### Importaciones
- Usar rutas relativas para componentes dentro de la misma carpeta
- Usar el archivo `index.ts` para exportaciones centralizadas
- Importar constantes de imágenes desde `assets/images`

### Estructura de Archivos
- Un componente por archivo
- Nombres en PascalCase para componentes
- Nombres en camelCase para utilidades
- Archivos de índice para exportaciones limpias

## Beneficios de esta Estructura

✅ **Organización clara** - Separación por tipo de componente  
✅ **Escalabilidad** - Fácil agregar nuevos componentes  
✅ **Mantenibilidad** - Estructura predecible  
✅ **Reutilización** - Componentes UI centralizados  
✅ **Gestión de assets** - Rutas centralizadas y tipadas  
