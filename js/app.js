(function () {
    // buon uso e costume

    // variabili
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'robe a cose',
            canPurchase: true,
            soldOut: true,
            images: [
                {
                    full: 'img/dodecahedron-01-full.jpg',
                    thumb: 'img/dodecahedron-01-thumb.png'
                },
                {
                    full: 'img/dodecahedron-02-full.jpg'
                }
            ]
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

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

})();

