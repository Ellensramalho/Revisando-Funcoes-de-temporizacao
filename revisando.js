//Exemplo de setTimeout
function espera(texto){
    console.log(texto)
}
setTimeout(espera, 1000, 'Passou 1 segundo')

//Exemplo de setTimeout
setTimeout(function(){
    console.log('Passaram 2 segundos')
}, 2000)

//Exemplo de setTimeout
for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300);
}

//Exemplo setInterval e clearInterval
let i = 0;

const intervalo = setInterval(() => {
  console.log(i++);
  
  if (i === 5) {
    clearInterval(intervalo);
    console.log('Loop parado');
  }
}, 1000);
