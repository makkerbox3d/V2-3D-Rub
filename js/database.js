/* =====================================
   MAKkerBOX 3D OS
   DATABASE V1

   Banco local da aplicação
===================================== */


let banco = {

    empresa: {

        nome: "MakkerBox 3D OS",

        logo: "",

        corPrincipal: "#2563eb",

        corSecundaria: "#00e5ff",

        tema: "dark"

    },


    impressoras: [],


    projetos: [],


    estoque: [],


    equipamentos: [],


    materiais: [],


    clientes: [],


    financeiro: {


        vendas: [],

        custos: []

    }


};





// ===============================
// SALVAR BANCO
// ===============================


function salvarBanco(){


    localStorage.setItem(

        "MakkerBoxDB",

        JSON.stringify(banco)

    );


}





// ===============================
// CARREGAR BANCO
// ===============================


function carregarBanco(){


    let dados =

    localStorage.getItem(
        "MakkerBoxDB"
    );



    if(dados){


        banco = JSON.parse(dados);


    }



}





// ===============================
// RESETAR BANCO
// ===============================


function resetarBanco(){


    localStorage.removeItem(
        "MakkerBoxDB"
    );


    location.reload();


}





// ===============================
// GERAR ID ÚNICO
// ===============================


function gerarID(){


    return Date.now();

}





// Inicializa

carregarBanco();
