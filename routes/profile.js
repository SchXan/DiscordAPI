const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", (req, res) => {
    const userId = req.params.id;

    axios({
        method: "GET",
        url: `https://discord.com/api/v9/users/${userId}/profile`,
        headers: {
            "authorization": 'OTMyODE3MjE3NjE0MTE4OTQz.GhnCt1.frQT0MbBTLG-bHkRtN-k8O17mR3pJAjtjRYZl8',
        },
    }).then(response => {
        return res.send(response.data);
    })
    .catch(error => {
        console.error("Kesalahan permintaan:", error.message);
        return res.status(500).send("Terjadi kesalahan saat mendapatkan profil pengguna");
    });
});

module.exports = router;
