/* =====================================
   MAKkerBOX 3D OS

   MÓDULO ESTOQUE V1
===================================== */



// ===============================
// CADASTRAR PRODUTO
// ===============================


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
)



};





produto.custoUnitario =

(
produto.valor /
produto.quantidade
).toFixed(3);






banco.estoque.push(
produto
);



salvarBanco();



mostrarEstoque();



limparEstoque();

}





// ===============================
// LISTAR ESTOQUE
// ===============================


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



let alerta="";



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
Valor:
R$ ${p.valor}
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







// ===============================
// LIMPAR CAMPOS
// ===============================


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


}

);
