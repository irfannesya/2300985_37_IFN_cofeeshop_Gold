const { produk } = require("./../models");

class ProdukService {
    constructor() {
        this.produkModel = produk;
    }
    async storeProduk(payload) {
        const date = new Date();
        const { nama, jenis, harga } = payload;
        // Simpan data pengguna ke database
        const data = await produk.create({

            nama, jenis, harga, createdAt: date, updatedAt: date,

        });
        return data;
    }
}
module.exports = ProdukService