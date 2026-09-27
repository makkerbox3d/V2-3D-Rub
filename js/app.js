/* =====================================
   MakkerBox 3D OS

   APP CONTROLLER V2

===================================== */



// =====================================
// NAVEGAÇÃO ENTRE TELAS
// =====================================


function mostrarTela(tela){


    let telas = document.querySelectorAll(".tela");



    telas.forEach(function(item){


        item.classList.add(
            "escondida"
        );


    });




    let abrir =
    document.getElementById(tela);



    if(abrir){


        abrir.classList.remove(
            "escondida"
        );


    }



}





// =====================================
// CARREGAR EMPRESA
// =====================================


function carregarEmpresa(){



    if(!banco.empresa){

        return;

    }




    let nome =
    document.getElementById(
        "nomeEmpresa"
    );



    if(nome){


        nome.innerHTML =
        banco.empresa.nome;


    }





    // COR PRINCIPAL


    if(banco.empresa.corPrincipal){


        document.documentElement
        .style
        .setProperty(

            "--primary",

            banco.empresa.corPrincipal

        );


    }



    // LOGO


    if(banco.empresa.logo){



        let logo =
        document.getElementById(
            "logoEmpresa"
        );



        if(logo){


            logo.src =
            banco.empresa.logo;



            logo.style.display =
            "block";


        }


    }




}






// =====================================
// SALVAR CONFIGURAÇÃO EMPRESA
// =====================================


function salvarEmpresa(){



    let nome =

    document.getElementById(
        "novoNome"
    ).value;



    let cor =

    document.getElementById(
        "novaCor"
    ).value;





    if(nome){


        banco.empresa.nome =
        nome;


    }




    if(cor){


        banco.empresa.corPrincipal =
        cor;


    }





    salvarBanco();



    carregarEmpresa();



    alert(
        "Configuração salva!"
    );



}








// =====================================
// ATUALIZAR DASHBOARD
// =====================================


function atualizarDashboard(){



    // IMPRESSORAS


    let totalImp =

    document.getElementById(
        "totalImpressoras"
    );



    if(totalImp){


        totalImp.innerHTML =

        banco.impressoras.length;


    }





    // ESTOQUE



    let totalEstoque =

    document.getElementById(
        "totalEstoque"
    );



    if(totalEstoque){


        totalEstoque.innerHTML =

        banco.estoque.length;


    }



}







// =====================================
// INICIALIZAÇÃO
// =====================================


window.addEventListener(

"load",

function(){



    carregarBanco();



    carregarEmpresa();



    atualizarDashboard();




    mostrarTela(
        "dashboard"
    );



});
