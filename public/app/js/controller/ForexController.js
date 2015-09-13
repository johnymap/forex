app.controller('forexController', function($scope,$http){

    $scope.forex = [];

    $http.get('/api/currencies').
        success(function(data, status, headers, config) {
            $scope.forex = data;
        });

    $scope.addOrder = function(forexoptions){
        $http.get('/api/pooloption/addvote/'+ pooloptions.id).
            success(function(data, status, headers, config) {
                currencyoptions.vote++;
            });
    }

});

