//const fs = require("node:fs/promises");
const UserService = require("../services/user.service");
const userService = new UserService();
class UserControler {
  constructor(id, email, password,) {
    this.id = id;
    this.email = email;
    this.password = password;

  }

  async connect() {
    const file = await fs.readFile("./user.json", {
      encoding: "utf-8",
    });
    return eval(file);
  }

  async findByEmail(inputEmail) {
    try {
      const users = await this.connect();
      const userWithEmail = users.find((user) => user.email === inputEmail);
      return userWithEmail;
    } catch (error) {
      console.error(error);
    }
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/user.json", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  }

  async find() {
    try {
      const users = await this.connect();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  async register(req, res) {
    try {
        await userService.store(req.body);
        // Tampilkan pesan sukses atau respons yang sesuai
        res.status(201).json({ message: 'Registrasi berhasil' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal mendaftar' });
    }
}

}



module.exports = UserControler;
