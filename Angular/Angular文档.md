###one
	think:B/S架构，浏览器下运行   eg:网页版微信，网页版qq，在小游戏，网页游戏
		  C/S架构，有个客户端就可以用，在客户端运行
		  
	###什么是angular
			核心的是：MVC、模块化、自动化双向数据绑定、语义化标签、依赖注入等等
			AngularJS则一个框架（诸多类库的集合）以数据和逻辑做为驱动（核心）框架对开发的流程和模式做了约束，
			开发者遵照约束进行开发，更注重的实际的业务逻辑。	   
		  
	##angular指令
			双向绑定
				跟vue一样，只能作用在表单元素
		case:
		#ng-app="" angular的作用范围，这个范围内的代码angular才会作用到  不能嵌套
		#ng-model="" 实现表单的双向绑定  用在form表单身上，比如input,select
				oninput和onchange相似，不同的是oninput是值改变时马上执行，onchange是失去焦点后执行
			
		
		#ng-bind缺点：1）会替换标签里的值；2）不能写过多的业务逻辑
			<!--ng-bind用在接受值只是接受值作用和{{}}差不多-->	
			
			
			ng-bind="a+b"和{{a+b}}这里的都会被默认为字符串的加号拼接因为系统给返回的是表单里的value值，是一个字符串
			但是js语法不互通，只能用计算记得语言   a*1来把a转换为数值 
			
		#模板{{}}	解决ng-bind标签里不可以写内容，{{}}前后都可以写内容
		表达式是写在{{}}里，可以写三目运算，业务逻辑
		{{num=1}},{{num*5+5}},{{num>5?'你赢了':'你输了'}}
		
		#ng-init：就是初始化值 ng-init="stra=0,strb=0"  用value不行,因为ng-model会替换表单的value
			js变量和angular的不互通  用contrallor	
			作用：存放数据  数组，json,变量等
		
		#ng-repeat  循环
			如果数组有重复的就循环不了，这时候要加上：track by $index
			$index就是序号，默认从0开始数，
			<li ng-repeat="(a,b) in json">{{$index}}===>{{a}}====>{{b}}</li>
			a对应的就是json的键名
			b对应的是Josn的键值	
			$index  位置  、索引
			
		#angular class  类名 
			class读取值要加上{{}}
			ng-class 可以不写{{}},
			angular会自动添加一个样式名称  ng-binding
			   
			<!--这里的类名可以拿字符串包，也可以不包-->
			<div ng-class="{red:false,'blue':true}">	
			</div>
			<!--以对象的方式存储类名-->
			<ul ng-init="json={'red':true,'wh':false}">
				<li ng-class="json"></li>
			</ul>
			<div ng-init="arr=['red','wh']">
				<div ng-class="arr">
					{{arr}}
				</div>
			</div>		
			
			点击改变class
			<div ng-init="aa=true;bb=false">
				<button type="button" ng-click="aa=!aa">点击改变</button>
				<div ng-class="{true:'bg_01',false:'bg_02'}[aa]">改变背景色</div>
				<hr/>
				<button type="button" ng-click="bb=!bb">点击改变</button>
				<div ng-class="{bg_01:bb}">改变背景色</div>
			</div>
			
			<button type="button" ng-click="aa=!aa">点击切换class</button>	
			<!--后面跟一个数组，true的显示，false的不显示当成对象的属性来看-->
			<div ng-class="{true:'bj1',false:'bj2'}[aa]">
		
		#ng-style	只能读取对象形式   可以加{{}}也可以不加  ng-style="{{json}}"
			
			style	只能读取字符串  如果是style就必须加上{{}} 
		
		#ng-if="true/false",渲染(创建)元素，为true页面渲染它添加lcalss(ng-scope)，false页面中不存在它
		#ng-show="true/false"就是现实和隐藏，如果是隐藏会自动添加class="ng-hide"
		ng-hide="true/false"和ng-show原理一样，只是相反
		
		#ng-include 引入其他页面，可以做到页面共享，但是引入页面注意：加上''ng-include="'xxx.html'"
					引入页面时注意一定要加单引号
					<!--注意这两个页面不能再有html和body-->
			
		$odd奇数行  $even偶数行	
			
	###angular过滤器
		#currency
			{rmb|currency }	  $
			{rmb|currency:"￥"}  人民币
			其他：{{rmb|currency:'&'}}
	 	#date
	 		date日期时间过滤器，年yyyy,月 MM,日 dd, 星期EEEE，时(24小时制H,12小时制h),分mm,秒ss,毫秒.sss
	 		可以组合在一起使用，也可以分开使用
	 		12小时制：{{1498032471834|date:'yyyy-MM-dd hh:mm:ss .sss EEEE'}}

			24小时制：{{1498032471834|date:'yyyy-MM-dd HH:mm:ss'}}
	
			年月日制：{{1498032471834|date:'yyyy年MM月dd日'}}
			
			只要时间：{{1498032471834|date:'HH:mm:ss'}}
			<
			只要时间：{{1498032471834|date:'a hh:mm:ss'}}

		#json
			将普通的对象转换成json对象
			{{{name:'张三'}|json}}
			
		#大小写   不支持vue中的capitalize
			<input type="text" ng-model="str">
			大写：{{str|uppercase}}
			小写：{{str|lowercase}}
			
		#number  保留小数位
			<input type="text" ng-model="str" />
			保留几位小数：{{str|number:3}}
		
		#limitTo截取制定长度（不可以截取对象）		
			正数：是从前向后截取
			负数：是从后向前截取
					截取数字：{{123456|limitTo:3}}
					截取数组：{{[{name:'张三',age:18},{name:'李四',age:28}]|limitTo:1}}			
					截取数组：{{[11,22,33,44,55]|limitTo:2}}
				
		#orderBy  排序
			数组排序，返回的是一个排序后的数组
				<ul ng-init="arr=[18,88,22,108]">
					<li ng-repeat="item in arr|orderBy:item">{{item}}</li>
				</ul>
			第二个参数：0正序排列，非0则是降序排列（从大到小）
				<ul ng-init="arr2=[18,88,22,108]">
					<li ng-repeat="item in arr2|orderBy:item:1">{{item}}</li>
				</ul>
				
		#filter 过滤出""什么样的字符串
				<input type="text" ng-model="str"/>
				<ul ng-init="arr=[18,88,22,108]">
					<li ng-repeat="item in arr|filter:str">{{item}}</li>
				</ul>
				
			<input type="text" ng-model="str" />	
			json=[{name:'小明',age:18},{name:'小公',age:28},{name:'小花',age:28}]
			过滤器的搜索：不写默认模糊搜素
			true和false就是精确搜索和模糊搜索
			<li ng-repeat="item in json|filter:{name:str}:true">
			精确搜索：filter:{name:str}:true
			模糊搜索：filter:{name:str}:false	
			排序的综合练习:
		
		<div ng-init="stu=[{name:'张三',age:18,score:20},{name:'李小三',age:16,score:34},{name:'王大三',age:28,score:12},{name:'二狗子',age:23,score:43},{name:'王二麻子',age:8,score:90},{name:'赵四儿',age:68,score:200}];flag=true">
			<input type="text" ng-model="obj"/>
			<table class="table table-bordered table-hover text-center">
				<tr>
					<th class="text-center">序号</th>
					<th class="text-center" ng-click="flag=!flag;order='name'">姓名</th>
					<th class="text-center" ng-click="flag=!flag;order='age'">年龄</th>
					<th class="text-center" ng-click="flag=!flag;order='score'">成绩</th>
				</tr>
				<tr ng-repeat="student in stu|filter:obj|orderBy:order:flag">
					<td>{{$index+1}}</td>
					<td>{{student.name}}</td>
					<td>{{student.age}}</td>
					<td>{{student.score}}</td>
				</tr>
			</table>
		</div>

