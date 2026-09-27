/* =====================================
   MakkerBox 3D OS

   PROJETOS 3D V3

===================================== */



// =====================================
// ADICIONAR PROJETO
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
).value



};






// ===============================
// BUSCAR MATERIAL
// ===============================


let materialEncontrado =

banco.estoque.find(

p =>

p.nome === projeto.material

);





let custoMaterial = 0;





if(materialEncontrado){


custoMaterial =

projeto.peso *

Number(
materialEncontrado.custoUnitario
);


}







// ===============================
// BUSCAR IMPRESSORA
// ===============================


let impressoraEncontrada =


banco.impressoras.find(


i =>

i.modelo === projeto.impressora


);






let custoImpressao = 0;





if(impressoraEncontrada){



custoImpressao =


Number(
impressoraEncontrada.custoHora
)

*

projeto.tempo;



}







// ===============================
// CUSTOS FINAIS
// ===============================


projeto.custoMaterial =

custoMaterial.toFixed(2);



projeto.custoImpressao =

custoImpressao.toFixed(2);





projeto.custoTotal =


(

custoMaterial

+

custoImpressao

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
🖨 ${p.impressora}
</p>



<p>
📦 ${p.material}
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








// =====================================
// LIMPAR FORMULÁRIO
// =====================================


function limparProjeto(){



let campos = [


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
