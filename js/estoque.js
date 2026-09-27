/* =====================================
   MakkerBox 3D OS

   ESTOQUE V3

===================================== */



// =====================================
// CADASTRAR MATERIAL
// =====================================


function adicionarEstoque(){



let produto = {



id:

gerarID(),





nome:

document.getElementById(
"produtoNome"
).value,





categoria:

document.getElementById(
"categoria"
).value,





quantidade:

Number(

document.getElementById(
"quantidade"
).value

),





unidade:

document.getElementById(
"unidade"
).value,





valor:

Number(

document.getElementById(
"valorProduto"
).value

),





minimo:

Number(

document.getElementById(
"estoqueMinimo"
).value

),





consumo:[],





dataCadastro:

new Date()
.toLocaleDateString()



};






// CUSTO UNITÁRIO


produto.custoUnitario =



(

produto.valor /

produto.quantidade

)

.toFixed(4);







banco.estoque.push(
produto
);







salvarBanco();






mostrarEstoque();






atualizarDashboard();






atualizarListaMateriais();






limparEstoque();





}









// =====================================
// MOSTRAR ESTOQUE
// =====================================


function mostrarEstoque(){



let lista =

document.getElementById(
"listaEstoque"
);





if(!lista){

return;

}





lista.innerHTML="";







banco.estoque
.forEach(function(p){



let alerta = "";




if(
p.quantidade <= p.minimo
){


alerta =
"⚠ Estoque baixo";


}






lista.innerHTML += `



<div class="impressora-card">


<h3>

📦 ${p.nome}

</h3>




<p>

Categoria:

${p.categoria}

</p>




<p>

Quantidade:

${p.quantidade}

${p.unidade}

</p>




<p>

Custo unidade:

R$ ${p.custoUnitario}

</p>




<strong>

${alerta}

</strong>



</div>



`;



});



}









// =====================================
// CONSUMIR MATERIAL
// =====================================


function consumirMaterial(
nome,
quantidade,
projeto
){



let material =

banco.estoque.find(

m =>

m.nome === nome

);





if(!material){

return false;

}





material.quantidade -=

quantidade;







material.consumo.push({



data:

new Date()
.toLocaleDateString(),




quantidade,




projeto



});






salvarBanco();





mostrarEstoque();





return true;



}









// =====================================
// LIMPAR FORMULÁRIO
// =====================================


function limparEstoque(){



let campos=[


"produtoNome",

"quantidade",

"valorProduto",

"estoqueMinimo"


];





campos.forEach(function(id){



let campo =

document.getElementById(id);




if(campo){


campo.value="";


}



});



}









window.addEventListener(

"load",

function(){



mostrarEstoque();



});
