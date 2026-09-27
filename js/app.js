/* =====================================
   MakkerBox 3D OS

   APP CONTROLLER V4

===================================== */



// =====================================
// NAVEGAÇÃO
// =====================================


function mostrarTela(tela){


    let telas =
    document.querySelectorAll(".tela");



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






    if(banco.empresa.corPrincipal){



        document.documentElement
        .style
        .setProperty(

        "--primary",

        banco.empresa.corPrincipal

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


        }


    }



}







// =====================================
// CONFIGURAÇÃO EMPRESA
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



}









// =====================================
// CARREGAR IMPRESSORAS NO PROJETO
// =====================================


function carregarImpressorasProjeto(){



    let select =

    document.getElementById(
        "projetoImpressora"
    );



    if(!select){

        return;

    }




    select.innerHTML = `

<option value="">
Selecione a impressora
</option>

`;






    banco.impressoras.forEach(function(i){



        select.innerHTML += `

<option value="${i.modelo}">

${i.marca}
${i.modelo}

</option>

`;



    });



}









// =====================================
// CARREGAR MATERIAIS NO PROJETO
// =====================================


function carregarMateriaisProjeto(){



    let select =

    document.getElementById(
        "projetoMaterial"
    );



    if(!select){

        return;

    }





    select.innerHTML = `

<option value="">
Selecione material
</option>

`;





    banco.estoque.forEach(function(p){



        select.innerHTML += `

<option value="${p.nome}">

${p.nome}

</option>

`;



    });



}









// =====================================
// ATUALIZAR DASHBOARD
// =====================================


function atualizarDashboard(){



let imp =

document.getElementById(
"totalImpressoras"
);



if(imp){


imp.innerHTML =
banco.impressoras.length;


}






let est =

document.getElementById(
"totalEstoque"
);



if(est){


est.innerHTML =
banco.estoque.length;


}







let proj =

document.getElementById(
"totalProjetos"
);



if(proj){


proj.innerHTML =
banco.projetos.length;


}







let valor = 0;



banco.projetos.forEach(function(p){


valor +=
Number(p.venda || 0);


});





let valorTela =

document.getElementById(
"valorProducao"
);



if(valorTela){


valorTela.innerHTML =

"R$ " +
valor.toFixed(2);



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



carregarImpressorasProjeto();



carregarMateriaisProjeto();



atualizarDashboard();



mostrarTela(
"dashboard"
);



}

);
