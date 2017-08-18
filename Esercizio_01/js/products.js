(function () {
    var app = angular.module('product-store', []);

    app.directive('productTitle', function () {
        return {
            // configurazione della direttiva
            restrict: 'E', // tipo della direttiva element
            templateUrl: 'product-title.html'
        };
    });


    // <h3 product-title></h3>  mixing behaviors
    app.directive('productTitle'), function () {
        return {
            restrict: 'A', // tipo direttiva attribute
            templateUrl: 'product-title.html'
        }
    };

    // direttive con controller
    app.directive('productPanels', function () {
        return {
            // configurazione della direttiva
            restrict: 'E', // tipo della direttiva element
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });

});
