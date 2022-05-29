const Percent = (data) => {
    return data/100
}

const Discount = (percent, price) => {
    return percent*price
}

const PriceAfterDiscount = (discount, price) => {
    return price - discount
}

module.exports = {
    Percent,
    Discount,
    PriceAfterDiscount
}