###TWO
	凡是angular的参数，只要是带$的，禁止修改名称（因为它是封装好的）
	不带$可以修改（但是最好不要改）
	#控制器controller
		不同的这两个控制器的数据不互通
	一、原生JS和Angular互通的controller
		var app = angular.module('test',[]);
						控制器名称		注意:参数2必须写,及时没有依赖,也要写一个空数组
		app.controller('book',function ($scope) {
			$scope.str="我是来自控制器的东西";//参数2:控制器用来做什么,是一个函数,至少传一个参数 $scope
			//这里存储数据
		})
		controller	控制器（model和view之间的一的一座桥梁）
		angular.module
		参数1：模块的名字，和ng-app创建的模块名字对应
		参数2：模块的依赖，当我们的模块需要依赖其他模块的时候，
		写其他模块名称，可以写多个（数组形式）
		注意：参数2必须写，即使没有依赖也要写一个空的数组
		controller控制器
		是通过模块来创建的，创建控制器的时候会自动创建一个作用域
		作用域中的数据由$scope来管理
		$scope就相当于mvvm中的vm
			一个页面中有多个模块
			一个模块有多个控制器
			
		控制器另一种写法
			app.controller('lisi',['$scope',function(obj){
				obj.a='我是另一种写法'
			}]);
		$scope必须加上引号，并且这里可以传入多个参数
		
	#双层控制器   父子控制器
	
		
		 /* 父控制器不能访问子控制器的数据；
		子控制器中拥有的属性值，首先使用自己的，如果没有就向上查找
		子控制器中拥有的属性值，首先使用自己的 ，
		如果没有就向上查找*/
		var app=angular.module('test',[]);
		app.controller('cont1',function($scope){
			$scope.name="张三";
			$scope.sex="男";
			$scope.score="18"
		})
		app.controller('cont2',function($scope){
			$scope.age=18;
			//$scope.sex='女';
			$scope.name='刘若英';
		})
		
	#依赖注入
		普通函数--由调用者决定参数   调用者不管要什么
		angular.js不能改变js的本质，他也是基于原生js开发
		
		依赖注入
			由定义着决定参数(障眼法)
			真正的angular也是调用者决定参数
			调用者会参考要什么
			angular依赖注入的参数几乎是写死的
			
	二、定时器、延时器
			只有用的原生js--setInterval()就需要加上$scope.$apply()//数据更新或理解成：刷新
			$apply();$scope.$apply();//数据更新或理解成“刷新”
			angular的定时器
			$interval									//开启定时器
				app.controller('box',function ($scope,$interval) {
					$scope.a = 0;
					var timer=null;
					timer = $interval(function () {	//angular提供的定时器
							$scope.a++;
							if ($scope.a>100) {
								$interval.cancel(timer)//angular停止定时器的方法
							}
					},100)
				})
			延时器
			app.controller('cont1',function($scope,$timeout){
					$scope.a=0;
					var timer=$timeout(function(){//angular提供的定时器
						$scope.a+=2;
					},5000);
				})
				//$timeout.cancel(timer);
			
	三、$watch监视
			$wahch方法   初始化就会执行一次
			参数1：监听的属性名
			参数2：触发的方法(监视到改变，干什么)
			只要参数1的只发生了变化，
			参数2的方法马上会执行
			这时用$apply()强制刷新页面，用户看不到
			
			$watch('监视的是谁',fn(干什么),true/false(深度监视))
			//有一些操作，数组，json普通的就监视不了
			//参数3说明：true就是深度监视,false就不深度监视
			//默认是false
			
			新值和旧值
			//创建一个模块
				var app=angular.module('test',[]);
				//创建一个控制器
				app.controller('cont1',['$scope',function(obj){
					//console.log(obj);
					obj.$watch('name',function(newVal,oldVal){
						console.log('新值：'+newVal);
						console.log('旧值：'+oldVal);
					})
				}])
			
	四、ng-src、ng-href、ng-copy、ng-change等等指令和属性
		
		ng-href可以替换原生html里的href 
		ng-href="{{}}" ng-src="{{}}"加大括号
		ng-copy  复制时触发的函数
		ng-cut		剪切时触发的函数
		ng-paste	粘贴时触发的函数
		
		#ng-model-options	两个方法：
		作用：节省电脑资源
		1.debounce  在指定时间范围内进行检测更新
		2.updateOn  输入完成，鼠标失去焦点执行  后跟参数  "blur"
		
		ng-model里的值发生变化时，会自动触发ng-change事件
		ng-model和ng-change组合使用，可以做到值发生变化触发某个函数
