//文章
angular.module('articleMod',[])
.controller('articleController',function($scope,$routeParams){
	switch($routeParams.type){//读取type参数的值
		case 'sport':
		$scope.arr=['新闻标题1','新闻标题2','新闻标题3','新闻标题4'];
		break;
		case 'game':
		$scope.arr=['game新闻标题1','game新闻标题2','game新闻标题3','game新闻标题4'];
		break;
		case 'news':
		$scope.arr=['news新闻标题1','news新闻标题2','news新闻标题3','news新闻标题4'];
		break;
	}
});

