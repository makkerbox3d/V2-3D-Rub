/* =====================================
   MakkerBox 3D OS

   PROJETOS V4

===================================== */



// =====================================
// CADASTRAR PROJETO
// =====================================


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





impressora:

document.getElementById(
"projetoImpressora"
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





finalizado:false



};









// ===============================
// BUSCAR MATERIAL
// ===============================


let material =

banco.estoque.find(

m =>

m.nome === projeto.material

);






let custoMaterial = 0;





if(material){



custoMaterial =


projeto.peso *

Number(
material.custoUnitario
);



}








// ===============================
// BUSCAR IMPRESSORA
// ===============================


let maquina =

banco.impressoras.find(

i =>

i.modelo === projeto.impressora

);






let custoMaquina = 0;






if(maquina){



custoMaquina =


Number(
maquina.custoHora
)

*

projeto.tempo;



}









// ===============================
// CUSTO FINAL
// ===============================



projeto.custoMaterial =

custoMaterial.toFixed(2);





projeto.custoImpressao =

custoMaquina.toFixed(2);






projeto.custoTotal =


(

custoMaterial

+

custoMaquina

)

.toFixed(2);






projeto.lucro =



(

projeto.venda

-

projeto.custoTotal

)

.toFixed(2);







projeto.data =

new Date()
.toLocaleDateString();









banco.projetos.push(
projeto
);





salvarBanco();






mostrarProjetos();






atualizarDashboard();






limparProjeto();



}









// =====================================
// FINALIZAR PRODUÇÃO
// =====================================


function finalizarProjeto(id){



let projeto =

banco.projetos.find(

p =>

p.id === id

);





if(!projeto){

return;

}





if(projeto.finalizado){

return;

}





// baixa material


consumirMaterial(

projeto.material,

projeto.peso,

projeto.nome

);





projeto.finalizado = true;


projeto.status =
"📦 Entregue";






salvarBanco();






mostrarProjetos();



}









// =====================================
// LISTAR PROJETOS
// =====================================


function mostrarProjetos(){



let lista =

document.getElementById(
"listaProjetos"
);





if(!lista){

return;

}





lista.innerHTML="";







banco.projetos
.forEach(function(p){





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

🖨

${p.impressora}

</p>




<p>

📦

${p.material}

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





<button onclick="finalizarProjeto(${p.id})">

Finalizar produção

</button>




</div>



`;



});



}









// =====================================
// LIMPAR FORM
// =====================================


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
