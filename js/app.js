(function () {
    // buon uso e costume

    // variabili
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'robe a cose',
            canPurchase: true,
            soldOut: true
        }, {
            name: 'Maronne',
            price: 5.95,
            description: 'robe a cose per davvero',
            canPurchase: false,
            soldOut: true
        }
    ];
    // gem è un json praticamente

    var app = angular.module('store', []);

    // angular richiama agularjs
    // module è il modulo
    // 'store' nome modulo
    // in [] si mettono le dipendenze

    // expressions

    app.controller('StoreController', function () {
        this.products = gems;
    });
    // il controller va dentro la nostra applicazione
    // ricorda il costruttore

})();

