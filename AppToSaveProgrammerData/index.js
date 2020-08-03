//Programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programador = {
    nome: "Gabriel",
    idade: 18,
    tecnologias: [
        {nome: 'C#', especialidade: 'jogos em desktop'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}
//Por exemplo, para pegar os dados do primeiro programador
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)