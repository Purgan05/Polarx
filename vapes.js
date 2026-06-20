let listaProductos = [
    // ========== PRODUCTOS VAPES - PLACEHOLDERS PARA RELLENAR ==========
    { id: 1, categoria: 'vapes', activo: true, orden: 1, agotado: false, nombre: "Producto 1", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_1_1.webp", "img/vapes/producto_1_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 2, categoria: 'vapes', activo: true, orden: 2, agotado: false, nombre: "Producto 2", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_2_1.webp", "img/vapes/producto_2_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 3, categoria: 'vapes', activo: true, orden: 3, agotado: false, nombre: "Producto 3", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_3_1.webp", "img/vapes/producto_3_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 4, categoria: 'vapes', activo: true, orden: 4, agotado: false, nombre: "Producto 4", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_4_1.webp", "img/vapes/producto_4_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 5, categoria: 'vapes', activo: true, orden: 5, agotado: false, nombre: "Producto 5", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_5_1.webp", "img/vapes/producto_5_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 6, categoria: 'vapes', activo: true, orden: 6, agotado: false, nombre: "Producto 6", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_6_1.webp", "img/vapes/producto_6_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 7, categoria: 'vapes', activo: true, orden: 7, agotado: false, nombre: "Producto 7", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_7_1.webp", "img/vapes/producto_7_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 8, categoria: 'vapes', activo: true, orden: 8, agotado: false, nombre: "Producto 8", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_8_1.webp", "img/vapes/producto_8_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 9, categoria: 'vapes', activo: true, orden: 9, agotado: false, nombre: "Producto 9", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_9_1.webp", "img/vapes/producto_9_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 10, categoria: 'vapes', activo: true, orden: 10, agotado: false, nombre: "Producto 10", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_10_1.webp", "img/vapes/producto_10_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 11, categoria: 'vapes', activo: true, orden: 11, agotado: false, nombre: "Producto 11", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_11_1.webp", "img/vapes/producto_11_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 12, categoria: 'vapes', activo: true, orden: 12, agotado: false, nombre: "Producto 12", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_12_1.webp", "img/vapes/producto_12_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 13, categoria: 'vapes', activo: true, orden: 13, agotado: false, nombre: "Producto 13", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_13_1.webp", "img/vapes/producto_13_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 14, categoria: 'vapes', activo: true, orden: 14, agotado: false, nombre: "Producto 14", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_14_1.webp", "img/vapes/producto_14_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 15, categoria: 'vapes', activo: true, orden: 15, agotado: false, nombre: "Producto 15", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_15_1.webp", "img/vapes/producto_15_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 16, categoria: 'vapes', activo: true, orden: 16, agotado: false, nombre: "Producto 16", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_16_1.webp", "img/vapes/producto_16_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 17, categoria: 'vapes', activo: true, orden: 17, agotado: false, nombre: "Producto 17", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_17_1.webp", "img/vapes/producto_17_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 18, categoria: 'vapes', activo: true, orden: 18, agotado: false, nombre: "Producto 18", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_18_1.webp", "img/vapes/producto_18_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 19, categoria: 'vapes', activo: true, orden: 19, agotado: false, nombre: "Producto 19", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_19_1.webp", "img/vapes/producto_19_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 20, categoria: 'vapes', activo: true, orden: 20, agotado: false, nombre: "Producto 20", modelo: "0000 Puffs", precio: 0, imagenes: ["img/vapes/producto_20_1.webp", "img/vapes/producto_20_2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] }
];
