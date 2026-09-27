// Banco local do MakkerBox 3D OS

let banco = {

empresa:{
nome:"MakkerBox 3D OS",
logo:"",
cor:"#243BFF"
},

impressoras:[],

estoque:[],

projetos:[],

clientes:[]

};


function salvarBanco(){

localStorage.setItem(
"MakkerBoxDB",
JSON.stringify(banco)
);

}


function carregarBanco(){

let dados =
localStorage.getItem("MakkerBoxDB");


if(dados){

banco = JSON.parse(dados);

}

}


carregarBanco();
