//Criando um modulo
//[] inserir as dependencias do modulo
var appSaudacao = angular.module('appSaudacao',[]);

//controlers
appSaudacao.filter('ola', function(){
    return function(nome){
        return "Olá " + nome + "!";
    }
});