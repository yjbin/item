app.controller('mainController',function($scope,$rootScope,$routeParams,$http){
	$rootScope.navTitle="首页";
	$rootScope.navLeftImage="img/search_min.png";
	$rootScope.navLeftUrl="#/search/1";
	$http({
		method:'get',
		url:mainListUrl
	}).success(function(response){
		for(var i=0; i<response.data.length; i++)
		{
			//alert(item=response.data[i].category);
			//alert(item=response.data[i].author_name);
			var item=response.data[i];
			switch(item.category){
				case "1":{
					item.categoryName='阅读';
					item.detailPath="#/readDetail/"+item.id;
				}break;
				case "4":{
					item.categoryName='音乐';
					item.detailPath="#/musicDetail/"+item.id;
				}break;
				case "5":{
					item.categoryName='影视';
					item.detailPath="#/movieDetail/"+item.id;
				}break;
			}
		}
		$scope.itemList=response.data;
		//alert($scope.itemList[0].author_name);
	}).error(function(){
		alert('读取错误');
	});
})