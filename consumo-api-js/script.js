$(document).ready(function(){
    console.log('JQuery load!');

    // Esconde as informações abaixo do cep, ele só encontra se existir o cep
    $('#retornoCEP').hide();

    // Criar um evento 
    $('#cep').on('blur', function(){
        var inputCep = $('#cep'); 
        console.log(inputCep.val());

        buscaCEP(inputCep.val()).then(
            (response) => {
                console.log(response);
                if(response && response.cep !== '') {
                    // Mostra os campos abaixo do cep e preenche eles conforme a API
                    $('#retornoCEP').show();
                    $('#rua').val(response.logradouro);
                    $('#bairro').val(response.bairro);
                    $('#cidade').val(response.localidade);
                    $('#uf').val(response.uf);
                    
                }
            }
        );
    });
});

// https://viacep.com.br/ 
async function buscaCEP(cep) {
    var urlAPI =`https://viacep.com.br/ws/${cep}/json/`;


    return fetch(urlAPI).then(resp => resp.json());
}

