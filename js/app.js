
/* =====================================
   MAKkerBOX 3D OS
   APP CONTROLLER V1
===================================== */



// ===============================
// TROCA DE TELAS
// ===============================


function mostrarTela(tela){


    let telas = document.querySelectorAll(".tela");


    telas.forEach(function(item){


        item.classList.add("escondida");


    });



    let selecionada = 
    document.getElementById(tela);



    if(selecionada){


        selecionada.classList.remove(
            "escondida"
        );


    }



}





// ===============================
// CARREGAR EMPRESA
// ===============================


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





    if(banco.empresa.corPrincipal){


        document.documentElement
        .style
        .setProperty(
            "--primary",
            banco.empresa.corPrincipal
        );


    }




    if(banco.empresa.corSecundaria){


        document.documentElement
        .style
        .setProperty(
            "--secondary",
            banco.empresa.corSecundaria
        );


    }





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






// ===============================
// SALVAR EMPRESA
// ===============================


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







// ===============================
// ATUALIZAR DASHBOARD
// ===============================


function atualizarDashboard(){



    let impressoras =

    document.getElementById(
        "totalImpressoras"
    );



    if(impressoras){


        impressoras.innerHTML =

        banco.impressoras.length;


    }



}






// ===============================
// INICIALIZAÇÃO
// ===============================



window.onload=function(){



    carregarBanco();



    carregarEmpresa();



    atualizarDashboard();



};
