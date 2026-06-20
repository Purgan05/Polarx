let listaProductos = [
    // ========== PRODUCTOS VAPES ==========
    { id: 1, categoria: 'vapes', activo: true, orden: 1, agotado: false, nombre: "Nexa Ultra", modelo: "50,000 Puffs", precio: 350, imagenes: ["img/vapes/nexa_ultra_50k_f1.webp", "img/vapes/nexa_ultra_50k_f2.webp"], sabores: [
        { nombre: "Watermelon Ice", disponible: true }
        
    ] },
    { id: 2, categoria: 'vapes', activo: true, orden: 2, agotado: false, nombre: "Relx", modelo: "15,000 Puffs", precio: 265, imagenes: ["img/vapes/relx_f1.webp", "img/vapes/relx_f2.webp"], sabores: [
        { nombre: "OOlong Ice Tea", disponible: true }
    ] },
    { id: 3, categoria: 'vapes', activo: true, orden: 3, agotado: false, nombre: "Elux", modelo: "50,000 Puffs", precio: 0, imagenes: ["img/vapes/elux_50k_f1.webp", "img/vapes/elux_50k_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 4, categoria: 'vapes', activo: true, orden: 4, agotado: false, nombre: "Lost Vape", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_bcc_f1.webp", "img/vapes/lostvape_bcc_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 5, categoria: 'vapes', activo: true, orden: 5, agotado: false, nombre: "Lost Vape", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_bm_f1.webp", "img/vapes/lostvape_bm_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 6, categoria: 'vapes', activo: true, orden: 6, agotado: false, nombre: "Lost Vape BMB", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_bmb_f1.webp", "img/vapes/lostvape_bmb_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 7, categoria: 'vapes', activo: true, orden: 7, agotado: false, nombre: "Lost Vape CB", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_cb_f1.webp", "img/vapes/lostvape_cb_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 8, categoria: 'vapes', activo: true, orden: 8, agotado: false, nombre: "Lost Vape GKM", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_gkm_f1.webp", "img/vapes/lostvape_gkm_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 9, categoria: 'vapes', activo: true, orden: 9, agotado: false, nombre: "Lost Vape JP", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_jp_f1.webp", "img/vapes/lostvape_jp_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 10, categoria: 'vapes', activo: true, orden: 10, agotado: false, nombre: "Lost Vape POP", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_pop_f1.webp", "img/vapes/lostvape_pop_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 11, categoria: 'vapes', activo: true, orden: 11, agotado: false, nombre: "Lost Vape PP", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_pp_f1.webp", "img/vapes/lostvape_pp_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 12, categoria: 'vapes', activo: true, orden: 12, agotado: false, nombre: "Lost Vape SK", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_sk_f1.webp", "img/vapes/lostvape_sk_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 13, categoria: 'vapes', activo: true, orden: 13, agotado: false, nombre: "Lost Vape TB", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_tb_f1.webp", "img/vapes/lostvape_tb_f2.webp"], sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true }
    ] },
    { id: 14, categoria: 'vapes', activo: true, orden: 14, agotado: false, nombre: "Lost Vape WC", modelo: "7,500 Puffs", precio: 0, imagenes: ["img/vapes/lostvape_wc_f1.webp", "img/vapes/lostvape_wc_f2.webp"], sabores: [
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