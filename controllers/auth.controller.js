const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const pool = require('../db');

class AuthController {
    async registration(req, res) {
        try {
            const { username, password } = req.body;
            pool.query(`SELECT * FROM users WHERE username='${username}'`, (error, result) => {
                if (error) {
                    console.log('Error ' + error);
                } else {
                    if (result.rowCount > 0) return res.status(302).json({ 'message': `Utilizatorul ${username} deja exista` });
                }
            })

            const hashPassword = bcrypt.hashSync(password, 5);
            const createUser = `INSERT INTO users(username,password) VALUES ('${username}','${hashPassword}')`;

            pool.query(createUser, (error, result) => {
                if (error) { console.log('Error' + error) }
                else { return res.json({ 'message': `Utilizator ${username} creat cu succes` }) }
            })

        } catch (e) {
            console.log(e);
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body;
            pool.query(`SELECT * FROM users WHERE username='${username}'`)
            .then(result => {
                if(result.rowCount!=1) { return res.status(404).json({message:`Utilizatorul ${username} nu a fost gasit`}) }
                else{
                    const validPassword = bcrypt.compareSync(password,result.rows[0].password);
                    if(validPassword){
                        return res.status(200).json({username,isLoggedIn:true})
                    }else{
                        return res.status(400).json({message:'Datele nu coincid'})
                    }                
                }
            })
            .catch(err => res.status(500).json({message:'Eroare din partea serverului'}));

        } catch (e) {
            console.log(e);
        }
    }

    async logout(req,res){
        const {username} = req.body;
        return res.status(200).json({username,isLoggedIn:false});
    }

}

module.exports = new AuthController();