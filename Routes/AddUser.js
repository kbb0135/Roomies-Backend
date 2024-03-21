const express = require('express')
const router = express.Router()
const authUser = require('firebase/auth')
const auth = require('../firebase.js')
const emailPattern = /^[\w.-]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/i;


router.post("/", async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    //for server side validation check
    if (firstName === "" && lastName === "" && !emailPattern.test(email) && password.length < 8) {
        return res.status(401).json({error: "Please fill all fields"})
    }
    else {

        try {
            authUser.createUserWithEmailAndPassword(auth.auth, email, password)
              .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                await updateProfile(auth.currentUser, {displayName}); 
                
                await setDoc(doc(db, "Users", user.uid), {
                  FirstName: firstName,
                  LastName: lastName,
                  email: email,
                });
                // ...
               res.json({success:"Sign up successful!"})
              })
              .catch((error) => {
                // const errorMessage = error.message;

                
                res.json({error: `${error.code}: ${error.message}`})
                // ..
              });
          } catch {}
    }
})
module.exports = router;