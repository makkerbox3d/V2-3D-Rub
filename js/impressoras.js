/* =====================================
   MAKkerBOX 3D OS

   MÓDULO IMPRESSORAS 3D V1
===================================== */



// ===============================
// ADICIONAR IMPRESSORA
// ===============================


function adicionarImpressora(){



    let impressora = {


        id: gerarID(),


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




    limparFormulario();



}







// ===============================
// CÁLCULO DE CUSTO
// ===============================


function calcularCustoHora(i){



    /*
    
    Considerando:

    Vida útil:
    4000 horas

    Depreciação:
    valor dividido pela vida útil

    Energia:
    potência convertida para KW

    */


    let depreciacao =

    i.valor / 4000;




    let energia =

    (i.potencia / 1000)
    *
    i.kwh;





    let total =

    depreciacao +
    energia;





    return total.toFixed(2);



}







// ===============================
// MOSTRAR IMPRESSORAS
// ===============================


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
        Potência:
        ${i.potencia}W
        </p>



        <p>
        Horas:
        ${i.horas}h
        </p>



        <p>
        Custo por hora:
        </p>


        <div class="valor">

        R$ ${i.custoHora}

        </div>



        </div>



        `;



    });



}






// ===============================
// LIMPAR FORMULÁRIO
// ===============================


function limparFormulario(){



let campos = [

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





// ===============================
// CARREGAR AO ABRIR
// ===============================


window.addEventListener(
"load",
function(){


mostrarImpressoras();


});
