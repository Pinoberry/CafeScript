# CafeScript - E-commerce de Café

Bienvenido a CaféScript, una aplicación de comercio electrónico moderna para amantes del café, construida con React, TypeScript y Tailwind CSS.

## Características

- Catálogo de productos de café
- Carrito de compras interactivo
- Diseño responsivo
- Navegación intuitiva
- Procesamiento de pedidos

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

## Estructura del proyecto

```
CafeScript/
├── public/                 # Archivos estáticos
│   └── vite.svg           # Logo de Vite
├── src/                    # Código fuente de la aplicación
│   ├── assets/            # Recursos estáticos
│   │   └── react.svg      # Logo de React
│   ├── components/        # Componentes reutilizables
│   │   ├── Cart.tsx      # Componente del carrito
│   │   ├── Checkout.tsx  # Componente de pago
│   │   ├── Footer.tsx    # Pie de página
│   │   ├── Header.tsx    # Encabezado
│   │   ├── Hero.tsx      # Sección hero
│   │   ├── ProductCard.tsx # Tarjeta de producto
│   │   └── ProductCatalog.tsx # Catálogo de productos
│   ├── context/          # Contextos de React
│   │   └── CartContext.tsx # Contexto del carrito
│   ├── data/             # Datos de la aplicación
│   │   └── products.ts   # Lista de productos
│   ├── types/            # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── App.css           # Estilos globales
│   ├── App.tsx           # Componente principal
│   ├── index.css         # Estilos base
│   ├── main.tsx          # Punto de entrada
│   └── vite-env.d.ts     # Tipos de Vite
├── .gitignore           # Archivos ignorados por Git
├── README.md            # Este archivo
├── eslint.config.js     # Configuración de ESLint
├── index.html           # Plantilla HTML principal
├── package.json         # Dependencias y scripts
├── package-lock.json    # Versiones exactas de dependencias
├── postcss.config.js    # Configuración de PostCSS
├── tailwind.config.js   # Configuración de Tailwind CSS
├── tsconfig.json        # Configuración de TypeScript
├── tsconfig.app.json    # Configuración de TypeScript para la aplicación
├── tsconfig.node.json   # Configuración de TypeScript para Node
└── vite.config.ts       # Configuración de Vite
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/cafescript.git
   cd CafeScript
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173).

## Construcción para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos de producción se generarán en el directorio `dist/`.

## Despliegue

El proyecto está configurado para desplegarse en GitHub Pages. Para desplegar:

```bash
npm run deploy
```
