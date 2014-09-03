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

.controller('tabsMenuCtrl', function($scope) {
  $scope.showThis = function(e){
	  var ele = angular.element(e);
	  ele.parent().find("a").removeClass("tab-item-active"); 
	  ele.addClass("tab-item-active");
  };
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

.controller('OrderDetailCtrl', function($scope, $stateParams,$ionicSlideBoxDelegate,$timeout, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
  $scope.item = Orders.getItem($stateParams.orderId,$stateParams.itemId);
  $scope.$curStatus = $scope.item.statusid;
  
  $scope.initSlide = function(){
	  if($scope.item.statusid>2){
		  return $scope.item.statusid-2;
	  }else{
		  return $scope.item.statusid-1;
	  }
  };
  $scope.$watch($scope.item.statusid,function(){
	  if($scope.item.statusid){
		  $timeout( function() {
		      $scope.$broadcast('slideBox.setSlide', $scope.initSlide());
		  }, 300);
	  };
  });

  
  $scope.slide = function(e,to){
	  $ionicSlideBoxDelegate.$getByHandle("orderStatus").slide(to);
	  var ele = angular.element(e);
	  angular.forEach(ele.parent().parent().find("div"),function(i){
		  var ie =angular.element(i);
		 if(ie.hasClass("active"))ie.removeClass("active"); 
	  });
	  ele.addClass("active");
  };

  $scope.onSwipeLeft = function(){
	  $scope.order.name = "Left";
  };
  $scope.onSwipeRight = function(){
	  $scope.order.name = "Right";	  
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



