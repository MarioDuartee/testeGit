var nome = prompt('Digite seu nome: ')

var notaDoPrimeiroBimestre = prompt('Digite a nota do primeiro bimestre: ')
notaDoPrimeiroBimestre = parseFloat(notaDoPrimeiroBimestre)

var notaDoSegundoBimestre =
prompt('Digite a nota do segundo bimestre: ')
notaDoSegundoBimestre = parseFloat(notaDoSegundoBimestre)

var notaDoTerceiroBimestre = prompt('Digite a nota do terceiro bimestre: ')
notaDoTerceiroBimestre = parseFloat(notaDoTerceiroBimestre)

var notaDoQuartoBimestre = prompt('Digite a nota do quarto bimestre: ')
notaDoQuartoBimestre = parseFloat(notaDoQuartoBimestre)

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)
//var notaFixada = notaFinal.toFixed(1)

alert("Bem vindo " + nome)
console.log(notaFixada)


if(notaFixada >= 6){
  alert('Parabens ' + nome + ', sua média é: ' + notaFixada + ', você foi APROVADO!!!')
} else{
  alert(nome +', sua média é: ' + notaFixada + ', você foi REPROVADO!')
}
// isso é um comentário 

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação


var moeda1 = prompt('Agora vamos converter moedas, digite qual moeda você quer converter: real, dola, euro ou libra?')

if(moeda1 == "real"){
var moeda2 = prompt('Agora digite qual o outra moeda? dolar, euro ou libra?')
} else 
if (moeda1 == "dolar") {
  var moeda2 = prompt('Agora digite qual o outra moeda? real, euro ou libra?')
} else 
if (moeda1 == "euro"){
  var moeda2 = prompt('Agora digite qual o outra moeda? real, dolar ou libra?')
} else {
  var moeda2 = prompt('Agora digite qual o outra moeda? real, dolar ou euro?')
}

var valor1 = prompt('Agora digite o valor em ' + moeda1)

//CASO MOEDA SEJA REAL
 switch(moeda1 == "real"){
   case (moeda2 == "dolar"):
   var conversao = (valor1 * 0.1905161)
   break
   case (moeda2 == "euro"):
   var conversao = (valor1 * 0.1925)
   break
   case (moeda2 == "libra"):
   var conversao = (valor1 * 0.1654819221)
   break
   defalt
   alert('Nao foi possivel fazer a conversao')
 }


//CASO MOEDA SEJA DOLAR
 switch(moeda1 == "dolar"){
   case (moeda2 == "real"):
   var conversao = (valor1 * 5.2487)
   break
   case (moeda2 == "euro"):
   var conversao = (valor1 * 1.010185)
   break
   case (moeda2 == "libra"):
   var conversao = (valor1 * 0.868565)
   break
   defalt
   alert('Nao foi possivel fazer a conversao')
 }

//CASO MOEDA SEJA EURO
 switch(moeda1 == "euro"){
   case (moeda2 == "real"):
   var conversao = (valor1 * 5.195504425)
   break
   case (moeda2 == "dolar"):
   var conversao = (valor1 * 0.989865)
   break
   case (moeda2 == "libra"):
   var conversao = (valor1 * 0.8599155228)
   break
   defalt
   alert('Nao foi possivel fazer a conversao')
 }

//CASO MOEDA SEJA LIBRA
 switch(moeda1 == "libra"){
   case (moeda2 == "real"):
   var conversao = (valor1 * 6.041563373)
   break
   case (moeda2 == "dolar"):
   var conversao = (valor1 * 0.869175)
   break
   case (moeda2 == "euro"):
   var conversao = (valor1 * 1.162729973)
   break
   defalt
   alert('Nao foi possivel fazer a conversao')
 }




  alert('O valor de $' + valor1 + ' em ' + moeda1 + ' para ' + moeda2 + ' é: $' + conversao) 
   