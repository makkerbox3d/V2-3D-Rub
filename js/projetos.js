/* =====================================
   MakkerBox 3D OS

   MÓDULO PROJETOS 3D V1

===================================== */



function adicionarProjeto(){


let projeto = {


id: gerarID(),


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



precoVenda:

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





projeto.custoMaterial =

(
projeto.peso *
0.15
).toFixed(2);




projeto.custoImpressao =

(
projeto.tempo *
1.50
).toFixed(2);





projeto.custoTotal =

(
Number(projeto.custoMaterial)
+
Number(projeto.custoImpressao)
).toFixed(2);





projeto.lucro =

(
projeto.precoVenda
-
projeto.custoTotal

).toFixed(2);






banco.projetos.push(
projeto
);



salvarBanco();



mostrarProjetos();



limparProjeto();


}





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
Status:
${p.status}
</p>


<p>
Custo:
R$ ${p.custoTotal}
</p>


<p>
Venda:
R$ ${p.precoVenda}
</p>


<p>
Lucro:
R$ ${p.lucro}
</p>


</div>


`;



});



}





function limparProjeto(){


let campos=[

"projetoNome",

"projetoCliente",

"projetoArquivo",

"projetoMaterial",

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
