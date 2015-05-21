app.controller('aula08Controller', function($scope){
    $scope.estados      = ['RN', 'RJ', 'SP', 'PB'];
    $scope.pessoa       = novaPessoa();
    $scope.pessoas      = [];
    $scope.visualizar = false;
    $scope.salvarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoa = novaPessoa();
        $scope.formulario.$setUntouched()
    }
    
    $scope.ver = function(){
        $scope.visualizar = true;
    }
});
    
function novaPessoa(){
    return {
        nome    :"",
        email   :"",
        sexo    :"",
        estado  :"SP",
    }
}

