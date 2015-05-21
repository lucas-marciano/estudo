app.factory('Pessoa', function(){
    var Pessoa = function(){
        this.nome = "Lucas";
        this.idade = 0;
        
        this.comprimentar = function(){
            return "ola " + this.nome;
        }
    }
    
    return Pessoa;
});