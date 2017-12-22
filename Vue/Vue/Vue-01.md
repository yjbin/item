##Vue(读音view)
	
	mvc:	前后台数据分离
		model  			模型(数据) 
		view 			视图
		controller		控制器
		
		MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范，用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。MVC被独特的发展起来用于映射传统的输入、处理和输出功能在一个逻辑的图形化用户界面的结构中。

	mvvp:
		model
		view
		presenter	改变了数据流的方向
	
	mvvm:	实现数据的双向绑定(不刷新页面实现数据的更新)
		model
		view
		viewModel	
		
		MVVM是Model-View-ViewModel的简写。
		MVVM（Model-View-ViewModel）框架的由来便是MVP（Model-View-Presenter）,MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大优点:1. 低耦合。2. 可重用性。3. 独立开发。4. 可测试
		
	Vue和Angular都是遵循mvvm模式.
	
	Vue和Angular的区别:
		Vue---简单,好学;指令是v-xxx;
			一片html代码,配合json,再new出来一个Vue的实例
			后台由个人来进行维护
		Angular---相对上手困难,指令是ng-xxx;
				所有的属性都挂在$scope上
				后台由Google来进行维护
	都不兼容IE6/7/8		
	
###Vue的特性和核心是什么？

	特点：Vue.js是数据驱动的，无需手动操作DOM。
		MVVM模式（数据变量（model）发生改变 视图（view）也改变， 视图（view）改变，数据变量（model）也发生改变）
		组件化，指令系统，路由
	核心：组件化和数据驱动，组件化: 扩展HTML元素，封装可重用的代码每个组件对应一个工程目录，组件所需要的各种资源在这个目录下就近维护。
	
	
------------------------------------------------

###demo
	<div id='box'></div>
	<button @click="add()">添加</button>
	

	new Vue({
		el:'#box',
		data:{		
			abc:'欢迎光临,Vue!',
			arr:['中国','美国','加拿大','呵呵'],
			jsonObj:{a:'美国',b:'中国',c:'加拿大',d:'呵呵'},
			num:18,
			bool:true
		},
	})
	
	
###Vue1.0与2.0的区别:
	 * el选择器:2.0版本不支持body,html等大标签
	 * data数据:在2.0版本中,数组,json数据显示是带括号的;
	 * 		  1.0版本没有括号,不能直接显示json数据,必须通过循环
	 * 循环遍历数组和json数据:
	 * 	循环不要加在el选择器上,要写在选择器的子元素上
	 * 	使用 v-for="item in arr/json"{{item}}
	 * 在1.0版本中,可以使用 $index 和 $key 获取json数据的编号和键名
	 * 在2.0中,不支持$index和$key,那该如何读取json的键名,编号?
	 * 使用:
	 *	 for(a,b,c in json)
	 * 		a:是json的键值
	 * 		b:是json的键名
	 * 		c:是json的编号
	 * eg:<li v-for="(a,b,c) in json">编号:{{c}},键名:{{b}},键值:{{a}}</li>
	 *	这种写法支持1.0和2.0的循环;1.0在遍历json数据时,只能写两个参数,a,b分别是键名和键值
	 	<li v-for="(a,b) in json">键名:{{a}},键值:{{b}}</li>
	 *  但是1.0最好使用$index和$key来获取编号和键名
	 	注意:在1.0版本中,使用v-for="(index,item) in arr" 遍历数组时,先写下标,再是元素值
	 	           在2.0版本中,使用v-for="(item,index) in arr" 遍历数组时,先元素,再写下标,和1.0是相反的
	 	           参数index和item都有作用域的限制(只能在当前循环的元素内使用这两个变量)
	 * */
	

###Vue的事件
	 * 原生js中的事件,如:onclick,ondblclick,onmouseover等.
	 	基本上,原生js有多少事件,Vue.js就有多少事件
	 * 在vue.js中,把所有的事件前的on替换成@
	 * 		把所有的方法,事件,函数写在 methods:{} 中
	 * 		写法---事件名:function(){}
	 			eg:	add:function(){代码}
	 		ES6写法---函数名(){};
	 			eg:	add(){代码};
	 * 		在vue中,获取值的时候都要加this.
	 		this指的是Vue实例化的对象,如果这个对象赋值给一个变量,那么this就指向这个变量
	 * 
	 * 在vue中除了el的手动挂载,还有一个是:
	 * 		new Vue({}).$mount('选择器');
	 * 
	 * 在1.0中,重复给数组添加一个元素,它的下标会一直增加,而值不会增加(bug)
	 * 在2.0中,重复给数组添加一个元素,它的下标和值都会增加
	 * */
		

###Vue的指令:
	扩展html标签的功能和属性
	 * 常见的指令:v-model,v-if,v-else,v-show,v-for,v-bind,v-on
	 * v-model:只能用在表单元素上,如input,select(实现数据的双向绑定),不能用在div上
	 * v-if="false/true"	true,创建一个元素;false,不创建元素
	 * v-show="false/true"  true,显示元素(display:block);false,隐藏元素(display:none)
	 * v-bind:指令可以替代html里的标签属性
			v-bind:href="url"	(简写:href="url")
			v-bind:src='src'	(简写:src="src")
			简写方式:使用冒号(:)代替v-bind,如	:src='src'
			html标签的所有属性都支持这两种写法
		绑定class和style,二者方法类似
		v-bind:class="[a,b,c]"(数组隔开,数组里的元素不加引号)
			  :class="{'red':true,'blue':false}"	其中,'red'和'blue'是定义好的class类名 
			  (json数据,true是加上这个样式;false是不加这个样式,true或false可以写在行间也可以写在数据中)
			  :class="json"
			  注意:html的属性定义宽高时,禁止写单位
			  	eg	:width="200" 	:height="200"
			  
		v-bind:style="[a,b,c]"	a:{color:'red'},b:{background:'blue'},c:{margin:10px}
			  :style="{color:'red'}"
			  :style="json"		json:{color:'red'}
			  :style="[a]"		a:{color:'red',background:'blue'}
		
		扩展两个属性:
				oninput事件和onchange事件 
			lazy 相当于change事件,失去焦点执行,相当于 onchange 事件		(2.0版本不支持)
			debounce 是延时执行,相当于setTimeout					(2.0版本不支持)
		
		<input type="text" v-model='str' lazy/>				  //input失去焦点后,其他绑定的数据才改变
		<input type="text" v-model='str' debounce="2000"/>	  //修改后两秒其他的绑定数据才发生改变
		
	 * */	

	

