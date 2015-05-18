app.controller('aula08Controller', function($scope){
   $scope.pessoa = novaPessoa();
});
    
function novaPessoa(){
    return {
        nome :"",
        email:"",
        sexo:"",
    }
}

