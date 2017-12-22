//产品
angular.module('productMod',[])
.controller('productController',function($scope,$routeParams){
	$scope.title= "这是一个p标签";
	
	switch($routeParams.type){//读取type参数的值
		case 'ice':
		$scope.arr=[{
	"name":"爱仕达超过专卖店",
	"info":"满200元可用",
	"price":20,
},{
	"name":"攻可购买自营店齐",
	"info":"满200元可用",
	"price":20,
},
{
	"name":"格力专卖店",
	"info":"满2000元可用",
	"price":200,
},
{
	"name":"爱美斯专卖店",
	"info":"满200元可用",
	"price":205,
}
]
		break;
		case 'air':
		$scope.arr=[{
	"name":"格力",
	"info":"低能耗",
},{
	"name":"美的",
	"info":"好用",
},
{
	"name":"海尔",
	"info":"大牛",
},
{
	"name":"爱美斯",
	"info":"未知",
}
]
		break;
		case 'TV':
		$scope.arr=[{
	"name":"创维",
	"info":"满200元可用",
},{
	"name":"海信",
	"info":"满2000元可用",
},
{
	"name":"长虹",
	"info":"满2000元可用",
},
{
	"name":"黑白",
	"info":"满20元可用",
}
]
		break;
	}
});

