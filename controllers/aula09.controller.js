app.controller('aula09Controller', ['$scope', 'operacoes','Pessoa', function($scope, operacoes, Pessoa){
    $scope.pessoa = new Pessoa();
    console.log(operacoes.somar(10, 10));
}]);

app.controller('aula09Controller2', ['$scope', 'operacoes','Pessoa', function($scope, operacoes, Pessoa){
    $scope.pessoa02 = new Pessoa();
    $scope.pessoa02.nome = "Jose Pedro";
    $scope.pessoa02.idade = 30;
    console.log(operacoes.somar(10, 10));
}]);