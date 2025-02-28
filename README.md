# Nombre del Proyecto
restauranteGit

## Descripción
Sistema de reserva de mesas y gestion de pedidos de un restaurante italiano.

## Stack Tecnológico

### Frontend
- Angular 17
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Angular Material

### Backend
- Node.js
- Express.js
- MongoDB (con MongoDB Compass)
- Mongoose

### Despliegue
- Frontend: Vercel
- Backend: Vercel
- Base de datos: MongoDB Atlas

## Características Principales

- Sistema de reserva de mesas
- Panel de administración
- Sistema de gestion de pedidos

## Requisitos Previos
- Node.js (versión 21.6.1 o superior)
- Angular CLI
- MongoDB Compass
- Express

## Funcionalidad

### Página Principal
- Página de bienvenida con diseño elegante y minimalista
- Acceso directo a las secciones principales: Reservas y Pedidos
- Navegación intuitiva mediante botones

### Sistema de Reservas
- Formulario de reserva que permite al cliente:
  - Seleccionar fecha y hora
  - Indicar número de comensales
  - Añadir nombre a la reserva

### Gestión de Pedidos
- Carta digital completa del restaurante
- Selección de platos y personalización de pedidos
- Carrito de compra con resumen del pedido
- Proceso de checkout simplificado

### Confirmación de Pedido

- Resumen del pedido
- Rellenar dirección y teléfono
- Confirmación de pedido y notificación al restaurante

### Características Adicionales
- Diseño responsive adaptado a todos los dispositivos
- Interfaz intuitiva y fácil de usar

## Instalación y Configuración

### Frontend
```bash
# Clonar el repositorio
git clone https://github.com/Ppm19/restauranteGit.git

# Navegar al directorio del proyecto
cd restauranteGit

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

### Backend
```bash
# Clonar el repositorio
git clone https://github.com/Ppm19/backEnd-restauranteGit.git

# Navegar al directorio del backend
cd backEnd-restauranteGit

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

## API Endpoints

### Carta/Menú
- `GET /entrantes` - Obtener lista de entrantes
- `GET /carnes` - Obtener lista de carnes
- `GET /pasta` - Obtener lista de pastas
- `GET /postres` - Obtener lista de postres
- `GET /bebidas` - Obtener lista de bebidas

### Pedidos
- `GET /pedidos` - Obtener todos los pedidos
- `POST /realizar-pedido` - Crear nuevo pedido
  ```typescript
  interface Pedido {
    nombre: string;        // Nombre del pedido (generado automáticamente)
    platos: any[];        // Array de platos seleccionados
    precio: number;       // Precio total del pedido
    estadoReserva: string; // Estado del pedido (por defecto: 'pendiente')
    direccion: string;    // Dirección de entrega
    telefono: string;     // Teléfono de contacto
  }
  ```

### Reservas
- `POST /crear-reserva` - Crear nueva reserva
  ```typescript
  interface Reserva {
    nombre: string;     // Nombre de la persona que reserva
    fecha: string;      // Fecha de la reserva
    hora: string;       // Hora de la reserva
    ncomensales: number; // Número de comensales
  }
  ```

### Base URL
- Frontend: https://front-restaurante-git.vercel.app
- Backend: https://back-end-restaurante-git.vercel.app
