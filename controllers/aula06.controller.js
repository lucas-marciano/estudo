//nome do controler | função
//$scope contem as variaveis do bloco de codigo marcado pela função
app.controller('aula06Controller',function($scope){
    $scope.nome = "Lucas de Almeida Marciano";
    $scope.olaMundo = function(nome){
        alert("Ola mundo " + nome);
    }
});