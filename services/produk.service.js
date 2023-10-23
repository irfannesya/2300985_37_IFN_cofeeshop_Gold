const { QueryTypes } = require("sequelize");
const { produk, Sequelize } = require("./../models");

class ProdukService {
    constructor() {
        this.produkModel = produk;
    }
    async storeProduk(payload) {
        const date = new Date();
        const { nama, jenis, harga, image, deskripsi } = payload;
        // Simpan data pengguna ke database
        const data = await produk.create({

            nama, jenis, harga, image, deskripsi, createdAt: date, updatedAt: date,

        });
        return data;
    }

    async getProduk() {
        try {
            return await this.produkModel.findAll();
        } catch (error) {
            console.log(error);
        }
        return data
    }
    async deleteProduk(id) {
        const produks = this.produkModel.destroy({
            where: {
                id
            }
        })
        return produks
    }


    async updateProduk(payload, id) {
        try {
            const { nama, jenis, harga, image, deskripsi } = payload;

            const produkUpdate = await this.produkModel.findOne({
                where: { id: id },
            });

            if (!produkUpdate) {
                throw new Error("Produk tidak ditemukan.");
            }


            await produkUpdate.update({
                nama,
                jenis,
                harga,
                image,
                deskripsi
            });

            return produkUpdate

        } catch (error) {
            console.log(error);
        }
    }

    async getPRodukId(id) {
        try {
            return await this.produkModel.findOne({
                where: {
                    id,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }




}
module.exports = ProdukService