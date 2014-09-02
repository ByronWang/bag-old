angular.module('starter.controllers', [])

.controller('GlobalCtrl', function($scope,LoginUser) {
	$scope.user = LoginUser.get();
	$scope.cart = {
			cnt:0,
			size:function(){
				return this.cnt;
			},
			Items:[]};
	$scope.doCart = function(){
		alert("from global");
	};
	$scope.addToCart = function(order){
		$scope.cart.Items.push(order);
		$scope.cart.cnt = $scope.cart.cnt  + 1;
	};
	
})

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {

})

.controller('InventorysCtrl', function($scope, Inventorys) {
  $scope.inventorys = Inventorys.all();
})

.controller('InventoryDetailCtrl', function($scope, $stateParams, Inventorys) {
  $scope.inventory = Inventorys.get($stateParams.inventoryId);  
  $scope.slideHasChanged=function($index){
	  
  };
})

.controller('ProductsCtrl', function($scope, Products) {
  $scope.products = Products.all();
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
  $scope.selectThis = function(){
	  $scope.addToCart($scope.product);
	  return false;
  };
})


.controller('OrdersCtrl', function($scope, Orders) {
  $scope.orders = Orders.all();
  
  //Load more after 1 second delay
  $scope.loadMoreItems = function() {
     $scope.$broadcast('scroll.infiniteScrollComplete');
  };
})

.controller('OrderDetailCtrl', function($scope, $stateParams,$ionicSlideBoxDelegate, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
  $scope.slide = function(to){
	  $ionicSlideBoxDelegate.$getByHandle("orderStatus").slide(to);
  };
  
  
  
})

.controller('TestCtrl', function($scope, $http) {
	  $scope.items = [];
	  for (var i = 0; i < 20; i++) {
	    $scope.items.push(i);
	  }

	  //Load more after 1 second delay
	  $scope.loadMoreItems = function() {
	     var i = $scope.items.length;
	     var j = $scope.items.length + 5;
	     for (; i < j; i++) {
	       $scope.items.push('Item ' + i);
	     }
	     $scope.$broadcast('scroll.infiniteScrollComplete');
	  };
})

.controller('AccountCtrl', function($scope,LoginUser) {
	LoginUser.requireUser($scope,function(user){
		$scope.currentUser = user;
	});
});



