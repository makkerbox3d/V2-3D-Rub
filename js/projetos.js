/* =====================================
   MakkerBox 3D OS

   PROJETOS 3D V2

===================================== */



// ===============================
// CADASTRAR PROJETO
// ===============================


function adicionarProjeto(){



let projeto = {


id:
gerarID(),



nome:

document.getElementById(
"projetoNome"
).value,



cliente:

document.getElementById(
"projetoCliente"
).value,



arquivo:

document.getElementById(
"projetoArquivo"
).value,



material:

document.getElementById(
"projetoMaterial"
).value,



peso:

Number(
document.getElementById(
"projetoPeso"
).value
),



tempo:

Number(
document.getElementById(
"projetoTempo"
).value
),



venda:

Number(
document.getElementById(
"projetoVenda"
).value
),



status:

document.getElementById(
"projetoStatus"
).value,



impressora:

document.getElementById(
"projetoImpressora"
)
.value



};





// CALCULO MATERIAL

let custoMaterial =

projeto.peso *
0.15;






// CALCULO MÁQUINA


let impressoraEncontrada =

banco.impressoras.find(

i =>

i.modelo === projeto.impressora

);




let custoMaquina = 0;



if(impressoraEncontrada){


custoMaquina =

Number(
impressoraEncontrada.custoHora
)

*

projeto.tempo;



}







projeto.custoMaterial =

custoMaterial.toFixed(2);



projeto.custoMaquina =

custoMaquina.toFixed(2);





projeto.custoTotal =

(

Number(projeto.custoMaterial)

+

Number(projeto.custoMaquina)

)

.toFixed(2);






projeto.lucro =

(

projeto.venda

-

projeto.custoTotal

)

.toFixed(2);







banco.projetos.push(
projeto
);



salvarBanco();



mostrarProjetos();



atualizarDashboard();



limparProjeto();



}








// ===============================
// MOSTRAR PROJETOS
// ===============================



function mostrarProjetos(){



let lista =

document.getElementById(
"listaProjetos"
);




if(!lista){

return;

}




lista.innerHTML="";






banco.projetos.forEach(function(p){



lista.innerHTML += `


<div class="impressora-card">


<h3>
🧊 ${p.nome}
</h3>


<p>
Cliente:
${p.cliente}
</p>


<p>
Impressora:
${p.impressora}
</p>



<p>
Status:
${p.status}
</p>



<p>
Custo:
R$ ${p.custoTotal}
</p>



<p>
Venda:
R$ ${p.venda}
</p>



<div class="valor">

Lucro:
R$ ${p.lucro}

</div>



</div>



`;



});



}








// ===============================
// LIMPAR FORMULÁRIO
// ===============================


function limparProjeto(){



let campos=[


"projetoNome",

"projetoCliente",

"projetoArquivo",

"projetoPeso",

"projetoTempo",

"projetoVenda"


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


mostrarProjetos();


});
