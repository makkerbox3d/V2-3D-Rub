/* =====================================
   MakkerBox 3D OS

   SISTEMA DE MÓDULOS V1

===================================== */



function carregarModuloPintura(){


let tela = document.getElementById(
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
placeholder="Quantidade (ml)"
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



window.addEventListener(

"load",

function(){


carregarModuloPintura();


});
