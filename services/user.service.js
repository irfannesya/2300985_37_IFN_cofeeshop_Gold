const { pelanggan } = require("./../models");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
        this.userModel = pelanggan;
    }
    async store(payload) {
        const date = new Date();
        const { name, email, password } = payload;
        const encript = await bcrypt.hash(password, 10);

        // Simpan data pengguna ke database
        const data = await pelanggan.create({

            name, email, password: encript, createdAt: date, updatedAt: date,

        });
        return data;
    }
}   
module.exports = UserService