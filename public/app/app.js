
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.choose', {
                url: '/choose',
                templateUrl: 'form-choose.html'
            })

            // url will be /form/interests
            .state('form.order', {
                url: '/order',
                templateUrl: 'form-order.html'
            })

            // url will be /form/payment
            .state('form.confirm', {
                url: '/confirm',
                templateUrl: 'form-confirm.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/choose');
    })

// our controller for the form
// =============================================================================
    .controller('formController', function($scope, $http) {

        // store all form data in this object
        $scope.formData = {};

        $scope.forex = [];

        $http.get('/api/currencies').
            success(function(data, status, headers, config) {
                $scope.forex = data;
            });

        $scope.total = 0;
        $scope.surcharge = 0;

        // function to process the form
        $scope.processForm = function() {

            console.log($scope.formData['name']);
            $scope.cur_pur = $scope.formData['currency_purchased'].split('-');
            $scope.currency = $scope.cur_pur[0];
            $scope.rate = $scope.cur_pur[1];
            switch ($scope.currency){
                case "USDUSD":
                    $scope.surcharge = 7.5;

                case "USDGBP":
                    $scope.surcharge = 5;

                case "USDEUR":
                    $scope.surcharge = 5;

                case "USDKES":
                    $scope.surcharge = 2.5;

            }

            console.log($scope.rate);

            console.log($scope.currency);

            //$scope.zar_rate = $scope.forex['code'].findIndexOf('USDZAR');
            //console.log($scope.zar_rate);

            $scope.total = ($scope.rate * $scope.surcharge) * $scope.formData['amount_purchased'];
            $scope.formData['surcharge_percentage'] = $scope.surcharge;
            $scope.formData['exchange_rate'] = $scope.rate;

            console.log($scope.total);

            //$scope.rate = $scope.formData[$scope.rate];

            //console.log($scope.rate['rate']);

            //$scope.total = $scope.rate * $scope.surcharge;

            // process the form
            $http({
                method  : 'POST',
                url     : '/api/order',
                data    : $scope.formData,  // pass in data as strings
                headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        //$scope.errorName = data.errors.name;
                        //$scope.errorSuperhero = data.errors.superheroAlias;

                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    }
                });

        };

    });

