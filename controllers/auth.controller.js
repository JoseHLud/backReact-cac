const userModel = require('../model/user.model');
const { encrypt, compare, generateToken } = require('../utils/index')

const authController = {
    register: async (req, res) => {
        // validar email y password
    const {email, password} = req.body;
    
    if (!email || !password) {
        res.status(500).json({
          message: 'Email and password are required',
        });
        return;
    }

    //consultar email

    const existEmail = await userModel.getUserByEmail(email);

    if (existEmail) {
        res.status(500).json({
            msg: 'This email already exist',
        });

        return;
    }

    // encriptar contraseña

    const encrypted = await encrypt(password);

    // crear un usuario

    const newUser = {
        id: Date.now(),
        email,
        password: encrypted,
    }

    // guardar en base de datos

    const userCreated = await userModel.create(newUser);

    res.status(200).json({
        message: "User created successfully",
    });
    return;
    },
    login: async (req, res) => {
         // validar email y password
   const {email, password} = req.body
   if (!email || !password) {
       res.status(400).json({
           msg: 'Email and password are required',
       });
       return;
   }

   // validar si existe usuario

   const user = await userModel.getUserByEmail(email)
   if(!user) {
       res.status(400).json({
           msg: 'Invalid email or password',
       });
       return;
   }

   // comparar password

   const passIsValid = await compare(password, user.password)
   if (!passIsValid) {
       res.status(400).json({
           msg: 'Invalid email or password',
       });
       return;
   }

   // validar usuario

   
   if (email !== user.email) {
       res.status(400).json({
           msg: 'Imvalid email or password',
       });
       retun;
   }

   //crear token

   const token = await generateToken({
       id: user.id,
       email: user.email,
   });

   // enviar datos

   res.status(200).json({
       message: "Login successful",
       token,
     });
     return;
    },
    
};

// getAllUsers: async (req, res) => {},
// getUserById: async (req, res) => {},

module.exports = authController;