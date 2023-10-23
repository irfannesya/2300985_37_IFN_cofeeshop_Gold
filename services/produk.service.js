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


    //api 
    async updateProduk(produkId, updatedProdukData) {
        try {
            const product = await this.produkModel.findOne({ where: { id: produkId } });
            return await product.update(updatedProdukData)

        } catch (error) {
            console.error(error);
            throw new Error(error);
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