//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
const tarefas = []
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const userTasks = prompt("Insira três tarefas que necessita realizar, separadas por vírgula e espaço: ").split(',')
let i = 0 

// // vez 1
// tarefas.push(userTasks[0])
// userTasks.splice(0,1)
// // vez 2
// tarefas.push(userTasks[0])
// userTasks.splice(0,1)
// // vez 3
// tarefas.push(userTasks[0])
// userTasks.splice(0,1)

while(i < userTasks.length){
    tarefas.push(userTasks[0])
    userTasks.splice(0,1)
};
   
// c) Imprima o array no console
console.log(tarefas)
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
indice = prompt("Digite o índice de uma das tarefas que você escolheu:") 
    
//e) Remova da lista o item de índice que o usuário escolheu.
tarefas.splice(indice-1,1)
    
//f) Imprima o array no console
console.log(tarefas)


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

function infosPessoa(nome,idade,ender,profis) {
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${ender} e sou ${profis}`
    return frase
};

nome = prompt("Nome:")
idade = prompt("Idade:")
ender = prompt("Endereço:")
profis = prompt("Profissão:")

console.log(infosPessoa(nome, idade, ender, profis))

// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somaValores(x,y) {
    const soma = x + y
    return soma
};
console.log(somaValores(1,2))

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function boolMaior(a,b) {
    return a >= b
};
console.log(boolMaior(10,6))

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numPar(n) {
    return n % 2 === 0
};
console.log(numPar(31))

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function escrevaString(mensagem) {
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
};

// mensagem = prompt("Digite uma mensagem:")
mensagem = "Estou testando"
escrevaString(mensagem)

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

function somaValores(v1,v2) {
    sum = v1 + v2
    return sum
};

function subtraiValores(v1,v2) {
    sub = v1 - v2
    return sub
};

function multiplicaValores(v1,v2) {
    multiplica = v1 * v2
    return multiplica
};

function divideValores(v1,v2) {
    divide = v1 / v2
    return divide
};

const [v1,v2] = prompt("Informe dois números separados por um espaço:").split(' ').map(x => parseInt(x))

console.log(somaValores(v1,v2))
console.log(subtraiValores(v1,v2))
console.log(multiplicaValores(v1,v2))
console.log(divideValores(v1,v2))