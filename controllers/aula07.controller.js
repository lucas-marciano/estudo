app.controller('aula07Controller', function($scope){
    $scope.nomes = ['lucas', 'andre','joao','taina','naide'];
    $scope.pessoas = [];
    
    $scope.pessoas.push(
        {nome: "Lucas", idade: 31, status: false}
    );
    
    $scope.pessoas.push(
        {nome: "Maria", idade: 21, status: true}
    );
    
    $scope.pessoas.push(
        {nome: "Jose", idade: 33, status: false}
    );
    
    //Add pessoa
    $scope.addpessoa = function(){
        var nome = document.getElementById("nomepessoa");
        var idade = document.getElementById("idadepessoa");
        
        $scope.pessoas.push(
            {nome: nome.value, idade: idade.value, status: false}
        );
        
        nome.value = "";
        idade.value = "";
    };
});