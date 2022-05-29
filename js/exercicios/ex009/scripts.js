let contador = 0 
let res = document.querySelector('section#result')
//As variáveis serão declaradas aqui fora são consideradas como GLOBAIS e funcionam dentro do
function contar(){
    contador++ // É a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques</p>`

}


function zerar(){
    contador = 0
    res.innerHTML = null
}