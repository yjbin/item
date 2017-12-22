##Vue与Ajax

###1.原生js写Ajax
	
	function Ajax(){
		//1.创建XMLHttpReesquest对象
		var xml = null;
		//兼容低版本IE
		if(window.XMLHttpResquest){
			xml = new XMLHttpRequest;
		}else{
			xml = new ActiveXObject('Microsoft XMLHTTP');
		}
		//2.初始化
		xml.open("GET","url",true);
		//3.发送请求
		xml.send();
		//4.请求成功的回调函数
		xmlhttp.onreadystatechange=function(){
  			if (xml.readyState==4 && xml.status==200){
    			document.write(xml.responseText);
    		}
 		 }

	}


###2.jQuery方法写Ajax请求

	$.ajax({
		type:"GET",
		url:"url路径",
		dataType:"json",
		success:function(){
			//数据请求成功的回调函数
		}
	})


###3.Vue方式写Ajax请求

	
 	使用this.$http获取Ajax对象;
		.get/post('url路径')获取方式;
		.then(function(){
			//请求成功后执行的方法,
			获取数据必须加上 .data 的后缀,不然得到的是object
			},function(){
				//失败后执行的方法
			})
		例子:
			this.$http.get('test.txt').then(function(res){
					alert(res.data);
				},function(){
					alert('失败了...');
				})
	1.get方式传递参数:
		this.$http.get('test.php',{参数1:值,参数2:值}).then(function(res){
				alert(res.data);
			},function(){
				alert('失败了...');
			})
	2.post方式传递参数:在参数后面加上  emulateJSON:true 的属性
		this.$http.post('test.php',
				{参数1:值,参数2:值},
				{emulateJSON:true}	//post方式请求数据,必不可少的参数
			).then(function(res){
				alert(res.data);
			},function(){
				alert('失败了...');
			})
	3.jsonp跨域请求数据:
		(1.)请求百度的搜索数据
			
	https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=1&json=1&p=3&sid=1422_21123_18559_22071_23384_22582&req=2&csor=1&cb=jQuery110208912213150814012_1497428818663&_=1497428818666
			
			getData:function(){
				this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
				{
					wd:this.str,//百度使用wd接口接收搜索的关键字
				},{
					jsonp:'cb',//cb是百度独有的数据接口
				}).then(function(res){
					alert(res.data.s);//百度使用s接收
				},function(res){
					alert('访问失败,'+res.status);
				})
			}
		(2.)请求360搜索的数据
			
	https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word=1	fields=word&word=1			
			
			getData:function(){
				this.$http.jsonp("https://sug.so.360.cn/suggest",
				{
					word:this.str,//360搜索使用word接口接收搜索的关键字
					encodein:'utf-8',//360搜索中英文编码问题
					encodeout:'utf-8',
				},{
					callback:'JSON_CALLBACK',//360搜索使用callback
				}).then(function(res){
					alert(res.data.s);//360搜索使用s接收
				},function(res){
					alert('访问失败,'+res.status);
				})
			}
			
###4.Vue的生命周期
	
	2.0的编译之前:	beforeCreate:function(){}
	1.0和2.0实例已经创建:	created:function(){}
	1.0的 编译之前:	beforeComplie:function(){}
	1.0的 编译之后: complied:function(){}
	1.0的 内容插入到页面中: ready:function(){}
	
	销毁之前:	beforeDestroy:function(){}
	销毁之后:	destroyed:function(){}
	
	销毁实例的方法:
		var mvvm = new Vue();
		mvvm.$destroy();
	
	挂载之前:	beforeMount:function(){}
	挂载结束:	mounted:function(){}
	
	更新之前:	beforeUpdate:function(){}
	更新之后:	update:function(){}


###5.v-text和v-html

	v-text 相当于原生js中的 innerText,相当于jQuery中的 text(),不带标签样式;
	v-html 相当于原生js中的 innerHTML,相当于jQuery中的 html(),带有标签样式;
	
	v-text 和  v-html 可以解决 Vue页面加载时的 大括号闪烁 的问题,
		写法:<div v-text="str"></div>	(str是在Vue实例中的data中定义的)
		另外,{{{str}}}可以在1.0版本中显示出来,带有标签的样式,相当于v-html

###6.Vue的计算属性	

	computed:{}	与v-model相似,但是两个值不是完全一样的.
		即:绑定两个数据,当其中的一个发生改变,另一个也发生变化,但是不与变化的那个值保持一致.
		获取方法	get:function(){}
		设置方法	set:function(){}
			var mvvm=new Vue({
				el:'#box',
				data:{
					num_a:18
				},
				computed:{
					num_b:{
						get:function(){//获取
							return this.num_a+8;
						},
						set:function(str){//设置
							this.num_a=str;
						}
					}
				}
			})
			//页面显示 num_a=18,num_b=26;
				刚开始,num_a设置的值为18;通过计算属性computed,num_b通过get获取的方法,得到了num_a的值,并在其基础上+8,变成了26;
			
			document.onclick=function(){
				mvvm.num_b=100;
			}
			//点击页面之后,num_a=100,num_b=108;
				点击页面之后num_b的值被设置了,会执行computednum_b里的set方法,将100赋值给num_a,此时num_a变为100;num_b再通过get方法,得到num_a的值,并在100的基础上+8,变成108;
			





