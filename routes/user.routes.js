const router = require('express').Router()
const { getAllUsers, getUserById, } = require('../controllers/user.controller')


router.get('/' , async (req , res)=>{
    res.send('<h1>Bienvenidos</h1>')
})


router.get('/users', getAllUsers);

router.get('/:id', getUserById);

module.exports  = router