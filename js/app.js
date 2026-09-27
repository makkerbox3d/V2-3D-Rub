/* =====================================
   MakkerBox 3D OS

   APP CONTROLLER V5

===================================== */



// =====================================
// NAVEGAÇÃO
// =====================================


function mostrarTela(tela){


    let telas =
    document.querySelectorAll(".tela");



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
// EMPRESA
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



}









// =====================================
// CARREGAR IMPRESSORAS NO PROJETO
// =====================================


function atualizarListaImpressoras(){



let select =

document.getElementById(
"projetoImpressora"
);




if(!select){

return;

}





select.innerHTML = `

<option>

Selecione impressora

</option>

`;






banco.impressoras
.forEach(function(i){



select.innerHTML += `


<option value="${i.modelo}">

${i.marca}
${i.modelo}

</option>


`;



});



}









// =====================================
// CARREGAR MATERIAIS
// =====================================


function atualizarListaMateriais(){



let select =

document.getElementById(
"projetoMaterial"
);




if(!select){

return;

}





select.innerHTML = `

<option>

Selecione material

</option>

`;






banco.estoque
.forEach(function(m){



select.innerHTML += `


<option value="${m.nome}">

${m.nome}

</option>


`;



});



}









// =====================================
// DASHBOARD
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






let estoque =

document.getElementById(
"totalEstoque"
);



if(estoque){


estoque.innerHTML =

banco.estoque.length;


}







let projetos =

document.getElementById(
"totalProjetos"
);



if(projetos){


projetos.innerHTML =

banco.projetos.length;


}






let valor = 0;



banco.projetos
.forEach(function(p){



valor +=

Number(
p.venda || 0
);



});






let producao =

document.getElementById(
"valorProducao"
);



if(producao){


producao.innerHTML =


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



mostrarTela(
"dashboard"
);



atualizarDashboard();



atualizarListaImpressoras();



atualizarListaMateriais();



});
