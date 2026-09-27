/* =====================================
   MakkerBox 3D OS

   IMPRESSORAS V3

===================================== */



// =====================================
// CADASTRAR IMPRESSORA
// =====================================


function adicionarImpressora(){



let impressora = {



id:

gerarID(),





marca:

document.getElementById(
"marca"
).value,





modelo:

document.getElementById(
"modelo"
).value,





tipo:

document.getElementById(
"tipo"
).value,





valor:

Number(

document.getElementById(
"valor"
).value

),





potencia:

Number(

document.getElementById(
"potencia"
).value

),





kwh:

Number(

document.getElementById(
"kwh"
).value

),





horas:

Number(

document.getElementById(
"horas"
).value

),





manutencoes:[],





dataCadastro:

new Date()
.toLocaleDateString()



};






impressora.custoHora =

calcularCustoHora(
impressora
);







banco.impressoras.push(
impressora
);






salvarBanco();






mostrarImpressoras();






atualizarDashboard();






atualizarListaImpressoras();






limparImpressora();





}








// =====================================
// CÁLCULO DE CUSTO
// =====================================


function calcularCustoHora(i){



let vidaUtil = 4000;



let depreciacao =

i.valor /
vidaUtil;





let energia =

(i.potencia / 1000)
*
i.kwh;





let manutencao =

0.10;






return (

depreciacao

+

energia

+

manutencao

)

.toFixed(2);



}









// =====================================
// MOSTRAR IMPRESSORAS
// =====================================


function mostrarImpressoras(){



let lista =

document.getElementById(
"listaImpressoras"
);




if(!lista){

return;

}





lista.innerHTML="";







banco.impressoras
.forEach(function(i){





lista.innerHTML += `


<div class="impressora-card">


<h3>

🖨 ${i.marca}

${i.modelo}

</h3>



<p>

Tipo:
${i.tipo}

</p>




<p>

Horas:
${i.horas}h

</p>




<p>

Custo operacional:

</p>



<div class="valor">

R$ ${i.custoHora}/h

</div>



<p>

Manutenções:
${i.manutencoes.length}

</p>



</div>


`;



});



}









// =====================================
// MANUTENÇÃO
// =====================================


function adicionarManutencao(
id,
descricao
){



let impressora =

banco.impressoras.find(

i =>

i.id === id

);





if(!impressora){

return;

}






impressora.manutencoes.push({


data:

new Date()
.toLocaleDateString(),


descricao


});





salvarBanco();



mostrarImpressoras();



}









// =====================================
// LIMPAR FORM
// =====================================


function limparImpressora(){



let campos=[


"marca",

"modelo",

"valor",

"potencia",

"kwh",

"horas"



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


mostrarImpressoras();


});
