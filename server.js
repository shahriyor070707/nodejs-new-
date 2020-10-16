const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const searchRouter = require('./routes/search.js')
const authRouter = require('./routes/auth')



app.get('/', (req,res) => {
    res.send('Hello Server')
})
app.use(bodyParser.json())
app.use('/search', searchRouter)
app.use('/auth', authRouter)





const PORT = 3000;
app.listen(PORT, () => {
    console.log(`${PORT} port ishlayapti`)
});