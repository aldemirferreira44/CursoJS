var idade = 71
console.log(`Voce tem ${idade} anos`)
if (idade >= 18 && idade < 70) {
    console.log('Voto obirgatorio')
} else if (idade < 18 && idade >= 16) {
    console.log('Voto Opcional')
} else if (idade >= 70) { console.log('Voto Opcional') }
else { console.log('Nao Vota') }