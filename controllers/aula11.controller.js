angular.module('app',['ngRoute'])
    .controller('Aula11Controller', function($scope, $route, $routeParams, $location){
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

.controller('controllerInicial', function($scope){
    console.log('Controller inicial');
})

.controller('controllerPagina1',function($scope){
    console.log('Controller pagina 1');
})


.controller('controllerPagina2',function($scope, $routeParams){
    $scope.parametros = $routeParams;
    console.log('Controller pagina 2 - id: ' + $scope.parametros.idproduto);
})

.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl : 'aula11paginas/inicial.html',
        controller  : 'controllerInicial'
    })
    .when('/pagina1', {
        templateUrl : 'aula11paginas/pagina1.html',
        controller  : 'controllerPagina1'
    })
    .when('/pagina2/:idproduto', {
        templateUrl : 'aula11paginas/pagina2.html',
        controller  : 'controllerPagina2'
    })
    .otherwise({
        redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
});