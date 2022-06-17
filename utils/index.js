const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const utils = {
    encrypt: async (data) => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(data, salt);
    },
    compare: async (data, encrypted) => {
        return await bcrypt.compare(data, encrypted);
    },
    tokenValidator: (req, res, next) => {

       const token = req.headers['auth'];
       
       if (!token) {

        res.status(401).json({
            message: 'Access denied',
        });

        return;
       }

       try {
           const verified = jwt.verify(token, 'SECRET');
       } catch (error) {
           res.status(401).json({
               msg: 'Invalid token',
           });
       }
       next();
    },
    generateToken: async (data = {}) => {
        return await jwt.sign({ data }, "SECRET", { expiresIn: 60 });
      },
};



// bcrypt.genSalt(10)
// bcrypt.hash('password', salt)
// bcrypt.compare('password', hash)

// token = req.headers['auth'];
// jwt.verify(token, 'SECRET')
// jwt.sign({}, 'SECRET', {})

module.exports = utils;

