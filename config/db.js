const mongoose = require ('mongoose')
const url = 'mongodb://localhost:27017/dars';

const connecrDB = async () => {
    const  con = await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    console.log('MongoDo is connected')
}
module.exports = connecrDB;