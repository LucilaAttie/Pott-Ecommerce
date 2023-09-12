const products = [
    {
        id: "taza-rayada-azul",
        name: "Taza Rayada Azul",
        image: "../images/tazas/taza-rayada-azul.jpg",
        category: "tazas",
        price: 1000,
        stock: 100
    },

    {
        id: "taza-lunares",
        name: "Taza Lunares",
        image: "../images/tazas/taza-lunares.jpg",
        category: "tazas",
        price: 1000,
        stock: 100
    },

    {
        id: "taza-rayas-marron",
        name: "Taza Rayada Marrón",
        image: "../images/tazas/taza-rayada-marron.jpg",
        category: "tazas",
        price: 1000,
        stock: 100
    },

    {
        id: "taza-negra",
        name: "Taza Negra",
        image: "../images/tazas/taza-negra.jpeg",
        category: "tazas",
        price: 1000,
        stock: 100
    },

    {
        id: "bowl-liso",
        name: "Bowl Liso",
        image: "../images/bowls/bowl-liso.jpeg",
        category: "bowls",
        price: 1000,
        stock: 100
    },

    {
        id: "bowl-lunares",
        name: "Bowl Lunares",
        image: "../images/bowls/bowl-lunares.jpg",
        category: "bowls",
        price: 1000,
        stock: 100
    },

    {
        id: "bowl-rayado",
        name: "Bowl Rayado",
        image: "../images/bowls/bowl-rayado.jpg",
        category: "bowls",
        price: 1000,
        stock: 100
    },

    {
        id: "florero-rayado",
        name: "Florero Rayado",
        image: "../images/floreros/florero-rayado.jpeg",
        category: "floreros",
        price: 1000,
        stock: 100
    },

    {
        id: "florero-curvas",
        name: "Florero Curvas",
        image: "../images/floreros/florero-curvas.jpg",
        category: "floreros",
        price: 1000,
        stock: 100
    },

    {
        id: "florero-lunares",
        name: "Florero Lunares",
        image: "../images/floreros/florero-lunares.jpg",
        category: "floreros",
        price: 1000,
        stock: 100
    },

    {
        id: "plato-cuadrados",
        name: "Plato Cuadrados",
        image: "../images/platos/plato-cuadrados.jpg",
        category: "platos",
        price: 1000,
        stock: 100
    },
    {
        id: "plato-marble",
        name: "Plato Marble",
        image: "../images/platos/plato-marble.jpg",
        category: "platos",
        price: 1000,
        stock: 100
    }

]

export const getProducts = () => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 200);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.category === categoryId);
            resolve(productsCategory);
        }, 200);
    })
}