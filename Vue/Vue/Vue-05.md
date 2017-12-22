##Vue-Day05

###1.动画
	基于CSS3的transition和animation,没多大区别;
	使用时,最好使用css3的动画.

###2.组件
	用到的单词:
		extend	授予,授权
		template	模板
		component	组合
	组件的声明和调用要放在实例化Vue对象之前.
	
	方式1:声明+调用
		声明组件:
			var 名字 = Vue.extend({
				template:"html代码",
			});
		调用组件:
			Vue.component('自定义标签',组件名);
		eg:
			<abcd></abcd>
			var myZujian = Vue.extend(
				template:"<p>组件先声明,后调用</p>",
			);
			Vue.component('abcd',myZujian);
			
	方式2:直接调用
		Vue.component(自定义标签,{模板});
		eg:
			Vue.component('what',{
				template:"<p>这是直接调用,不用声明</p>",
			});	
			
	注意:自定义组件的函数,属性,变量和Vue的函数,属性,变量不能相互访问
	
####2.1全局组件:	
	//自定义的标签
	<what></what>
	//自定义的组件
	var myWhat = Vue.extend({
		//一个函数,名字必须是data,必须要有返回值,且返回值是一个对象(键值对形式)
		data:function(){
			return {
				str:'该写点什么呢?',
			};
		},
		//自定义全局组件的方法,函数写在methods中,这个methods是组件的方法,与Vue实例中的methods无关
		methods:{
			show:function(){
				alert('自定义全局组件的函数');
			}
		},
		//组件的模板,会代替<what></what>显示在页面中
		template:"<p @click='show()'>{{str}}</p>"
	});
	
####2.2局部组件	
	
	方式1:使用组件名
		在Vue的实例中加上 components:{'自定义标签':组件名}
		eg:
			new Vue({
				el:'.test',
				data:{},
				methods:{},
				components:{
					//自定义标签:组件名
					'what':myWhat,
				},
			});
	
	方式2:不使用组件名
		在Vue的实例中加上components:{'自定义标签':{组件内容}}
		eg:
			new Vue({
				el:'.test',
				data:{},
				methods:{},
				//自定义的局部组件(组件里的数据和方法与外界没有关系),记得加 s
				components:{
					//自定义标签:{组件内容}
					'what':{
						//组件里的数据写在这里,是一个名为data的函数(名不能换),返回一个对象,真正的数据写在函数返回的对象中.
						data:function(){
							return {
								//真正的数据
								str:'局部组件的另外写法',
							};
						},
						//组件里的方法写在这里
						methods:{
							show:function(){
								this.str = '局部组件的str改变了';
							},
						},
						//组件的内容
						template:"<p @click='show()'>{{str}}</p>",
					},
				},
			});
	
####2.3组件模板

	1.使用 script	type="text/x-template" +id名
		//自定义标签,用于接收模板的数据,并呈现在页面中
		<what></what>
		//使用script标签,要将type改成" text/x-template" ,再加上id名,标签里面写的是内容
		<script type="text/x-template" id="myTemplate">
			//组件想要呈现的内容
			<ul>
				<li>{{str}}</li>
				<li @click="change()">11223</li>
			</ul>
		</script>
		//正常的script标签,写Vue的代码
		<script type="text/javascript">
			var mvvm = new Vue({
				//组件模板
				components:{
					//自定义标签,要接收组件数据的标签
					'what':{
						//data函数,返回一个对象,对象里面是组件要用到的参数和数据
						data:function(){
							return {
								str:'组件模板的使用',
							};
						},
						//组件要用的方法
						methods:{
							change:function(){
								this.str = '组件模板的事件';
							},
						},
						//组件的模板,通过id找到数据存放的位置(是html中自定义的标签)
						template:'#myTemplate',
					},
				},
			});
		</script>
		
	2.使用<template></template>标签 + id
	
		<abcde></abcde>
		
		//template标签写在Vue挂载的标签的外边
		<template id="myTemplate">
			<ul>
				<li @click="show()">{{str}}</li>
				<li v-for=" item in arr">item</li>
			</ul>
		</template>
		<script type="text/javascript">
			var mvvm = new Vue({
				el:".test",
				components:{
					"abcde":{
						data:function(){
							return{
								str:'组件模板使用template标签的写法',
								arr:['你','我','他'],
							};
						},
						methods:{
							show:function(){
								this.str='template标签的函数';
							},
						},
						template:"#myTemplate",
					},
				},
			});
		</script>

####2.4动态组件
	
	通过点击按钮,改变Vue实例中的item的值为其他组件的名称,实现多个组件切换的效果.
	
	<div class='test'>
		<button @click="item='第二个组件名'">第二个</button>
		<button @click="item='第三个组件名'">第三个</button>
		<!--component标签是关键字,  :is='item' 是默认显示的组件名-->
		<component :is="item"></component>		
	</div>
	
	<script type="text/javascript">
		new Vue=({
			el:'.test',
			data:{
				item:'第一个组件名',	//默认显示的组件
			},
			components:{
				'第一个组件名':{
					template:'第一个组件的内容',
				},
				'第二个组件名':{
					template:'第二个组件的内容',
				},
				'第三个组件名':{
					template:'第三个组件的内容',
				},
			},
		});
	</script>
	
	
	原来标签的内容不为空,slot的内容不渲染,
	slot 前边的数据会自动插入到原来标签内容的前面
	slot 后边的数据会自动插入到原来标签内容的后面
	原来标签的内容为空,会将slot的内容渲染出来
	
