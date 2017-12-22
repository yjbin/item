##Vue-Day04

###1.Vue实例方法

	Vue中的 el 实际上就是 html中的标签 ,给el添加样式,实际上就相当于给html的标签添加样式
	Vue中除了 el 的挂载,还有就是 .$mount('.div');
	
###2.自定义属性 $options

	自定义的函数,变量不用写在methods中和data中;
	
	show:function(){}不用写在methods中,
	abc:"随便写的文字",
	@click="$options.show()"
	console.log(mvvm.$options.abc);

###3.过滤器(1.0版本)

	(1.){{要过滤的东西|过滤器的名称}}
	eg:
		{{str|uppercase}}	转成大写字母
		{{str|lowercase}}	转成小写字母
		{{str|capitalize}}	首字母大写
		{{str|currency}}	默认是美元符号
		{{str|currency '￥'}} 改成人民币符号
	
	(2.)排序:一般用在v-for循环中
		<li v-for="item in json|orderBy 'name' -1">item.name</li>	按照姓名倒序排列
		<li v-for="item in json|orderBy 'age' 1">item.age</li>		按照年龄正序排列
			orderBy str num		num大于等于0,正序排列(从小到大);小于0,逆序排列(从大到小)
	
	(3.)延迟:debounce 是延时执行,相当于setTimeout
		<input type="text" v-model='str' debounce="2000"/>	  //修改后两秒其他的绑定数据才发生改变
		文本框:<input type="text" @click="showM|debounce 2000"/>
		
		methods:{
			showM:function(){
				alert('延迟2秒弹出消息...');
			}
		}
	(4.)限制:limitBy	限制多少个
			limitBy howmany	---	要多少个
				limitBy 3	---要3个
				<li v-for="item in arr|limitBy 3">item</li>
			limitBy howmany where ---要几个  从哪开始
				limitBy 3 4	 ---要3个,从下标为4的开始
				<li v-for="item in arr|limitBy 3 arr.length-3">item</li>	//取数组的后3个
				limitBy 3 -4	 ---要3个,从最后一个开始,取4个
	
	多个过滤器用竖杠隔开(|),参数用空格( )隔开
		{{str|lowercase|capitalize}}	先转成小写字母,再把首字母变成大写

	(5.)filterBy过滤器
		filterBy '关键词'	 ---把包含'关键词'的的找出来
			<li v-for="item in arr|filterBy 'a'">item</li>	//把包含'a'的找出来

	(6.)自定义过滤器
		Vue.filter('名称',function(要过滤的内容,业务逻辑的参数){业务逻辑});
			自定义的过滤器必须要接收一个参数,这个参数是--要过滤的内容
		//3个参数分别是:自定义过滤器的名称,自定义业务逻辑的参数*2
		<li>{{num|str 2 5}}</li>
		//全局的过滤器,并不是写在Vue的实例中
			'str'是过滤器的名称;
			function(){}是处理的业务逻辑,
				其中,num是页面中要过滤的内容;
					b和c是处理业务逻辑中要用到的参数;
		Vue.filter('str',function(num,b,c){
			return num>50?num/b:str/c;
		});
		
	(7.)时间戳
		Date.now()
		new Date().getTime()
	
###4.自定义指令
	1.0版本
		无参:Vue.directive('名称',function(){});
			
			Vue.directive('test1.0',function(){
				this.el.style.color='red';
			});
			<li v-test1.0>这是测试文字</li>
		有参:Vue.directive('名称 ',function(参数){});
		
			<li v-test1.1="{color:'red',size:'30px'}">这还是测试文字</li>
			Vue.directive('test1.1',function(abc){
				this.el.style.color = abc.color;
				this.el.style.fontSize = abc.size;
			});
	2.0版本
		无参数:Vue.directive('名称',{
				inserted:function(ele){
					ele.属性='属性值';
				}
			})
		
			<li v-test2.0>这是测试文字.</li>
			Vue.directive('test2.0',{
				inserted:function(ele){
					ele.style.color='red';
				}
			});
		有参数:Vue.directive('名称',{
				inserted:function(ele,参数){
					ele.属性 = 参数.value.键名;
				}
			})
		
			<li v-test2.1="{color:'red',size:'30px'}">这是测试的文字</li>
			Vue.directive('test2.1',{
				inserted:function(ele,abc){
					ele.style.color=abc.value.color;
					ele.style.fontSize=abc.value.size;
				}
			});

	自定义键盘指令(不支持2.0版本)
	Vue.directive('on').keyCodes.名字 = 键码;
	eg:
		<input type="text" placeholder="按下ctrl键" @keydown.ctrl="show()" />
		Vue.directive('on').keyCodes.ctrl=17;
		
		methods:{
			show(){alert('ctrl键被按下')};
		}
		
	自定义元素指令
	<aa-bb>测试文字</aa-bb>
	
	Vue.elementDirective('aa-bb',{
		bind:function(){
			this.el.style.color = 'red';
			this.el.style.backgroundColor = 'blue';
		}
	});

###5数据监听

	mvvm.$watch('监听的名字',要做什么);
	eg:
		data:{str:'原来的数据',wat:'监视那个数据'}
		
		mvvm.$watch('str',function(){
			mvvm.wat = '他变了,我也要变!';
			alert('我们都变了...');
		});
		document.onclick=function(){
			mvvm.str = '原来的数据改变了!';
		};
	深度监听,加上{deep:true},就可以监视json数据
	mvvm.$watch('要监听的名字',处理数据,{deep:true});
	eg:
		data:{originData:{name:'刘德华',age:30},wat:'看着他,别让他跑了'}
		
		mvvm.$watch('originData',function(){
			mvvm.wat = '他跑了,我叫你';
			alert('他跑了,我去追他...');
		},{deep:true})
		



