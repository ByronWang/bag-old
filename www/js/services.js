angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Inventorys', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var inventorys = [
    { id: 0, name: '自然堂凝时鲜颜肌活乳液', type:'化妆品', orderFrom:'韩国代购',amount:'3000元',seller:'买手一'},
    { id: 1, name: '苹果手机' , type:'数码', orderFrom:'美国代购',amount:'5000元',seller:'买手一'},
    { id: 2, name: '花王婴儿尿布' , type:'妇婴', orderFrom:'日本代购',amount:'500元',seller:'买手一'},
    { id: 3, name: '惠氏奶粉' , type:'妇婴', orderFrom:'美国代购',amount:'290元',seller:'买手一'},
  ];

  return {
    all: function() {
      return inventorys;
    },
    get: function(inventoryId) {
      // Simple index lookup
      return inventorys[inventoryId];
    }
  }
})

.factory('Products', function() {
	  // Might use a resource here that returns a JSON array

	  // Some fake testing data
	  var products = [
	    { id: 0, name: 'Scruff McGruff',orderFrom:'法国代购',price:500 },
	    { id: 1, name: 'G.I. Joe' ,orderFrom:'法国代购',price:500},
	    { id: 2, name: 'Miss Frizzle' ,orderFrom:'法国代购',price:500},
	    { id: 3, name: 'Ash Ketchum' ,orderFrom:'法国代购',price:5000}
	  ];

	  return {
	    all: function() {
	      return products;
	    },
	    get: function(productId) {
	      // Simple index lookup
	      return products[productId];
	    }
	  }
	})
	
	.factory('Orders', function() {
		  // Might use a resource here that returns a JSON array

		  // Some fake testing data
		  var orders = [
		    { id: 0, name: 'Scruff McGruff',type:'法国代购' },
		    { id: 1, name: 'G.I. Joe' ,type:'法国代购'},
		    { id: 2, name: 'Miss Frizzle' ,type:'法国代购'},
		    { id: 3, name: 'Ash Ketchum' ,type:'法国代购'}
		  ];

		  return {
		    all: function() {
		      return orders;
		    },
		    get: function(orderId) {
		      // Simple index lookup
		      return orders[orderId];
		    }
		  }
		})
		;