###3.路由---实现同页面的跳转(同页面显示的内容不同)

	v-resource	交互(Ajax)
	v-router	路由
	
	根据不同的url地址,显示不同的数据
	
####1.0版本的路由:
	
	html内容:
		<div class="div1">
			<li>
				<!-- v-link={path:'url'}	打开页面的路径,取代了href-->
				<a v-link={path:"/home"}>首页</a>
				<a v-link={path:"/news"}>新闻</a>
				<a v-link={path:"/user"}>用户</a>
			</li>
			<div>
				<!--将路由的内容渲染到这个标签里-->
				<router-view></router-view>
			</div>
		</div>
	
	js步骤:
		1.准备根的组件		
			var myApp = Vue.extend();
		2.准备各个组件			
			var Home = Vue.extend({
				template:'<p>这是主页的数据</p>',
			});
			var News = Vue.extend({
				template:'<p>这是新闻的内容</p>',
			});
			var User = Vue.extend({
				template:'<p>这是用户的信息</p>',
			});
		3.准备路由			
			var myRouter = new VueRouter();
		4.关联			
			myRouter.map({				//map是关联的关键字
				'home':{				//a标签 的地址
					component:Home,		//关联的组件名称 
				},
				'news':{
					component:News,
				},
				'user':{
					component:User,
				},
			});
		5.启动路由				//定义的路由.start(根组件名,挂载的元素)
			myRouter.start(myApp,'.div1');
		6.默认显示哪个页面
			myRouter.redirect({
				'/':'/home',
			});

	v-link={path:'url'}	打开页面的路径,取代了href
	router-view		渲染到哪个地方
	将路由的内容渲染到这个标签里
	<router-view></router-view>
	设置子路由:subRoutes:{},
		eg:设置user下的子路由
			'user':{//地址
				//数据关联
				component:User,subRoutes:{//设置子路由
					'set':{//设置的组件
						component:{
							//设置组件要显示的模板内容
							template:"<p>你想设置什么,这里没有啊!!!</p>",
						},
					},
					'ext':{//退出组件
						component:{
							//退出组件要显示的模板内容
							template:"<p>退出成功,你不要登录了?</p>",
						},
					},
				},
			},

	补充:
	<!--html中:获取属性,这里指的是id-->
	{{$route.params|json}}
	
	<!--在html代码中-->
		<template id="detail">
			<h3>首页信息</h3>
			<ul>
				<!--获取属性,这里获取的是id-->
				{{$route.params|json}}
			</ul>
		</template>
		<!--新闻列表的模板-->
		<template id="newsList">
			<h2>新闻列表</h2>
			<ul>
				<li>今天是2017年6月16日</li>
				<li>今天是2017年6月16日</li>
				<li>今天是2017年6月16日</li>
				<li><a v-link="{path:'/news/detail/01'}">新闻内容01</a></li>
				<li><a v-link="{path:'/news/detail/02'}">新闻内容02</a></li>
				<!--其中01和02可以随意写-->
			</ul>
			<!--子路由渲染的位置-->
			<router-view></router-view>
		</template>
	
	//js代码中
	
		var News = Vue.extend({//新闻列表
			template:"#newsList",
		});
		var detail = Vue.extend({//详情
			template:"#detail",
		});
		
		
		'new':{
			component:news,
			subRoutes:{
				'/detail/:id':{		// :id是获取id的值(参数):class是获取class的值
					component:detail,
				},
			},
		},
		
####2.0版本的路由:
	一级路由:
	
		html代码:
			<div id="myRouter">
				<!--设置路由-->
				<ul>
					<router-link to="/home">首页</router-link>
					<router-link to="/news">新闻</router-link>
				</ul>
				<!--路由内容显示的位置-->
				<div>
					<router-view></router-view>
				</div>
			</div>
	
		js代码:
		
			//1.准备组件
			var Home = {
				template:'<p>这是首页的数据显示</p>',
			};
			var News = {
				template:'<p>这是新闻的数据内容</p>',
			};
			//2.配置路由
			const routes = [
				{path:'/home',component:Home},//首页
				{path:'/news',component:News},//新闻
				{path:'*',redirect:'/home'},//默认显示的页面
			];
			//3.生成路由
			const router = new VueRouter({
				routes
			});
			//4.挂载路由
			new Vue({
				router,
				el:"#myRouter",
			});

	二级路由:(加了子路由)
		
		html代码:
			<div id="myRouter">
				<!--设置路由-->
				<ul>
					<router-link to="/home">首页</router-link>
					<router-link to="/news">新闻</router-link>
				</ul>
				<!--路由内容显示的位置-->
				<div>
					<router-view></router-view>
				</div>
			</div>
			
		js代码:
			//1.准备组件
			var Home = {
				template:'<p>这是首页的数据显示</p>',
			};
			//二级路由
			var News = {//``是ES6的语法,用来连接代码
				template:`<div>
					<h2>主要内容</h2>
					<ul>
						<li>
							<router-link to="/news/newsList">某一条新闻数据</router-link>
						</li>
					</ul>
					<div>
						<router-view></router-view>
					</div>
				</div>`,
			};
			var NewsList = {
				template:'<p>新闻的主要内容</p>'
			};
			//2.配置路由
			const routes = [
				{path:'/home',component:Home},//首页
				{path:'/news',component:News,children:[
					{path:'/newsList',component:NewsList}
				]},//新闻
				{path:'*',redirect:'/home'},//默认显示的页面
			];
			//3.生成路由
			const router = new VueRouter({
				routes:routes,
			});
			//4.挂载路由
			new Vue({
				router:router,
				el:"#myRouter",
			});
