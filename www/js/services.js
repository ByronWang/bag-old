angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Inventorys', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var inventorys = [
		            {	country:'韩国',
		            	date:'2013-11-11',
		            	Items:[
	    		    { id: 0, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', description:"",amount:3,expectedPrice:'3000元',seller:'买手二'}
	            	 ]		            	
		            },
		            {country:'美国',
		            	date:'2013-11-11',
		            	Items:[
	    		    { id: 0, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', country:'韩国',description:"",amount:3,expectedPrice:'3000元',seller:'买手二'},
	    		    { id: 1, name: '苹果手机' , type:'数码', country:'美国',description:"",amount:2,expectedPrice:'5000元',seller:'买手一'},
	    		    { id: 2, name: '花王婴儿尿布' , type:'妇婴', country:'日本',description:"",amount:9,expectedPrice:'500元',seller:'买手一'},
	    		    { id: 3, name: '惠氏奶粉' , type:'妇婴', country:'美国',description:"",amount:6,expectedPrice:'290元',seller:'买手一'}
	            	 ]		            	
		            },
		            {country:'韩国',
		            	date:'2013-11-11',
		            	Items:[
	    		    { id: 0, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', country:'韩国',description:"",amount:3,expectedPrice:'3000元',seller:'买手二'},
	    		    { id: 1, name: '苹果手机' , type:'数码', country:'美国',description:"",amount:2,expectedPrice:'5000元',seller:'买手一'}
	            	 ]		            	
		            }
	  ];


  return {
    all: function() {
      return inventorys;
    },
    get: function(inventoryId) {
      // Simple index lookup
      return inventorys[inventoryId];
    }
  };
})

.factory('Products', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var products = [
	    { id: 0, name: 'Scruff McGruff',orderFrom:'法国',price:500},
	    { id: 1, name: 'G.I. Joe' ,orderFrom:'日本',price:500},
	    { id: 2, name: 'Miss Frizzle' ,orderFrom:'美国',price:500},
	    { id: 3, name: 'Ash Ketchum' ,orderFrom:'法国',price:5000}
	  ];

	  return {
	    all: function() {
	      return products;
	    },
	    get: function(productId) {
	      // Simple index lookup
	      return products[productId];
	    }
	  };
	})
	
	
.factory('LoginUser', function($ionicModal) {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var user={};
	  var islogin = false;

	  return {
	    get: function() {
	      // Simple index lookup
	      return user;
	    },
	    requireUser:function($scope,callback){	    
	    	if(!islogin){
	    		$scope.user={};
	    		$ionicModal.fromTemplateUrl('templates/login.html', {
	    		    scope: $scope,
	    		    animation: 'slide-in-up'
	    		  }).then(function(modal) {
	    		    $scope.modal = modal;
	    		    $scope.modal.show();
	    		    return user;
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
	    	}else{
	    		callback(user);
	    	}
		    return user;
	    },
	    login: function(user,pwd){
	    	user.username = user;
	    	user.pwd = pwd;
	    	islogin = true;
	    	return;
	    }
	  };
	})
	
	.factory('Orders', function() {
		  // Might use a resource here that returns a JSON array

		  // Some fake testing data
		  var orders = [
			            {
			            	Items:[
			   	    		    { id: 0, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', country:'韩国',description:"",amount:3,expectedPrice:'3000元',status:"买手已接单"},
				    		    { id: 1, name: '苹果手机' , type:'数码', country:'美国',description:"",expectedPrice:'5000元',seller:'买手一',status:"买手购买中"},
				    		    { id: 2, name: '花王婴儿尿布' , type:'妇婴', country:'日本',description:"",expectedPrice:'500元',seller:'买手一',status:"寻求买手中"},
				    		    { id: 3, name: '惠氏奶粉' , type:'妇婴', country:'美国',description:"",expectedPrice:'290元',seller:'买手一',status:"买手已接单"}
			            	 ]		            	
			            },
			            {
			            	Items:[
			   	    		    { id: 20, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', country:'韩国',description:"",amount:3,expectedPrice:'3000元',status:"买手已接单"},
				    		    { id: 21, name: '苹果手机' , type:'数码', country:'美国',description:"",expectedPrice:'5000元',seller:'买手一',status:"买手购买中"},
				    		    { id: 22, name: '花王婴儿尿布' , type:'妇婴', country:'日本',description:"",expectedPrice:'500元',seller:'买手一',status:"寻求买手中"},
				    		    { id: 23, name: '惠氏奶粉' , type:'妇婴', country:'美国',description:"",expectedPrice:'290元',seller:'买手一',status:"买手已接单"}
			            	 ]		            	
			            },
			            {
			            	Items:[
			   	    		    { id: 30, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', country:'韩国',description:"",amount:3,expectedPrice:'3000元',status:"买手已接单"},
				    		    { id: 31, name: '苹果手机' , type:'数码', country:'美国',description:"",expectedPrice:'5000元',seller:'买手一',status:"买手购买中"},
				    		    { id: 32, name: '花王婴儿尿布' , type:'妇婴', country:'日本',description:"",expectedPrice:'500元',seller:'买手一',status:"寻求买手中"},
				    		    { id: 33, name: '惠氏奶粉' , type:'妇婴', country:'美国',description:"",expectedPrice:'290元',seller:'买手一',status:"买手已接单"}
			            	 ]		            	
			            }
		  ];

		  return {
		    all: function() {
		      return orders;
		    },
		    get: function(orderId) {
		      // Simple index lookup
		      return orders[orderId];
		    }
		  };
		})
	
	.factory('Users', function() {
		  // Might use a resource here that returns a JSON array

		  // Some fake testing data
		  var users = [
        	    { id: 0, username: 'wangshilian',password:'1234567',nickname:"alian",avatarPath:""},
        	    { id: 1, username: 'jihua',password:'1234567',nickname:"alian",avatarPath:""},
        	    { id: 2, username: 'liubo',password:'1234567',nickname:"alian",avatarPath:""}
		  ];

		  return {
		    all: function() {
		      return users;
		    },
		    get: function(orderId) {
		      // Simple index lookup
		      return users[orderId];
		    }
		  };
		})
		;
