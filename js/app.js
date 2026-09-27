/* =====================================
   MakkerBox 3D OS

   APP CONTROLLER V3

===================================== */



// =====================================
// ABRIR TELAS
// =====================================


function mostrarTela(tela){



    let telas = document.querySelectorAll(
        ".tela"
    );



    telas.forEach(function(secao){


        secao.classList.add(
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





    if(
    banco.empresa.corPrincipal
    ){



        document.documentElement
        .style
        .setProperty(

            "--primary",

            banco.empresa.corPrincipal

        );


    }






    if(
    banco.empresa.logo
    ){



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
// SALVAR EMPRESA
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



    // Impressoras


    let impressoras =

    document.getElementById(
        "totalImpressoras"
    );



    if(impressoras){


        impressoras.innerHTML =

        banco.impressoras.length;


    }






    // Estoque


    let estoque =

    document.getElementById(
        "totalEstoque"
    );



    if(estoque){


        estoque.innerHTML =

        banco.estoque.length;


    }






    // Projetos


    let projetos =

    document.getElementById(
        "totalProjetos"
    );



    if(projetos){


        projetos.innerHTML =

        banco.projetos.length;


    }



}








// =====================================
// INICIAR SISTEMA
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
