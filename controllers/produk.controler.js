const ProdukService = require("../services/produk.service");
const produkService = new ProdukService();

class ProdukControler {

    async indexProduk(req, res) {
        try {
            const produkData = await produkService.getProduk(null);
            res.render('produk/daftarproduk',
                {
                    pageTitle: "HOME | daftar produk",
                    layout: "layouts/layouts",
                    produk: produkData
                });
        } catch (error) {
            console.log(error);
        }
    }


    async CreateProduk(req, res) {
        console.log("CreateProduk");
        res.render(
            'produk/produk-create',
            {
                pageTitle: "Create Produk",
                layout: 'layouts/layouts'
            }
        )
    }

    async produkDetail(req, res) {
        try {
            const id = req.params.id;
            const produkData = await produkService.getProduk(id);
            res.render("home",
                {
                    news: produkData,
                    pageTitle: produkData.title,
                    layout: "layouts/layouts"
                });
        } catch (error) {
            console.log(error);
        }
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

    async getProduk(req, res) {
        try {
            const produk = await produkService.getProduk();
            res.status(200).json({ massage: "Berhasi di simpan", data: produk });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: error.message
            })
        }

    }
    async deleteProduk(req, res) {
        try {
            const id = req.params.id;
            const deleteProduk = await produkService.deleteProduk(id);
            res.status(200).json({ message: "SUCCES", data: deleteProduk });
        } catch (error) {
            res.status(500).json({ message: "FAILED" });
            console.log(error);
        }
    }

    // async updateProduk(req, res) {
    //     try {
    //         const payload = req.body;
    //         const id = req.params.id;
    //         const update = await produkService.updateproduk(payload, id);
    //         res.status(200).json({ message: "SUCCES", data: update });
    //     } catch (error) {
    //         res.status(500).json({ message: "FAILED" });
    //         console.log(error);
    //     }
    // }

    async produkDetail(req, res) {
        try {
            const id = req.params.id;
            const produkData = await produkService.getPRodukId(id);
            //   res.render("kelasEdit", {
            //       kelas: kelasData,
            //   });
            res.status(200).json({ produk: produkData });
            console.log(error);
        } catch (error) {
            console.log(error);
        }

    }

    async updateProduk(req, res) {
        try {
            const ProdukId = req.params.id;
            const updatedProdukData = req.body;

            const editProduk = await produkService.updateProduk(ProdukId, updatedProdukData);
            console.log(editProduk);
            if (editProduk) {
                res
                    .status(200)
                    .json({ data: editProduk, message: "Poduk berhasil diubah" });
            } else {
                res.status(404).json({ message: "Produk tidak ditemukan" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Gagal mengedit Produk." });
        }
    }



}

module.exports = ProdukControler;