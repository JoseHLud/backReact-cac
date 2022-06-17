const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codoacodo', {}).then(() => {
    console.log('Conected to MongoDB')
})


// mongoose.connect(ip/nombreBaseDeDatos, {
//   opciones}).then(() = > {lo que se tiene q ejecutar cuando se conecte}),

