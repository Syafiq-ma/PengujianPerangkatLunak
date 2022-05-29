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
    if(req.body.discount&&req.body.price&&req.body.discount!=0&&req.body.price!=0){
        return res.send({
            code: 200,
            status: 'SUCCESS',
            price: {
                price,
            },
        })
    }
    else{
        return res.send({
            code: 404,
            status: 'FAILED',
            message: 'price and discount should have a value'
        })
    }
})

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

module.exports = app;