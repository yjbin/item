##vue介绍、前端框架设计模式(mvc,mvvm,mvp,mv*)

			think:vue.js是什么？
				是一套构建用户界面的渐进式框架,(重量级)自底向上 增量开发的设计。核心库只关注视图层
				1.MVC,MVVM,MV*
			2.双向数据绑定 v-model
			3.常用指令 v-show v-if v-else v-model v-bind v-for v-on
			4.样式操作:class
			5.事件 stop prevent
				键盘事件
			6.事件交互(Ajax)
				this.$http.get()
					简写:this.$http({url,data}).then(res.data).error();
				this.$http.post()
					emlateJSON:true;
				this.$http.jsonp()
			7.过滤器
			8.数据监听
			9.组件
			10.路由
			
			mvc,事件,指令
		
			键盘事件,留言板,选项卡,显示/隐藏一个div
		
			Vue与Ajax,get,POST,jsonp,生命周期,v-text,v-html,计算属性
		
			自定义属性,过滤器,数据监听
			组件--全局组件,局部组件,动态组件,模板组件===路由--1级路由,2级路由,路由1.0版本和2.0版本
			
			Vue特性？
			Vue只是聚焦视图层，是一个构建数据驱动的Web界面的库。 Vue通过简单 API提供高效的数据绑定和灵活的组件系统
			轻量
			数据绑定
			指令
			插件化
			
			Vue核心是什么？
			组件化和数据驱动
			组件化: 扩展HTML元素，封装可重用的代码每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护。
			
		 think:vue能做什么？
		 	特点:
		 		灵活：
		 		易用：
		 		性能：虚拟DOM
 		
		其他的框架
		mvc
			model模型(后台数据) view视图(前台)		controller控制器(业务开发)
		mvvp
			controller改成了presenter
		mvvm
		 	model		view		ViewModel
		 	实现了双向绑定(Vue和Angular都是遵循了mvvm模式)
		 	
		Vue和Angular的区别是什么？
			Vue--简单好学
				new Vue({
					el:'#box',  //element的简写，选择器id,class,*,元素,
					//注意版本兼容:vue 2.0不支持body.html    vue1.0支持body、
					
					data:{//数据
						str:true,			//注意这里的布尔值不能加引号，加上引号就变成字符串了
						item:false,
						age:30,
						name:'张三',
						arr:[1,2,3],
						json:{name:'xsa',age:18
						}
					},
					//方法
					methods:{
						add:function(){
						},
					}
				})
				
		

		
	Angular---上手困难
		指令：ng-xxxx
		所有属性都是挂在$scope身上
		google来进行维护(github上关注度只有26000)，可见一斑
		angular的循环是：ng-repeat，
	共同点，都不兼容ie 6-7-8
	
	think:什么是指令？
			属性和指令的区别，指令是扩展了HTML标签，属性是原来HTML就有的

			扩展HTML标签的功能，属性
			V-XXX
			一片html代码配合上JSON，在new出来一个vue的实例
			个人来维护(但是Vue在github上的关注量56000左右)
			注意版本兼容:vue 2.0不支持body`html    vue1.0支持body
		
	##	vue常用指令
			think:v-model用在什么地方？( 双向数据绑定)一个改变另一个也改变，相互影响
			
				1.0(前提，在vue中有v-model)注意html中的value可以替换v-model
				2.0中不可以
				
				1.0select上可以绑定v-model   2.0不可以
				
			
				**用在表单：比如Input,select(双向数据库等)
				<input type="checkbox" v-model="true" />默认选中  false不选中
				{{checked?"选中":"不选"}}   {{这里装表达式，变量和其他数据类型，这里只能写三目表达式，不能有其他的if之类的}}
				
			#扩展:lazy相当与我们的change事件，失去焦点执行
				debounce就是延时执行，类似于setTimeout   debounce="2000"
				函数后面也可以加延时
				写法：
				@click="show | debounce:"2000" "
				使用number参数是通知v-model绑定的dom元素把用户输入值默认当成数字来处理
				使用options参数是用于渲染一个select项的列表v-bind:value="option.value

				
			think:v-if="true/false"		里面的东西如果为真就创建标签，否则消失
				  v-else和v-if是一组，二个条件执行其中一个。
				  实际开发中，我建议谨慎用v-if，因为在切换 v-if 块时，Vue.js 有一个局部编译/卸载过程， v-if 是惰性的，
				  如果为false，则什么也不做-不编译，不渲染。 当第一次条件为真时，才开始编译。它会消耗一定的电脑资源。通常用v-show比较合适。

				v-show="true/false"  （显示/隐藏）display:block/display:none
			
			v-html
			v-text
			{{{}}}相当与v-html不兼容2.0
			
			<ul>{{str}}</ul>
			<ul v-text="str"></ul>
			<ul v-html="str"></ul>
			<ul>{{{str}}}只兼容1.0，相当与v-html</ul>
			v-html和v-text和{{str}}作用相同可以解决大括号闪烁相当于innerHTML和innerText
			v-text 相当于原生js中的 innerText,相当于jQuery中的 text(),不带标签样式;
			v-html 相当于原生js中的 innerHTML,相当于jQuery中的 html(),带有标签样式;
			
			<style>
				[v-cloak]{
				display:none;
				}
			</style>
			v-cloak		防止闪烁, 比较大段落，配合在一起使用

			这样绑定了以后就可以访问vue实例中的data数据
			
			v-on
			v-bind:href/v-bind:src/v-bind:title 
			
			v-bind:width/:height/:title/:alt/:style
			
			***行内样式  width= 200 禁止带单位
				数据类型里的true和false都不能加引号变为字符串。
			  
			简写:href="" / :src="" /:title=""
					//这里的参数是data里的变量名
			v-bind:class="[a,b,c]"绑定多个类名时，里面的值不加引号，因为是读取别的对象里面的值
			里面的值加引号是字符串 
			
			也可以这样v-bind:class="[aa]"  这样出来的类名也都添加上的
			data:{  aa:"a b c d"
			}
			也可以是个对象   	<p :class="json">樱桃小丸子</p>
			json:{
				red:"red",
				blue:"blue",
				}
			
			如果想和普通的类名混合用  用这种
			:class="{red:false,blue:true}是true就添加这class名称，fasle就是不添加
			
			值的false和true可以写在行间或data里
			注意：如果是从data里获取的数据类型的类名不加引号，如果不是，加引号变为字符串
			
			:style跟class基本用法一样，只是里面的跟样式名字+属性   color:red
				<p :style="{color:'red'}">撒苦辣</p>   行内样式 ，没有真假
				注意有二个值，就要用[]括上相当于数组
				:style="[c,b]"
				
			v-bind:style="[a,b,c]"	a:{color:'red'},b:{background:'blue'},c:{margin:10px}
			  :style="{color:'red'}"
			  :style="json"		json:{color:'red'}
			  :style="[a]"		a:{color:'red',background:'blue'}

			
			
	##  循环、样式	
					重复数据？
		track-by='索引'	提高循环性能
		track-by='$index/uid'
		
		
		case:
			v-for	可以循环数组和JSON
			   
			注意，1).循环体不能在被选择器选中的元素上操作;
				  2).也不能在被操作的这个循环体(在哪个元素上循环的)之外访问    $index 
				
			注意：兼容问题
				1.0支持$index和$key,1.0最好用这个
					不能直接读取JSON,必须循环
				2.0不再支持$index和$key
					能直接读取JSON格式的数据
					
				v-for = "(a,b,c) in json"
				参数说明：
					a:json的值		 属性值
					b:json的名称 (相当于$key) 属性名
					c:json的编号(相当于$index)    位置下标
				1.0不认识传递三个参数的
				
				<li v-for="(item,index) in arr">编号：{{index}},值:{{item}}</li>
				注意2个参数时:
						2.0第一个参数是值，第二个参数是位置
						1.0第一个参数是位置，第二个参数是值
				但是1.0最好使用$index和$key来获取编号和键名
	 	注意:在1.0版本中,使用v-for="(index,item) in arr" 遍历数组时,先写下标,再是元素值
	 	           在2.0版本中,使用v-for="(item,index) in arr" 遍历数组时,先元素,再写下标,和1.0是相反的
	 	           参数index和item都有作用域的限制(只能在当前循环的元素内使用这两个变量)
				
	##	基础事件	
					
			this.message.$remove(mes)  删除当前的一条数据
			和所有的js事件都一样,只是把on 替换为@   @click  v-on:click
			@click/原生js有多少鼠标，键盘事件，vue就有多少鼠标，键盘事件
			所有的事件，方法(函数)放在   methods:{ }里
			 methods:{//所有的事件放在这里
				add:function(){
					//alert(this.arr.length);//在vue中获取值都要加上this
					this.arr.push('英国');
				}
			}   
			
			 在1.0中,重复给数组添加一个元素,它的下标会一直增加,而值不会增加(bug)
	 		 在2.0中,重复给数组添加一个元素,它的下标和值都会增加
		#case:vue中的this归属于new vue实例对象，如果有变量，最终属于这个变量
			简单的来说vue中的this就是指的外围包裹的容器，即el:"#box"选择器选中的容器	
			
			@click == v-on:click
			onchange 值改变了失去焦点后才执行
			oninput  值改变了就立刻执行
			
		##VUE事件对象	$event   creenX:鼠标位置相对于用户屏幕水平偏移量
			#事件中想要得到点击事件的参数，调用时必须传入  $event参数
			 
			传参时注意：$event参数位置必须和函数的参数一一对应
			@click="show(num,ev)"
				show:function(num,ev){
					var x = ev.clientX;
					var y = ev.clientY;
					alert('X轴坐标'+x+"Y轴坐标"+y)
				}
				
			 留言板思路：框架：bootstrap
				form表单、table布局、模态框
			 1.实现input表单输入框与后台数据的绑定,
			 2.设置默认显示的值  v-for 遍历数组里的对象输出到页面
			 	v-for="(item,index) in myData"
				{{index+1}}
				{{item.userName}}
				{{item.age}}
				{{item.sex}}
			 3.添加点击增加事件,点击添加，就把表单值push进数组,可以push一个对象
			 4,添加点击删除事件，最终是要添加到模态框的确定，取消
			 	删除一个：$index哪个点击的删除哪个，传递点击的位置，但是访问不到循环体中的$index通过数据里一个变量传递
				 删除全部：让数组清空
			 5.最后初始化数据，用ajax请求
			 
			#冒泡、默认行为 
			阻止事件冒泡   1). @click.stop     vue提供的
						 2).js兼容var e=(ev)?ev:window.event;
									if(window.event)
									{
										e.cancelBubble=true;//兼容ie
									}
									else
									{
										e.stopPropagation();
									}
			
				add($event)
			method:{
				add:function(ev){
				ev.client
				}
			}
		
			#默认行为
			阻止默认行为
			a)ev.preventDefault()原生js
		
			b)@contextmenu.prevent推荐，vue提供的
		
		##VUE键盘事件	
			#键盘事件
			@keydown.13 ="回车"   @keydown.enter ="回车"		都是回车事件
			@keydown.enter		回车
			@keydown.up		上
			@keydown.down		下
			@keydown.left		左（不兼容2.0）
			@keydown.right		右（不兼容2.0）
			
		##VUE中的ajax数据交互	需要用到差件vue-resource.js
			case:VUE读取百度数据，读取360数据
			
			status   500以上都是服务器问题			400-500  都是前端的问题
			需要引入插件   vue.resource.js
			
			'03.json?='+new Date().getTime()
			//加上时间，解决缓存问题，每次请求都会变,也可以是个随机数写法左边字符串   注意这里的这个加号		
			
			methods:{
				getMes:{										请求成功函数
					1.)	this.$http.get/('url',{id:18,list:100}).then(function(result){
							alert(result.data)
							**请求出来的数据都得加 .data
							
						},function(){		请求失败函数
							alert('网络错误,请稍后再试')
					2.）	默认是get
					this.$http({
						url:'URL',
						data:{  //参数
							act:'add',		//这里注意用字符串
							content:this.content  
						}
					}).success(function(res){dasds}).error(function(){打算})
											//这里不确定用error还是catch
							
							
					}
				}
			}
			get传参数，在url后面跟上{id:18,list:100}
			
			post
			methods:{
				getMes:{	这里的改成post						这个请求头不可缺少
					this.$http.post('接口地址',{id:18,list:100},{emulateJSON:true}
					).then(function(result){
						alert(result.data)
						**请求出来的数据都得加 .data
					},function(){
						alert('网络错误,请稍后再试')
					}
				}
			}
			
			jsonp:
				getData:function(){
						//post请求这里改成post
					this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
									这里的三个花括号是字符串拼接起来的
						wd:this.str,//参数
					},{		
						jsonp:'cb',//	callback参数，百度cb  360  callback:'JSON_CALLBACK'
					}).then(function (result) {
						//	alert(result.data.s); 	
							//这里的s就是存放的数组
							this.arr = result.data.s;
						},function(res){
							alert('网络错误,请稍后再试'+res.status); //状态码
						}
					)
				}
		
		##VUE的生存周期
					***created:function(){		alert('Vue实例已经创建');	},	//Vue实例已经创建
						    //兼容2.0和1.0，其他只兼容1.0
					beforeCreate:function(){	console.log('编译之前2.0'+this.$el);},
					
					compiled:function(){alert('编译之后1.01');},
					
						
					beforeCompile:function () {alert('编译之前1.0');}	
							//el的选择器已经获取到元素而且在这个{{str}}调用之前操作
							
					ready:function(){	alert('内容插入到页面中1.0');},
					
					
					beforeDestroy:function(){	alert('销毁之前1.0');},
					
					
					destroyed:function(){alert('销毁之后1.0');},
						
					
			        /*点击页面销毁vue对象*/
			        document.onclick=function(){
			            vm.$destroy();
			        };

					beforeMount:function(){
						console.log('挂载之前'+this.$el+this.str);
					},
					mounted:function(){
						console.log('挂载结束'+this.$el+this.str);
					},
					beforeUpdate:function(){
						console.log('更新之前'+this.$el+this.str);
					},
					update:function(){
						console.log('更新之后'+this.$el+this.str);
					}
		##计算属性  如果需要多于一个表达式的逻辑，应
					当使用**计算属性**。

			和data平级
			data:{
						numa:18,
			},
			computed:{	这里要把值以return形式返出去
						numb:function(){//默认为get
							return this.numa+1;//可以写业务逻辑，比如循环判断
						}
						
			computed:{
				b:{	//这看起来是个函数，其实是一个属性，里面可以写业务逻辑
					get:function(){//获取
						return this.a+8;
					},
					set:function(str){//设置传递参数
						this.a=str;
					}
				}
			}
			vue实例.b=100;		//这里的值传递给str ，相当于调用	

		##VUE自定义指令 
			语法：
			Vue.directive('指令名称',function(){  代码块
				this.$el.style.color="red"
			})
			2.0自定义指令	inserted(参数)		
			Vue.directive('test',{
					//如果需要接收一个对象，这里要把对象传递进来			
				inserted:function (ele,json) {	//第一个参数代表this.el当前元素，第二个参数就是传递的参数对象
					//***2.0取json值，要加上.value
					ele.style.fontSize=json.value.b;
					ele.style.background=json.value.a;
				}
			})
			
		##自定义标签
			<aabb></aabb>
			Vue.elementDirective('aabb',{
				bind:function () {
					//这里注意el不用$el
					this.el.style.fontSize="50px";
					this.el.style.background="blue";
				}
			})
			
		自定义键盘指令(不支持2.0版本)
		Vue.directive('on').keyCodes.名字 = 键码;
		eg:
			<input type="text" placeholder="按下ctrl键" @keydown.ctrl="show()" />
			Vue.directive('on').keyCodes.ctrl=17;
			
			methods:{
				show(){alert('ctrl键被按下')};
			}
			
		##VUE实例方法，
			vm.$el.style.background='red';
			
		##手动挂载
			case:vue中的el实际就是html的一个标签
				给el加class样式，就相当于html标签价样式
				除了el选择器，还可以用手动挂载 .$mount('标签')
				
			//	1.)拿变量挂载
				mvvm.$mount('.ball');
			//  2.）手动挂载，和上面实现的功能是一样的	
				var mvvm = new Vue({
					
					data:{
						str:"桃花一朵朵",
					},
				}).$mount('.ball')
			//  3.)挂载模板  template:"#box"		
			
		##VUE自定义属性			自定义属性  options $options.show().方法/变量
		
		自定义的函数,变量不用写在methods中和data中;
			前提：肯定是在一个vue实例中自定义的属性，所以只有这个实例可以用
			<div id="#box>
				<p @click="$options.show()"></p>
			</div>
			case:var vm = new Vue({
					data:{
						str:"前端攻城狮",
					},
					//自定义的变量
					aaa:'cccc',
					abc:'sss',
					//自定义的方法
					show(){
						alert('河东狮子吼')
					}
				}).$mount('#box')
				//可以直接调用自定义的变量    方法    变量.$options.方法/属性
				console.log(vm.$options.abc+"\n"+vm.$options.aaa);
				//可以直接调用自定义的方法调用的时候也要加上$options里。
				vm.$options.show();	
				
		##VUE的过滤器  1.0   多个过滤器用|管道符隔开
			1)参数用空格隔开
			{{str_2|uppercase}}			<!--转换成大写字母-->
				
			{{str_3|lowercase}}			<!--转换成小写字母-->
		
			{{str_3|lowercase|capitalize}}	<!--先转换成小写字母，首字母变成大写字母-->
			2)		多个过滤器用|隔开  先···再···
			
			{{str_4|currency}}		<!--默认是美元-->
			
			{{str_4|currency '￥'}}		<!--加参数，用空格分开-->
			
			<ul>
				<li v-for="item in json|orderBy "属性名" 1">{{item}}</li>
			</ul>
			orderBy  小于0 倒序   大于0是正序		(用在v-for)
			orderBy 两个参数
				1.string,需要搜索的字符串
				2.排序
				
			3)limitBly
				1个参数 		 读几个
				2个参数    读几个，从哪开始		可以为负数
			4)filterBy ‘过滤的关键词’
				
			  filterBy 'a'	过滤出带a的字符串
			  参数为位置可以是个变量，存放在data中  v-model双向绑定
			 
			 实例：下拉搜索		
			 思路：和表单实现双向绑定v-model="str",这样数组每次过滤出来的都是双向绑定的str
			 	<div id="box">
					<input type="text" v-model="str"/>
					<ul>包含str的过滤出来：
													<!--这里的str是个变量-->被双向绑定了
													<!--过滤器规定这样写可以访问到Vue实例里的变量-->
						<li v-for="item in arr|filterBy str">
							{{item}}
						</li>								
					</ul>			
				</div>
			补充：时间戳
			Date.now()
			new Date().getTime()
			
		##VUE自定义过滤器	全局和局部的
					强大之处，允许用户自定义方法
			自定义过滤器格式    过滤器名字abd  过滤器对事件操作的方法
			
		全局：	Vue.filter('add',function (a){ 业务逻辑}
				第一个参数是过滤的内容  这里是num
				第二个参数开始，是我们自己定义的参数
				至少要接收一个参数(要过滤的内容),可以有多个参数，参数可以是一个或多个变量
			
			<div id="box">
			<!--这里的num就相当于调用函数传递的第一个参数  ，20才是第二个参数-->
				{{num|abc 50}}
			</div>
			
			var vm = new Vue({
				data:{
					num:10
				},
				//自定义局部过滤器
				filters:{//要加上s，因为它里面可以写多个方法
					//写在这里的都是局部的，只有这个box可以用
					abc:function (a,b) {	
					return a>b?'值大于了a为'+a:"值不大于50b为"+b;
					}
				}
			}).$mount('#box')
			
			获取时间戳

			Date.now(),//获取时间戳
			new Date().getTime()//默认或去时间戳 从1970年开始的秒数
			
		###数据监听	一组数据发生改变，另一组就跟着改变
			两个参数
			$watch('监听的名字',function(){干什么},{deep:true})
			遇到Josn监视不成功后面就得跟  deep:true深度监视
			
			
		##vue动画(过渡)  transition="fade"
			C3的思想
			动画的本质走的是css3的思路
			transition,animation,
			没什么作用。
		
		##组件	组件里的data,methods和vue里的data,methods不互通
			组件是自定义元素，组件可以扩展 HTML 元素，在有些情况下，组件也可以是原生 HTML 元素的形式
			
			（给予）extend(组件{
				template //模板
			})
			
			#全局组件
			声明组件名称		调用组件
			<zhangsan></zhangsan>
			var abc = Vue.extend({
				//模板
				data(){
					return num:"我是文本"
				//这里组件规定数据只能以函数的形式返回出去
				},
				template:"<p>我是普通文本</p>"
				template:"<p>{{num}}</p>"
			})
						//id		组件名称
			Vue.component('zhangsan',abc) //component组合，调用
			
			要确保在初始化根实例 之前 注册了组件：组件必须放在vue实例中
			new Vue({
				el:"#box",
				data:{
					str:'内容信息',
				}
			})
			
			#全局组件的另一种写法
			//另一种组件的写法 不定义，直接写，组件没有名字，页面输出较少的情况下用
			 Vue.component('wangwu',{
			 	template:"<p>我是组件的另一种写法</p>"
			 });
			 
			#全局组件局部调用  <lisi></lisi>
			components:{"lisi":abc}
			//注意区别和全局组件不一样的地方是这里是以对象的形式写 :
			
			#局部组件其实就是在内部调用
			components:{
				"lisi":{//调用组件
					data:function () {//这里的data是以一个函数的形式return出去对象
						return {num:"张三"}
					},
					methods:{//事件都放在此处,和弦的methods没有关系
						show(){
							this.num="李四"
						}
					},
					//模板//模板和其他都是平级的关系用逗号隔开,注意字符串拼接""里不能有""
					template:"<h2 @click='show'>{{num}}</h2>"
				}
			},//和methods是平级关系 
			
		##动态组件	<component :is="组件名称"></component>
				一个按钮点击是改变item的值为其他组件的名称
				:is="item"（默认显示的组件）
				
				item:'第二个组件'//默认显示那个组件
				components:{
					'第一个组件名':{
						template:'组件的内容'
					},
					'第二个组件':{
						template:'组件内容'
					},
					'第三个组件':{
						template:'组件的内容'
					},
					'第四个组件':{
						template:'组件内容'
					}
				}
						
		##组件模板
				有时候我们的内容多了。都放在组件中是不行的。要分离出来，那么怎么分离呢，有二种方法，配合模板:
				两种写法：
				<接收数据的组件名></接收数据的组件名>
				1.<script type="text/x-template" id="aa"><script>
				components:{
					'接收数据的组件名称':{
						data
						事件
						template:'#aa'	发送数据的名称
					}
				}
				2.<template id="aa">
				components:{
					'接收数据的组件名称abcd':{
						data:function{
						},
						methods:{
						},
						事件
						template:'#aa'	发送数据的名称//挂载的id
					}
				}
				</template>
				。。。。。。。。。。。。。。。。。。。。。。。。。。。
			slot
			
			原来组件有值的情况
			slot上边的数据，会自动插入到组件的内容前面
			slot下边的数据，会自动插入到组件的内容后面
			原来标签有值，不读取slot的值，否则读取slot的值
			
			原来没有内容
			slot前面的值，和slot本身的值，和后面的值，一起插入到组件标签中	
		
		
		###路由
			
			2.0的路由布局
			<router-link to="/home">主页</router-link>		
			<router-view></router-view>
			//组件
			var Home={
			    template:'<h3>我是主页</h3>'
			};
			var News={
			    template:'<h3>我是新闻</h3>'
			};
			
					var News={
							//ES6的写法` `中间加数据tab上面的那个键
							template:`<div>
							<h2>新闻列表</h2>
							<ul>
								<li>
									<router-link to="/news/newsList">
										某一条新闻数据
									</router-link>
								</li>
							</ul>
							//将路由的内容渲染到这个标签内
							<router-view></router-view>
							</div>`
						};
		
			//1.0配置路由   /后不写是显示的默认页，写上/home 需要点击才会触发
			
			实现了同页面的跳转，最骚的是，提供不同的url显示不同页面内容，优势：所有的子项目工程可以在一个页面上实现 
			eg:同一个页面传递的参数不同，实现不同的布局，但是不用重复发送请求，只在本页面跳转
			#1.0路由
			
			先引入vue.js   在引入vue-router.js
			1.准备一个根的组件
			2.组件准备
			3.准备路由
			4.关联
			5.启动路由
			
			v-link(打开页面的路径，替代了原来的href)
			path代替了原来的href
			
			渲染到哪个地方用<router-view></router-view>
			router-view固定写法  将路由的内容渲染到这个标签内
			启动路由//参数2个，1.根组件名称，2.渲染到那个元素中
			start('根组件名称','渲染到那个元素中（选择器）')
			
			#默认显示那个页面
			redirect
			
			//1.准备组件
			var Home = {
				template:'<p>这是首页的数据显示</p>',
			};
			var News = {
				template:'<p>这是新闻的数据内容</p>',
			};
			//2.配置路由
			const routes=[
			    {path:'/home', component:Home},
			    {path:'/news', component:News},
			   	 之前  router.rediect  废弃了
			    {path:'*', redirect:'/home'}  默认跳转地址
			    //配置路由多层嵌套  
						const routes=[
						    {path:'/home', component:Home},
						    {
						        path:'/user',
						        component:User,
						        children:[  //核心
						            {path:'username', component:UserDetail}
						        ]
						    },
						    {path:'*', redirect:'/home'}  //404
						];
			];
			
			
					
			//3.生成路由
			const router=new VueRouter({
			    routes	//配置路由存的变量
			});
			//4.挂载路由
			new Vue({
			    router,//生成路由实例存的变量
			    el:'#box'
			});
				
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
		
			case:搜索引擎规定一般不要超过3层www.baidu.com?a/b/c
		
		数据交互（项目一个小型微博留言PHP）
		最后是项目APP读取后台PHP。有登录、收藏、音乐、视频、文章等等，最后是阶段考试
		
		作业
		
		路由：首页，关于我们，产品展示，公司新闻，联系我们
		
		首页：图文混排
		关于我们：图文混排
		产品展示。产品列表
		新闻，就是新闻列表加空的链接
	
		2.
		自定义组件至少写两个