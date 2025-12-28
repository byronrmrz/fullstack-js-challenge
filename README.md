# Prueba Técnica Fullstack - Offymarket

##  Descripción
Esta aplicación es una solución Full stack diseñada para visualizar la cantidad de posts de un usuario.  El sistema consume datos de una API externa, la cual es procesada en el Backend, para agrupar y contar los posts por autor por autor, y exponer los datos a una API REST propia.

El cliente web (Frontend) consume esta API local para presentar los resultados en un dashboard interactivo, permitiendo filtrar usuarios por nombre en tiempo real.

##  Tecnologías Utilizadas

### Backend
* **Node.js**: Entorno de ejecución.
* **Express.js**: Framework para la API REST.
* **Jest + Supertest**: Para pruebas unitarias y de integración.
* **Cors**: Manejo de permisos de acceso.

### Frontend
* **ReactJS (v18)**: Librería para la interfaz de usuario (Hooks).
* **Vite**: Empaquetador y entorno de desarrollo rápido.
* **TailwindCSS (v3)**: Framework de estilos utilitarios.
* **JavaScript (ES6+)**: Lógica del cliente.

---

##  Instalación y Ejecución

Para ejecutar este proyecto localmente, necesitarás tener **Node.js** instalado. El proyecto está dividido en dos carpetas principales: `Backend` y `Frontend`.

Primero, clona el repositorio.

cd Backend
```bash
npm install
```

Para iniciar el servidor en modo producción:
```bash
npm start
```

Para correr tests unitarios:
```bash
npm test
```


Levantar el Frontend
```bash
cd Frontend
npm install
```
Iniciar el servidor de desarrollo
```bash
npm run dev
```


