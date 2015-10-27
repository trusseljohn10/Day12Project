var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, serviceApp){
	getQuotes();
	function getQuotes() {
		$scope.quotes = serviceApp.getData();
	}
	$scope.clicker = function() {
		$scope.showQuotes = !$scope.showQuotes;
	}
	
	$scope.filterClick = function() {
		$scope.filter = !$scope.filter;
	}
	
	$scope.saveQuote = function() {
		serviceApp.addData($scope.newQuote);
		getQuotes();
		$scope.newQuote={};
	}
	
	$scope.deleteData = function(quote) {
		serviceApp.removeData(quote)
	}

});