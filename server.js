const Calc = require('./calculation')
const express = require('express')
const cors = require('cors')

let app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000;

app.post('/api/discount', (req,res)=> {
    const discountPercent = Calc.Percent(req.body.discount)
    const totalDiscount = Calc.Discount(discountPercent,req.body.price)
    const price = Calc.PriceAfterDiscount(totalDiscount,req.body.price)
    return res.send({
        code: 200,
        status: 'SUCCESS',
        price: {
            price,
        },
    })
})

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

module.exports = app;