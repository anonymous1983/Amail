(function(angular) {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://placehold.it/150x150/2ecc71/ffffff/&text=gem-01",
      "http://placehold.it/150x150/2980b9/ffffff/&text=gem-02",
      "http://placehold.it/150x150/e74c3c/ffffff/&text=gem-03"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://placehold.it/150x150/f1c40f/ffffff/&text=gem-04",
      "http://placehold.it/150x150/e67e22/ffffff/&text=gem-05",
      "http://placehold.it/150x150/9b59b6/ffffff/&text=gem-06"
    ]
  }];
})(angular);
