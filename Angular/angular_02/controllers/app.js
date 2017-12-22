﻿var app=angular.module('myApp', ['ngRoute'])
.config([
'$compileProvider',
function ($compileProvider) {
$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|javascript|mailto|tel|file|sms):/);
}
]);
//配置路由
app.config(function($routeProvider){
	//重定向
	$routeProvider.when("/",{//主目录
		redirectTo:"/main/0"//重定向
	})
	//首页
	$routeProvider.when("/main",{//链接的地址
		templateUrl:'views/main.html',//模板
		controller:"mainController"
	})
	//阅读列表
	$routeProvider.when("/readList",{//链接的地址
		templateUrl:'views/readList.html',//模板
		controller:"readListController"
	})
	//阅读详情
	$routeProvider.when("/readDetail/:id",{//链接的地址
		templateUrl:'views/readDetail.html',//模板
		controller:"readDetailController"
	})
	//音乐列表
	$routeProvider.when("/musicList",{//链接的地址
		templateUrl:'views/musicList.html',//模板
		controller:"musicListController"
	})
	//音乐详情
	$routeProvider.when("/musicDetail/:id",{//链接的地址
		templateUrl:'views/musicDetail.html',//模板
		controller:"musicDetailController"
	})
	//视频列表
	$routeProvider.when("/movieList",{//链接的地址
		templateUrl:'views/movieList.html',//模板
		controller:"movieListController"
	})
	//视频详情
	$routeProvider.when("/movieDetail/:id",{//链接的地址
		templateUrl:'views/movieDetail.html',//模板
		controller:"movieDetailController"
	})
	//登录页面
	$routeProvider.when("/login/",{//链接的地址
		templateUrl:'views/login.html',//模板
		controller:"loginController"
	})
	//登录后用户中心首页
	$routeProvider.when("/userMain/",{//链接的地址
		templateUrl:'views/userMain.html',//模板
		controller:"userMainController"
	})
	//收藏列表
	$routeProvider.when("/favoriteList/:type",{//链接的地址
		templateUrl:'views/favoriteList.html',//模板
		controller:"favoriteListController"
	})
	//搜索页面
	$routeProvider.when("/search/:keyword",{//链接的地址
		templateUrl:'views/search.html',//模板
		controller:"searchController"
	})
	//错误路由（404）
	$routeProvider.when("/errorPage",{//链接的地址
		templateUrl:'views/errorPage.html',//模板
		controller:"errorPageController"
	})
	$routeProvider.otherwise({redirectTo:"/errorPage"})
})
//判断是否登录
app.run(['$rootScope',function($rootScope){
	if(localStorage.isLogin=='1')
	{
		$rootScope.navRightUrl='#/userMain';
	}
	else
	{
		$rootScope.navRightUrl='#/login';
	}
}]);