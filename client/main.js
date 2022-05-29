var submit=document.getElementById('formSubmit')

submit.addEventListener('click', function(e){
    e.preventDefault()
    var discount=document.getElementById('discount').value
    var price=document.getElementById('price').value

    fetch('http://localhost:4000/api/discount', {
        method: 'POST',
        body: JSON.stringify({
            discount:discount,
            price:price
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(function(response){ 
        return response.json()
    }).then(function(data){
        document.getElementById("result").innerHTML = data.price.price
    }).catch(() => document.getElementById("result").innerHTML = '0'); 
})