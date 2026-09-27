/* =====================================
   MakkerBox 3D OS

   DATABASE V2

===================================== */


let banco = {


empresa:{


nome:"MakkerBox 3D OS",


logo:"",


corPrincipal:"#2563eb",


corSecundaria:"#00e5ff",


tema:"dark"


},





impressoras:[],


estoque:[],


projetos:[],


pintura:[],


equipamentos:[],


clientes:[],


orcamentos:[],



financeiro:{


vendas:[],


custos:[]


}



};







function salvarBanco(){



localStorage.setItem(

"MakkerBoxDB",

JSON.stringify(banco)

);


}







function carregarBanco(){



let dados =

localStorage.getItem(
"MakkerBoxDB"
);




if(dados){



banco =
JSON.parse(dados);



}



}







function gerarID(){


return Date.now();


}






function resetarBanco(){


localStorage.removeItem(
"MakkerBoxDB"
);


location.reload();


}






carregarBanco();