##day3		
	五、controller传递broadcast（广播），
		广播
			$broadcast用来进行事件广播,父控制器向子控制器进行事件广播
			参数:
				1.事件的名称
				2.广播给子控制器的数据
			$on用来接收事件
			  参数:
			  	1.接受事件的名称
			  	2.事件对应的处理方法(两个参数：1.事件的对象，2.接收到的数据)
			  	
			$emit 子控制器向父控制器发送广播
				参数:
				1.事件的名称
				2.广播给子控制器的数据
			$on用来接收事件
			  参数:
			  	1.接受事件的名称
			  	2.事件对应的处理方法(两个参数：1.事件的对象，2.接收到的数据)
			  	
		#兄弟控制器之间互传数据的办法	
			兄弟控制器的互相发送接收
			/*
			思路：
			1、哥哥控制器将数据发送到父亲控制器
			2、父亲将接收到的数据发送出去
			3、弟弟控制器接收父亲发送来的数据
			*/
			  	
		#出现闪烁的原因:先加载html,这时候并不认识{{}}这个东西，后加载js
			解决办法：
				1.把angular.js放在html head之间 sc标签放在body之下
				2.加ng-bind="name"
				3.ng-bind-template="{{name}},{{age}}"
				4.ng-clock   样式中给[ng-clock]{display:none}
				
	六、$http初级
			在控制器的函数中传递一个固定的参数 $http
	get方式请求:
		$http({
			method:"get",
			url:"url路径",
			params:{传递的参数},
		}).then(function success(res){
			//成功的函数,res是请求成功后的响应结果
		},function error(){
			//失败的函数
		});
	
	
	//使用Angular的$http的get方式利用ajax请求百度和360的数据
	app.controller('ajax_net',function($scope,$http){
			$scope.bd_str='';
			$scope.arr=[];
			$scope.str_360='';
			$scope.arr1=[];
			//百度搜索
			$scope.$watch('bd_str',function(){
				$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
				{params:{//百度定义好的的接口格式参数
					wd:$scope.bd_str,
					cb:'JSON_CALLBACK',
				}}).success(function(res){
					$scope.arr=res.s;
				}).error(function(status){
					alert('与百度连接失败,'+status);
				});
			});
			//360搜索
			$scope.$watch('str_360',function(){
				$http.jsonp('https://sug.so.360.cn/suggest',{params:{
					word:$scope.str_360,
					encodein:'utf-8',
					encodeout:'utf-8',
					callback:'JSON_CALLBACK',
				}}).success(function(res){
					$scope.arr1=res.s;
					//console.log(res);
				}).error(function(status){
					alert('360请求失败,'+status);
				});
			});
			
		});
	七、ng-disabled、ng-options（下拉用）
			ng-disabled="true"禁用一个表单(输入框,按钮，单选，多选等)
			ng-disabled="false"此表单可用
			ng-options主要是配合select下拉菜单使用
			for:name(是)
			取出name的值作为options的下拉选项
			options会自动生成
			ng-model默认就是每次选中的项
			用法: ng-options="name for name in names"
			
	##指令
		directive是angular 创建指令的方式     指令不能放在控制器里
			参数1：指令的名字
			参数2：指令的方法
			方法返回的也是一个对象，该对象用于配置指令的相关属性
			如果指令名有大写，调用的时候用“-”隔开，调用的时候都用小写字母
			replace:true//替换标签（默认是false不替换
			<a-b-c-defg>我是001</a-b-c-defg>
			如果指令名有大写，调用的时候用“-”隔开，大写变小写\
			调用方式
			app.directive('aBCDeffg',function() {
			return{
				template:'<a href="javascript:;">关闭<ng-transclude><ng-transclude></a>',
				replace:true , //默认用div替换标签
				restrict:'ECMA',
				transclude:true  //追加嵌入到标签中
				}
			});	
			注意：js拼接有换行用\隔开
			
		/*
		 * E(element) 元素，作为一个html的元素出现(标签)
		 * C(class)类名，作为html的class类名出现(class='xx')
		 * M(comment) 注释，作为html的注释出现(注释了才会生效，注释里面的代码有效)
		 * A(attribute)属性，作为html的属性出现<div ab=""><div>
		 */
		
		#ng-transclude
			return{
				restrict:'A',//属性调用
				replace:false,//默认用div替换标签
				template:'<a href="javascript:;">关<ng-transclude></ng-transclude>闭</a>',
				transclude:true//追加，嵌入到标签中
				
				<ng-transclude></ng-transclude>  
				transclude:true配合使用保留原标签内容，将新内容追加到内容中，ng-transclude相当于原标签内容
				
			}
				
		指令:
			抽取功能，封装成插件，在不同页面调用
		指令分类：
			1.组件指令，将指令直接替换成模板的dom元素,嵌入到页面中
			2.装饰指令，对原有的dom元素拓展功能
		
		templateUrl="aa.html"加载另一个页面
		link:function(scope,ele,attra){}	//操作模板里的dom元素
			scope:一个对象
			ele:一个元素(数组形式),类似于jQuery选择器选择的元素节点
			attra:一个对象,包含各种属性
		
	##Day04  
	
			//controller：控制器名称  相当于全局，都可以调用
			//可以写方法，变量等，
		/*
			控制器和指令交互的三种方法
			@传递字符串
			=传递变量
			&传递方法
			*/
			app.directive('tabNav',function(){
				return{
				restrict:'E',
				templateUrl:'02tab.html',
				scope:{
					tabContent:'=' //传递变量
				}
				};
			});
		
		ajax有点：异步请求，节省资源
		ajax缺点:
			1.不会再浏览器里面留下历史记录
			2.没有办法添加收藏夹,没有办法将这个url发给别人
			3.ajax无法实现SEO,ajax对搜索引擎不友好
		这也是路由出现的主要原因
		·······························
		ngRoute路由
		顺序：先引入angular.js,再引入angular.route.js
		
		1.在模块中写ngRoute
		2.ng-view将路由的内容渲染到此处
		3.设置路由链接(注意，要加上#)
		4配置路由($routeProvider,路由的映射)
			.when('路由地址',{template:'路由的内容'})
		
		、、模板只有少量内容的情况
		var app = angular.module('myApp',['ngRoute']);
		app.config(['$routeProvider',function ($routeProvider) {
			$routeProvider.when('/',{
				template:'<h2 class="text-center">首页{{title}}</h2>',
				controller:function($scope){
					$scope.title='数据'
				}
			})
		}])
		、、模板内容过多需要引入外部页面，把内容放到另一个页面
		$routeProvider.when('/home',{//url
			templateUrl:'13home.html',//模板名称（地址）
			controller:function($scope){
				$scope.title='首页';
				$scope.content="我是首页数据";
			}
		})
		(5)默认跳转的页面
			$routeProvider.otherwise({redirectTo:'/home'});	
		
		#监视路由变化	
		app.run(function(){})是设置路由跳转前，跳转后，出错误的处理事件
		$rootScope.on是接收
			$rootScope是全局(核心是ng创建的),$scope是局部
			$location可以打到路由的路径
			$routeChangeSuccess路由跳转前触发
			$routeChangeSuccess路由跳转成功后触发
			$routeChangError路由跳转失败后触发
		
		$location参数作用
			$location.absUrl()//获取全部路径
			$location.hash()//主机名
			$location.port()//端口
			$location.url()//#号后面的值
		#路由参数
		$locations自定义参数,使用时需在控制器中传入参数$location
			$location.path('newList/100')
		
		app.run(function($rootScope,$location){
			
			$rootScope.$on('状态',function(event,toState,fromSate){
				//参数说明:event 是事件对象	toState 是url的必选参数
			});
		
		});
		
		##多视图路由
			多视图路由:
		将要引入的html页面的js单独抽离出来,写在单独的js文件中,再引入到页面中
		<script src="js/angular.js" type="text/javascript"></script>
		<script src="js/angular-route.js" text/javascript"></script>
		<script src="13controllers/user.js" text/javascript"></script>
		<script src="13controllers/article.js" text/javascript"></script>
		<link href="css/bootstrap.min.css" type="text/css" rel="stylesheet" />
		<script>
			//实际项目不这样写(多个依赖模块),而是把要依赖的控制器写在主控制器的下边,并且可以把控制器的名称当成函数名来使用,直接写在路由的controller:参数后面.
				eg:
					$routeProvider.when('/user',{
						templateUrl:'./13views/user.html',
						controller:userController
					})
					function userController($scope){}
					var app=angular.module('myApp',['ngRoute','userMod','articleMod']);
					app.config(function($routeProvider){
						$routeProvider.when('/user',{
							templateUrl:'./13views/user.html',
							controller:'userController'
						})
						$routeProvider.when('/article',{
							templateUrl:'./13views/article.html',
							controller:'articleController'
						})
						$routeProvider.when('/setting',{
							templateUrl:'13views/setting.html',
						})
					})
					
				</script>
				<body>
					<a href="#/article?type=sport">体育新闻</a>
					<a href="#/article?type=game">游戏新闻</a>
					<a href="#/article?type=news">热门新闻</a>
					<a href="#/user">用户中心</a>
					<a href="#/article">文章列表</a>
					<a href="#/setting">系统设置</a>
					<ng-view></ng-view>
				</body>
		
		##  angular-ui-route
			模块注入由ngRoute改为：ui.router
			链接有<a href="">xxx</a>改为：<a ui-sref="">xxx</a>不用#号，直接写名字
			渲染标签ng-view改为：ui-view
			参数
			$stateProvider设置路由
			$urlRouterProvider默认跳转地址
			
			##
			$routeParams.type获取子级菜单的参数type
			controller参数：$stateParams有什么用呢？
			$stateParams.id就是获取参数id的值
			$stateParams.name就是获取参数name的值
			$stateParams.userId就是获取userId的参数值
			路由的参数是/分开，不是问号？和&
			
			app.config(function($stateProvider,$urlRouterProvider){
			设置路由:
				$stateProvider.state('home',{
					url:'/home',	//让angular给a标签加上一个href
					template:'<div>{{title}}</div>',
					controller:function($scope){
							$scope.title='首页';
					},
				});
				$stateProvider.state('news ',{
					url:'/news',
					templateUrl:'news.html',
					controller:function($scope){
						$scope.title='新闻列表';
						$scope.content=[
							{title:'北京天气炎热',url:'http://www.qq.com'},
							{title:'北京工资高',url:'http://www.baidu.com'},
							{title:'北京房租贵',url:'http://www.sina.com'},
						];
					},
				});
		
			设置默认页面:
				$urlRouterProvider.otherwise('home');
		
##Angular-06

			延迟加载:
				resolve:function(aaa){	//参数实际就是promise
					var delay = aaa.defer();	//直到resolve执行完成才结束
					setTimeout(function(){
						delay.resolve();	//resolve执行
					},2000);
					return delay.promise;
				},
		
		$routeProvider.when('/xxx',{
			templateUrl:'xxx',
		});
			<script type="text/ng-template" id="xxx">
				<ul>
					<li>test测试文本</li>
				</ul>
			</script>
		
		路由中的templateUrl后面的参数先找id为'xxx'的script模板,找不到的话,就去找页面
			eg:
				templateUrl:'setting'
				
				<script type="text/ng-template" id="setting">
					<ul>
						<li>test测试文本</li>
					</ul>
				</script>
		
		
			当路由有多个依赖模块时,依赖的控制器要放在 主控制器的下边
	
		##服务
			创建服务的种类
			1.provideer(最大的服务，可以配置)
			2.factory
			3.service
			4.value
			provider两个参数
			自己起的服务名字，一般情况不要用$开头
			1.服务的名字
			2.该服务执行的方法
			
			指令，服务，控制器，都是通过，模块来创建的(声明的)
			1.provider 
		参数1:服务的名字(一般不要以$开头)
		参数2:服务执行的方法
			
			app.provider('my',function(){
				this.$get=function(){
					return {
						'number':function(a,b){
							return a+b;
						}
					};
				}
			})
			
			$scope.result=my['numb'](parseInt($scope.str_a),parseInt($scope.str_b));
	
	2.factory
		参数1:服务的名字(一般不要以$开头)
		参数2:服务执行的方法
			
			app.factory('my',function(){
				return {
					'numb':function(aa,bb){
						return parseInt(aa)+parseInt(bb);
					}
				};
			});
			
			$scope.result=my['numb']($scope.str_a,$scope.str_b);
	
	3.service
		参数1:服务的名字(一般不要以$开头)
		参数2:服务执行的方法
		
			app.service('my',function(){
				this.numb=function(a,b){
					return parseInt(a)+parseInt(b);
				}
			});	
			
			$scope.result=my['numb']($scope.str_a,$scope.str_b);

	4.value
		参数1:服务的名字(一般不要以$开头)
		参数2:服务执行的方法
		
			app.value('my',{
					numb:function(a,b){
						return parseInt(a)+parseInt(b);
					}
				});
				
			$scope.result=my.numb($scope.str_a,$scope.str_b);
			路由中,禁止a标签使用:javascript,https,ftp,mailto,tel,file...等跳转链接,可以使用如下方法解决:
				例如:
					$rootScope.navLeftUrl="javascript:history.go(-1)";
					
					var app=angular.module('myApp', ['ngRoute'])
						.config([
						'$compileProvider',
						function ($compileProvider) {	//相当于过滤
						$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|javascript|mailto|tel|file|sms):/);
						}
					]);
			
			在Angular的路由中,将请求到的字符串以html的格式显示出来的方法:
				$scope.content=$sce.trustAsHtml(str);
					$sce 是特定的参数,不可修改,参数写到controller控制器的函数中
				html页面中的写法:
					<div class="read-content" ng-bind-html="content">
					注意:一定要加上 ng-bind-html
					
					
			在Angular的ajax请求中,获得Audio和video的src路径的数据后,如果直接写在标签中,有时无法正常显示.
				解决办法是:
					使用控制器的$sce参数的trustAsResourceUrl方法将获得的数据转换
					eg:
						$scope.media_url = $sce.trustAsResourceUrl(imagePrefix+response.data.media_url);
			
			$location.url('/userMain')  登录成功跳转到用户中心
			
