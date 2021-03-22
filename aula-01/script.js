var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmRealFixado =
parseFloat(valorEmDolarTexto) * 5.50

var valorEmRealFixado = valorEmRealFixado.toFixed(2)

alert(valorEmRealFixado)