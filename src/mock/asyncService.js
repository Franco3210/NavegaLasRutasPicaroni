const products = [
    {
        id: 1,
        name: "Coca Cola",
        price: 250,
        description: "Gaseosa 500ml",
        stock : 10,
        image:  "https://www.cofas.com.uy/wp-content/uploads/2024/05/502066.jpg"
    },
    {
        id: 2,
        name: "Papas Lays",
        price: 150,
        description: "Papas fritas clasicas",
        stock: 10,
        image: "https://www.distribuidoralosmolinos.com.uy/wp-content/uploads/sites/6/2022/10/lays-400.jpg"
    },
    {
        id: 3,
        name: "Chocolate Milka",
        price: 200,
        description: "Chocolate con leche",
        stock: 10,
        image: "https://prod-resize.tiendainglesa.com.uy/images/medium/P388151-1.jpg?20250916120712,Chocolate-con-Leche-MILKA-150-gr-en-Tienda-Inglesa"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const product = products.find(p => p.id === id);

            if(product){
                resolve(product);
            }else{
                reject("Producto no encontrado");
            }

        }, 500);
    });
};