const currency = {
    USD: 1,
    EUR: 0.90,
    GBP:0.75,
    INR:83.71,
    PKR:277
}

document.getElementById("converter").addEventListener('submit', function(e){
    e.preventDefault();

    let fromCurrency = document.getElementById('from').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value

    let fromAmount = currency[fromCurrency]
    let toAmount = currency[toCurrency]
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`

})