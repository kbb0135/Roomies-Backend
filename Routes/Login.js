const express = require('express');
const router = express.Router();
const setLogin = require("firebase/auth");
const auth = require("../firebase")

router.post("/", async(req, res) => {
    const {email, password} = req.body;
    try {
        const userCredential = await setLogin.signInWithEmailAndPassword(auth.auth, email, password);
        const user = userCredential.user;
        if (user) {
            res.json({success:"login successful"})
        }
        else {
            res.json({error:"login failed"})
        }
    }
    catch (err) {
        console.log(err.cod)
    }
})
