angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {

})

.controller('InventorysCtrl', function($scope, Inventorys) {
  $scope.inventorys = Inventorys.all();
})

.controller('InventoryDetailCtrl', function($scope, $stateParams, Inventorys) {
  $scope.inventory = Inventorys.get($stateParams.inventoryId);
})

.controller('ProductsCtrl', function($scope, Products) {
  $scope.products = Products.all();
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
})


.controller('OrdersCtrl', function($scope, Orders) {
  $scope.orders = Orders.all();
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
})

.controller('AccountCtrl', function($scope) {
});
