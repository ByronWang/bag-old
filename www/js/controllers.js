angular.module('starter.controllers', [])

.controller('GlobalCtrl', function($scope,$ionicModal,LoginUser) {
	$scope.user = LoginUser.get();
	$scope.cart = {
			cnt:0,
			size:function(){
				var len =0;
				angular.forEach($scope.cart.Countrys,function(o){
					len = len + o.Items.length;
				});
				return len;
			},
			Countrys:[]};
	$scope.doCart = function(){
		alert("from global");
	};
	$scope.addToCart = function(order){
		var hasExist = false;

		var country;

		angular.forEach($scope.cart.Countrys,function(o){
			if(o.name == order.country){
				country = o;
			}
		});
		
		if(country){
			angular.forEach(country.Items,function(o){
				if(o.id == order.id){
					hasExist = true;
				}
			});
			if(hasExist){
				order.amount = order.amount + 1;
			}else{
				order.amount = 1;
				country.Items.push(order);	
			}			
		}else{
			var country = {
					name: order.country,
					Items:[]
			};			
			country.Items.push(order);
			$scope.cart.Countrys.push(country);
		}
	};
	
	$scope.editCart = function(){
		  $ionicModal.fromTemplateUrl('templates/orders-cart.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modal = modal;
		    $scope.modal.show();
		  });
		
		  $scope.openModal = function() {
		    $scope.modal.show();
		  };
		  
		  $scope.login = function() {
		    	user.username =$scope.user.username;
		    	islogin = true;
	    		    $scope.modal.hide();
	    		    callback(user);
		  };
		  
		  $scope.closeModal = function() {	    			  
		    $scope.modal.hide();
		  };	
	};
	
})

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {

})
.controller('CartCtrl', function($scope, $ionicSlideBoxDelegate) {

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

.controller('InventoryDetailCtrl', function($scope, $stateParams,$timeout,$ionicSlideBoxDelegate, Inventorys) {
  $scope.inventory = Inventorys.get($stateParams.inventoryId);
  $scope.activeItem  = $scope.inventory.Items[$stateParams.itemId];
  
  $scope.slideSize = function(){
	  return $scope.inventory.Items.length;
  };
  
  $scope.slideActiveSlide = function(){
	  var delegateInstance  = $ionicSlideBoxDelegate.$getByHandle('inventory');
	  if(delegateInstance){
		  return delegateInstance.currentIndex() + 1;
	  }else{
		  return 0;
	  }
  };  
  $timeout( function() {
      $scope.$broadcast('slideBox.setSlide', $stateParams.itemId);
  }, 300);
  
  $scope.slideHasChanged=function($index){
	  $scope.activeItem = $scope.inventory.Items[$index];
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
  $scope.activeItem  = $scope.order.Items[$stateParams.itemId];
  
  
  $scope.fromStatusToIndex = function(status){
	  if(status>2){
		  return status-2;
	  }else{
		  return status-1;
	  }
  };
  
  $scope.$watch('statusActiveSlide',function(){
	  
  });
  
  $scope.statusSlide = function(e,to){
	  $ionicSlideBoxDelegate.$getByHandle("orderStatus").slide(to);
	  var ele = angular.element(e);
	  angular.forEach(ele.parent().parent().find("div"),function(i){
		  var ie =angular.element(i);
		 if(ie.hasClass("active"))ie.removeClass("active"); 
	  });
	  ele.addClass("active");
  };
  
  /*
  $scope.$curStatus = $scope.item.statusId;
  
  $scope.initSlide = function(){
	  if($scope.item.statusId>2){
		  return $scope.item.statusId-2;
	  }else{
		  return $scope.item.statusId-1;
	  }
  };
  $scope.$watch($scope.item.statusId,function(){
	  if($scope.item.statusId){
		  $timeout( function() {
		      $scope.$broadcast('slideBox.setSlide', $scope.initSlide());
		  }, 300);
	  };
  });
  

*/
  

  $scope.slideSize = function(){
	  return $scope.order.Items.length;
  };
  
  $scope.slideActiveSlide = function(){
	  var delegateInstance  = $ionicSlideBoxDelegate.$getByHandle('order');
	  if(delegateInstance){
		  return delegateInstance.currentIndex() + 1;
	  }else{
		  return 0;
	  }
  };  
  $timeout( function() {
      $scope.$broadcast('slideBox.setSlide', $stateParams.itemId);
  }, 300);
  
  $scope.slideHasChanged=function($index){
	  $scope.activeItem = $scope.order.Items[$index];
	  $scope.statusActiveSlide = $scope.fromStatusToIndex($scope.activeItem.statusId);
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



