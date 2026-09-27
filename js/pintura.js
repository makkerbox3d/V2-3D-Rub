/* =====================================
   MakkerBox 3D OS

   MÓDULO PINTURA V1

===================================== */



// =====================================
// CADASTRAR MATERIAL DE PINTURA
// =====================================


function adicionarPintura(){



let material = {



id:

gerarID(),




nome:

document.getElementById(
"pinturaNome"
).value,





tipo:

document.getElementById(
"pinturaTipo"
).value,





cor:

document.getElementById(
"pinturaCor"
).value,





quantidade:

Number(

document.getElementById(
"pinturaQuantidade"
).value

),





valor:

Number(

document.getElementById(
"pinturaValor"
).value

),





data:

new Date()
.toLocaleDateString()



};







material.custoUnitario =



(

material.valor /

material.quantidade

)

.toFixed(3);








banco.pintura.push(
material
);





salvarBanco();





mostrarPinturas();





limparPintura();






}







// =====================================
// LISTAR MATERIAIS
// =====================================


function mostrarPinturas(){



let lista =

document.getElementById(
"listaPintura"
);





if(!lista){

return;

}





lista.innerHTML="";






banco.pintura.forEach(function(p){





lista.innerHTML += `


<div class="impressora-card">


<h3>
🎨 ${p.nome}
</h3>



<p>
Tipo:
${p.tipo}
</p>



<p>
Cor:
${p.cor}
</p>



<p>
Quantidade:
${p.quantidade} ml
</p>



<p>
Custo por ml:

R$ ${p.custoUnitario}

</p>



<p>
Cadastro:
${p.data}
</p>



</div>



`;



});



}








// =====================================
// LIMPAR FORMULÁRIO
// =====================================


function limparPintura(){



let campos = [


"pinturaNome",

"pinturaCor",

"pinturaQuantidade",

"pinturaValor"


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



mostrarPinturas();



});
