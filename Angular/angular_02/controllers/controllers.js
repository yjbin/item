app.controller('myController',function($scope){
	/*
	$scope存了本控制器的angular数据
	$rootScope存了整个app的angular数据
	$routeParams其他页面跳到本页面url中的参数
	设置界面
	标题
	按钮
	返回地址
	登录按钮链接
	*/
	$scope.imagePrefix=imagePrefix;//附件路径
})
//错误控制器
app.controller('errorPageController',function($scope,$rootScope){
	
})