//1. Crie a variável apartamento e atribua a ela um objeto literal com as
//seguintes propriedades:
//▪quartos = 2
//▪ tipo = “apartamento”
//▪ endereco = “Avenida Principal, 456 - Centro”
//▪andar: 7
//Em seguida, exiba no console a seguinte frase, utilizando todas as
//propriedades da variável casa: "Apartamento com 2 quartos, localizado no 7º
//andar da Av. Principal, 456 - Centro.".

//2. Imagine que você está desenvolvendo um sistema para gerenciar produtos em
//um armazém. Crie uma variável chamada produtoEmbalado que execute as
//seguintes operações:
//Atribua um objeto literal à variável com as seguintes propriedades:
//▪ nome: "Laptop HP"
//▪ categoria: "Eletrônicos"
//▪ peso: 1.5
//▪ preco: 3500.00
//Exiba no console uma frase que utilize todas as propriedades do objeto, como o
//exemplo abaixo: "O produto Laptop HP, da categoria Eletrônicos, pesando 1.5 kg, está
//à venda por R$ 3500.00.“

//3. Crie uma classe chamada Imovel com os seguintes atributos:
//▪ quartos:
//▪ tipo:
//▪ endereco:
//Crie um método na classe chamado exibirInformacoes que
//retorna uma string com as informações do imóvel.
//Em seguida, instancie dois objetos da classe Imovel
//representando uma casa e um apartamento com as seguintes
//características:
//Casa:
//▪ Quartos: 4
//▪ Tipo: "Casa"
//▪ Endereço: "Rua da Amizade, 789 - Bairro Alegre"
//Apartamento:
//▪ Quartos: 2
//▪ Tipo: "Apartamento"
//▪ Endereço: "Avenida da Paz, 123 - Centro"
//Chame o método exibirInformacoes para cada instância e exiba o
//resultado no console.

//4. Crie uma classe chamada Veiculo com os seguintes atributos:
//▪ marca
//▪ modelo
//▪ ano
//Crie um método na classe chamado exibirDetalhes que retorna
//uma string com as informações do veículo.
//Em seguida, instancie dois objetos da classe Veiculo
//representando um carro e uma motocicleta com as seguintes
//características:
//Carro:
//▪ Marca: "Toyota"
//▪ Modelo: "Corolla"
//▪ Ano: 2022
//Motocicleta:
//▪ Marca: "Honda"
//▪ Modelo: "CBR 600RR"
//▪ Ano: 2021
//Chame o método exibirDetalhes para cada instância e exiba o
//resultado no console.

var apartamento = {
    quartos: 3,
    tipo: "apartamento",
    endereço: "Avenida Principal, 456 - Centro",
    andar: 7,
};
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereço}`)

let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preço: 3500.00,
};
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria},pesando ${produtoEmbalado.peso}kg, está à venda por R${produtoEmbalado.preço}.` )


class Imovel{
    quartos;
    tipo;
    endereço;

    exibirInformacoes(){
        return (`Quartos: ${Imovel.quarto}. \n tipo: ${Imovel.tipo}. \nendereço: ${Imovel.endereço}.`)
    };
};

let casa = new Imovel()
casa.quartos = 2;
casa.tipo = 'casa';
casa.endereço = 'Rua da Amizade, 789 - Bairro Alegre';

let apartamento = new Imovel()
apartamento.quarto = 4;
apartamento.tipo = 'apartamento';
apartamento.endereço= 'Avenida da Paz, 123 - Centro';

exibirInformacoes()