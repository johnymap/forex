
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
            .state('form.profile', {
                url: '/profile',
                templateUrl: 'form-profile.html'
            })

            // url will be /form/interests
            .state('form.interests', {
                url: '/interests',
                templateUrl: 'form-interests.html'
            })

            // url will be /form/payment
            .state('form.payment', {
                url: '/payment',
                templateUrl: 'form-payment.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/profile');
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
        $scope.soldSheets = 0;

        // function to process the form
        $scope.processForm = function() {

            console.log($scope.formData['name']);

            switch ($scope.formData['currency_purchased']){
                case "USDUSD":
                    $scope.surcharge = 7.5;
                    return;
                case "USDGBP":
                    $scope.surcharge = 5;
                    return;
                case "USDEUR":
                    $scope.surcharge = 5;
                    return;
                case "USDKES":
                    $scope.surcharge = 2.5;
                    return;
            }
            $scope.rate = $scope.forex.indexOf($scope.formData['currency_purchased']);
            alert($scope.rate);

            $scope.rate = $scope.formData[$scope.rate];

            console.log($scope.rate['rate']);

            $scope.total = $scope.rate * $scope.surcharge;
        };

    });

