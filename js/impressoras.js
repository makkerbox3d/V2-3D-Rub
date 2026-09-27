function adicionarImpressora(){


let impressora={


id:Date.now(),


marca:
document.getElementById("marca").value,


modelo:
document.getElementById("modelo").value,


tipo:
document.getElementById("tipo").value,


valor:
Number(document.getElementById("valor").value),


horas:
Number(document.getElementById("horas").value),


potencia:
Number(document.getElementById("potencia").value),



kwh:
Number(document.getElementById("kwh").value)



};


impressora.custoHora =
calcularCustoHora(impressora);



banco.impressoras.push(impressora);


salvarBanco();


mostrarImpressoras();


}



function calcularCustoHora(i){


let depreciacao =
i.valor / 4000;



let energia =
(i.potencia/1000) *
i.kwh;



return (
depreciacao +
energia
).toFixed(2);


}



function mostrarImpressoras(){


let lista =
document.getElementById(
"listaImpressoras"
);



lista.innerHTML="";



banco.impressoras.forEach(i=>{


lista.innerHTML += `


<div class="card">


<h3>
🖨 ${i.marca} ${i.modelo}
</h3>


<p>
Tipo:
${i.tipo}
</p>


<p>
Custo hora:
R$ ${i.custoHora}
</p>


<p>
Uso:
${i.horas} horas
</p>



</div>


`;


});


}
