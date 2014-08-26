angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('InventorysCtrl', function($scope, Inventorys) {
  $scope.inventorys = Inventorys.all();
})

.controller('InventoryDetailCtrl', function($scope, $stateParams, Inventorys) {
  $scope.inventory = Inventorys.get($stateParams.inventoryId);
})


.controller('OrdersCtrl', function($scope, Orders) {
  $scope.orders = Orders.all();
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
})


.controller('AccountCtrl', function($scope) {
});
