//inicia o serviço com o nome dele
app.service('operacoes', function(){
    console.log("Service entrou");
    
    this.somar = function(valor1, valor2){
        return valor1 + valor2;
    }
    
    this.subtrair = function(valor1, valor2){
        return valor1 - valor2;
    }
});
