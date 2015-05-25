app.filter('retornaoi', function(){
    return function(nome){
        return "Ola " + nome;
    }
});