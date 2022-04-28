/* 
    ============= ANOTAÇÕES =============
    PILHA -> EMPILHAR VALORES
    last in, first out
    - Regra para inserir e retirar valores:
        - Adiciona na última posição
            - pilha.push(elemento)
        - Retira na última posição
            - pilha.pop()
    - Métodos para pilhas:
        -
*/
/* Variáveis */
var elementos = [];
var topo = -1;      // Controlar o topo da pilha
const MAX = 10;     // num máximo de elementos na pilha

/* Funcções */
function push(num){
    if(topo < MAX){
        topo++
        elementos[topo] = num
    }else{
        console.log('Pilha está cheia')
    }
}

function pop(){
    if(topo != -1){
        elementos.splice(elementos.indexOf(elementos[topo]), 1);
        topo--
    }else{
        console.log('Pilha está vazia')
    }
}

function estaVazia(){
    if(topo == -1){
        return 'Pilha está vazia'
    }else{
        return 'Pilha não está vazia'
    }
}

/* Testes */
push(2)
push(3)
console.log(elementos)      // [2, 3]
pop()
console.log(elementos)      // [2]
push(5)
push(10)
console.log(elementos)      // [2, 5, 10]
pop()
console.log(elementos)      // [2, 5]
console.log(estaVazia())    // Pilha não está vazia
