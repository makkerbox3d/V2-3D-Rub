/* =====================================
   MakkerBox 3D OS

   SISTEMA DE MÓDULOS V1

===================================== */



// =====================================
// TELA IMPRESSORAS
// =====================================


function montarImpressoras(){


let tela =
document.getElementById(
"impressoras"
);



if(!tela){

return;

}



tela.innerHTML = `


<h1>
🖨 Impressoras 3D
</h1>



<div class="form">


<input
id="marca"
placeholder="Marca"
>



<input
id="modelo"
placeholder="Modelo"
>



<select id="tipo">

<option>
FDM
</option>


<option>
SLA
</option>


<option>
MSLA
</option>


<option>
SLS
</option>


</select>



<input
id="valor"
type="number"
placeholder="Valor da impressora"
>



<input
id="potencia"
type="number"
placeholder="Potência Watts"
>



<input
id="kwh"
type="number"
placeholder="Valor kWh"
>



<input
id="horas"
type="number"
placeholder="Horas trabalhadas"
>



<button onclick="adicionarImpressora()">

Cadastrar Impressora

</button>



</div>



<div id="listaImpressoras">

</div>



`;



}







// =====================================
// TELA ESTOQUE
// =====================================


function montarEstoque(){



let tela =
document.getElementById(
"estoque"
);



if(!tela){

return;

}



tela.innerHTML = `


<h1>
📦 Almoxarifado Maker
</h1>



<div class="form">


<input
id="produtoNome"
placeholder="Nome do material"
>



<select id="categoria">


<option>
Resina
</option>


<option>
Filamento
</option>


<option>
Tinta
</option>


<option>
Consumível
</option>


<option>
Ferramenta
</option>


</select>



<input
id="quantidade"
type="number"
placeholder="Quantidade"
>



<select id="unidade">


<option>
ml
</option>


<option>
g
</option>


<option>
kg
</option>


<option>
unidade
</option>


</select>




<input
id="valorProduto"
type="number"
placeholder="Valor pago"
>



<input
id="estoqueMinimo"
type="number"
placeholder="Estoque mínimo"
>



<button onclick="adicionarEstoque()">

Cadastrar Material

</button>


</div>




<div id="listaEstoque">

</div>


`;



}







// =====================================
// TELA PROJETOS
// =====================================


function montarProjetos(){



let tela =
document.getElementById(
"projetos"
);



if(!tela){

return;

}




tela.innerHTML = `


<h1>
🧊 Projetos 3D
</h1>




<div class="form">


<input
id="projetoNome"
placeholder="Nome da peça"
>



<input
id="projetoCliente"
placeholder="Cliente"
>



<input
id="projetoArquivo"
placeholder="Arquivo Blender/STL"
>




<select id="projetoImpressora">


<option>

Selecione impressora

</option>


</select>




<select id="projetoMaterial">


<option>

Selecione material

</option>


</select>




<input
id="projetoPeso"
type="number"
placeholder="Peso (g)"
>




<input
id="projetoTempo"
type="number"
placeholder="Tempo impressão"
>




<input
id="projetoVenda"
type="number"
placeholder="Preço venda"
>




<select id="projetoStatus">


<option>
💡 Ideia
</option>


<option>
🖨 Impressão
</option>


<option>
🎨 Pintura
</option>


<option>
📦 Entregue
</option>


</select>




<button onclick="adicionarProjeto()">

Cadastrar Projeto

</button>


</div>




<div id="listaProjetos">

</div>


`;



}









// =====================================
// TELA PINTURA
// =====================================


function montarPintura(){



let tela =
document.getElementById(
"pintura"
);



if(!tela){

return;

}




tela.innerHTML = `


<h1>
🎨 Pintura e Acabamento
</h1>



<div class="form">


<input
id="pinturaNome"
placeholder="Nome da tinta/material"
>



<select id="pinturaTipo">


<option>
Acrílica
</option>


<option>
Primer
</option>


<option>
Verniz
</option>


<option>
Pigmento
</option>


</select>



<input
id="pinturaCor"
placeholder="Cor"
>



<input
id="pinturaQuantidade"
type="number"
placeholder="Quantidade ml"
>



<input
id="pinturaValor"
type="number"
placeholder="Valor pago"
>



<button onclick="adicionarPintura()">

Cadastrar Material

</button>



</div>




<div id="listaPintura">

</div>


`;



}









// =====================================
// INICIALIZAR MÓDULOS
// =====================================


window.addEventListener(

"load",

function(){



montarImpressoras();



montarEstoque();



montarProjetos();



montarPintura();



});
