Pizzaria Napoli - Monorepo PWA 🍕
![alt text](https://vercel.com/button)
<!-- Reemplaza con tu URL de Vercel cuando esté lista -->
![alt text](https://img.shields.io/badge/License-MIT-yellow.svg)

![alt text](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![alt text](https://img.shields.io/badge/Next.js-15.2-black?logo=next.js)
![alt text](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![alt text](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![alt text](https://img.shields.io/badge/Nx-22.0-blue?logo=nx)

O Sabor da Itália, no Coração de Floripa.
Este repositorio contiene el código fuente de la Progressive Web App (PWA) para la Pizzaria Napoli, desarrollada como un monorepo gestionado con Nx. El objetivo es ofrecer una experiencia de usuario moderna, rápida y visualmente atractiva para los clientes, sirviendo como un escaparate digital del restaurante y un punto de entrada para los pedidos en línea.
🚀 Demo en Vivo
Puedes ver la última versión desplegada directamente en Vercel:
https://napoli-monorepo.vercel.app/

✨ Características Principales
🎨 Tema Oscuro y Claro: Interfaz adaptable a las preferencias del sistema o del usuario.
📱 Diseño Totalmente Responsivo: Experiencia de usuario optimizada para móviles, tabletas y escritorio.
🎠 Carruseles Interactivos: Un "rodizio visual" para el menú y una galería de imágenes, construidos con Embla Carousel.
🗺️ Integración con Google Maps: Muestra la ubicación de las sucursales con marcadores interactivos.
⚡ Rendimiento Optimizado: Uso de componentes de servidor de Next.js, carga diferida de imágenes (lazy loading) y optimización de fuentes para un Largest Contentful Paint (LCP) rápido.
🛠️ Calidad de Código Soberana: Adherencia a estrictas directrices de linting (ESLint), formateo (Prettier) y seguridad de tipos absoluta con TypeScript.

🛠️ Stack Tecnológico y Arquitectura
Este proyecto está construido sobre un stack moderno y robusto, aprovechando las mejores herramientas para garantizar escalabilidad, rendimiento y una excelente experiencia de desarrollo.
Categoría	Tecnología	Versión	Propósito
Framework	Next.js	~15.2	Renderizado híbrido (SSR/SSG), App Router.
Lenguaje	TypeScript	~5.9	Tipado estático y seguridad de código.
Estilos	Tailwind CSS	~3.4	Framework CSS de utilidades para un diseño rápido.
UI/Componentes	shadcn/ui & Radix UI	-	Componentes accesibles, personalizables y reutilizables.
Monorepo	Nx	~22.0	Gestión eficiente del espacio de trabajo y tareas.
Gestor de Paquetes	pnpm	~10.11	Rápido y eficiente en el uso de disco.
Animaciones	tailwindcss-animate	~1.0	Utilidades para animaciones y transiciones.
Iconos	Lucide React & React Icons	-	Librerías de iconos SVG ligeras.
Linting/Formato	ESLint & Prettier	-	Consistencia y calidad del código.
Testing	Jest & React Testing Library	~30.0	Pruebas unitarias y de integración.
Despliegue	Vercel	-	Plataforma optimizada para Next.js.

Diagrama de Arquitectura
El siguiente diagrama ilustra la estructura del monorepo y el flujo de datos principal dentro de la PWA.


graph TD
    subgraph "🌐 Usuario"
        direction LR
        U(Visita la PWA)
    end

    subgraph "☁️ Vercel"
        direction LR
        V(Plataforma de Despliegue)
    end

    subgraph "🛠️ Monorepo (Nx)"
        direction TB
        PWA["napoli-pwa (Next.js)"]
        subgraph "📚 Librerías Internas (SSoT)"
            direction LR
            B["branding.ts"]
            I["images.ts"]
            M["menu-data.ts"]
        end
        subgraph "🧩 Componentes UI (shadcn/ui)"
            direction LR
            C1(Button)
            C2(Card)
            C3(Carousel)
            C4(Dialog)
        end
        subgraph "🔒 Calidad del Código"
            direction LR
            L(ESLint)
            P(Prettier)
            J(Jest)
        end
    end

    U --> V
    V -- Sirve --> PWA
    PWA -- Consume --> C1 & C2 & C3 & C4
    PWA -- Importa Datos --> B & I & M
    L & P & J -- Validan --> PWA

    style U fill:#f9f,stroke:#333,stroke-width:2px
    style V fill:#000,stroke:#fff,stroke-width:2px,color:#fff
    style PWA fill:#9cf,stroke:#333,stroke-width:2px
🏁 Cómo Empezar (Desarrollo Local)
Sigue estos pasos para levantar el proyecto en tu máquina local.
Clonar el repositorio:

git clone https://github.com/pizzeria-napoli/napoli-monorepo.git
cd napoli-monorepo

Instalar dependencias:
Este proyecto utiliza pnpm como gestor de paquetes.


pnpm install
Configurar variables de entorno:
Crea un archivo .env.local en la raíz del proyecto y añade las claves necesarias, como la de la API de Google Maps.

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=TU_API_KEY_AQUI
Ejecutar el servidor de desarrollo:

pnpm dev
La aplicación estará disponible en http://localhost:4200.
📂 Estructura del Proyecto
El monorepo está organizado de la siguiente manera para mantener una clara separación de responsabilidades:

napoli-monorepo/
├── .docs/                # Documentación interna, manifiestos y directrices.
├── napoli-pwa/           # La aplicación principal de Next.js.
│   ├── public/           # Activos estáticos (imágenes, fuentes).
│   └── src/app/          # Código fuente de la PWA (App Router).
│       ├── components/   # Componentes React reutilizables.
│       ├── lib/          # Fuentes Únicas de Verdad (SSoT) y utilidades.
│       └── ...
├── packages/             # Futuro espacio para librerías compartidas (ej. UI-kit, utils).
├── nx.json               # Configuración global de Nx.
└── package.json          # Dependencias y scripts del workspace.

🔮 Proyecciones Futuras y Hoja de Ruta
Este proyecto es la base para una plataforma digital completa. Las siguientes funcionalidades están en la hoja de ruta para futuras expansiones:
[ ] Sistema de Pedidos en Línea Integrado:
Desarrollar un carrito de compras completo dentro de la PWA.
Integración con pasarelas de pago (Stripe, Mercado Pago).
[ ] Autenticación y Cuentas de Usuario:
Permitir a los usuarios registrarse para guardar direcciones e historial de pedidos.
Inicio de sesión social (Google, Facebook).
[ ] Seguimiento de Pedidos en Tiempo Real:
Interfaz para que el cliente vea el estado de su pedido (recibido, en preparación, en camino).
[ ] Notificaciones Push (PWA):
Enviar promociones, ofertas especiales y actualizaciones de pedidos directamente a los dispositivos de los usuarios.
[ ] Panel de Administración:
Una aplicación separada (o una sección protegida) para que el personal del restaurante gestione el menú, los precios y los pedidos entrantes.
[ ] Internacionalización (i18n):
Adaptar el contenido para múltiples idiomas, empezando por inglés y español, siguiendo las directrices del manifiesto de 12 pilares.
Este README fue generado con la asistencia de IA y está alineado con la documentación soberana del proyecto.

---

Author: RaZ Podestá - MetaShark Tech.
