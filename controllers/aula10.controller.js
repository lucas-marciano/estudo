//outra forma de iniciar um controller
//$filter, estou passando todos os filtros
function Aula10Controller($scope, $filter){
    console.log("Iniciou controller");
    
    
    console.log($filter('retornaoi')('Lucas marciano'));
    
    $scope.pessoa = {
        nome: "lucas",
        idade: "25"
    }
}

app.controller('Aula10Controller',Aula10Controller);
