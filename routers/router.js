const express = require("express");
const homeRouter = require("./web/home");
const router = express.Router();
const api = require("./api/api");

const authRouter = require("./web/auth");
router.use('/', authRouter);

router.use('/api', api);
router.use("/api", (res, req) => {
    res.status(404).json({ "message": "API notfound" })
})

router.use('/', homeRouter);
router.use('/', (req, res) => {
    res.render("errors/404");
});



module.exports = router;