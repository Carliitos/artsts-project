//una vez instalado e incializado mongod se 
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/artst-crud';

mongoose.connect(URI)
    .then(db =>{
        console.log('DB is connected')
    })
    .catch(err=>console.error(err));

module.exports = mongoose;