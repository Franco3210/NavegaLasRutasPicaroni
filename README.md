Kiosco de Franco

E-commerce hecho con React

Descripción: Página web interactiva para un carrito de compras donde el usuario puede ver un catálogo de productos con su información detallada y debida categoría.
El usuario podrá agregar productos al carrito, quitarlos del mismo, realizar un pedido y obtener su ID de compra.

Tecnologías utilizadas: -React + Vite -Firebase -JavaScript -CSS

Funcionalidades principales: -Listado de productos. -Carrito de compras. -División por categorías. -Generación de ID de compra.

Estructura del proyecto:

src/
├── assets/
│ └── react.svg
├── components/
│ ├── Cart.jsx
│ ├── Cart.css
│ ├── CartWidget.jsx
│ ├── Error.jsx
│ ├── Checkout.jsx
│ ├── Item.jsx
│ ├── ItemCount.jsx
│ ├── ItemDetail.jsx
│ ├── ItemDetailContainer.jsx
│ ├── ItemListContainer.jsx
│ ├── ItemListContainer.css
│ ├── NavBar.jsx
│ └── NavBar.css
├── context/
│ ├── CartContext.jsx
├── service/
│ ├── firebase.jsx
│ └├── App.jsx ├── App.css ├── index.css └── main.

Instalación y uso

 1-Clonar el repositorio:

    git clone https://github.com/Franco3210/NavegaLasRutasPicaroni

 2-Instalar dependencias:

    npm install

 3-Ejecutar el proyecto:

    npm run dev

Licencia

   Este proyecto está bajo la licencia MIT.  
   Puedes usarlo, modificarlo y distribuirlo libremente.

Caracteristicas

   Características

- Interfaz amigable y minimalista.
- Navegación fluida.
- Base de datos integrada (Firebase).
- Soporte multiplataforma