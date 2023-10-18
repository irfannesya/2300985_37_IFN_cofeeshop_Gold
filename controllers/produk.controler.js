const ProdukService = require("../services/produk.service");
const produkService = new ProdukService();

class ProdukControler {
    constructor(nama, jenis, harga) {
        this.nama = nama;
        this.jenis = jenis;
        this.harga = harga;

    }



    async CreateProduk(req, res) {
        res.render(
            'produk/produk-create',
            {
                pageTitle: "Crete Produk",
                layout: 'layouts/layouts'
            }
        )
    }


    async save(req, res) {
        try {
            // ubah ke save to db lewat service
            const payload = req.body;
            const store = await produkService.storeProduk(payload);
            res.status(200).json({ message: "SUCCES", data: store });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: error.message
            })
        }
    }




}

module.exports = ProdukControler;