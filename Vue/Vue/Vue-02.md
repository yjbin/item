##Vue-Day02

	事件的坐标位置:实参必须传递	$event ,传递参数时,$event在实参的位置必须和函数的形参位置一一对应
	
	Vue阻止事件冒泡:在@click后面跟一个.stop;
		@click.stop="show()"
	Vue取消鼠标右键的默认行为:在@contextmenu后面跟一个.prevent;
		@contextmenu.prevent="show()"
	
		回顾:原生js阻止事件冒泡和取消默认事件的方法
			阻止事件冒泡:event.stopPropagation();
				低版本IE:event.cancelBubble=true;
			取消默认事件:event.preventDefault();
				
	
		
	键盘事件:
	
		"键盘按下" @keydown="keyEvent('键盘按下')"/>
		"键盘抬起" @keyup="keyEvent('键盘抬起')"/>
		"按下回车" @keydown.13="keyEvent('13是回车')"/>
		"按下回车" @keydown.enter="keyEvent('enter是回车')"/>
		"按下回车" @keydown="keyEvent2($event,'还是回车')"/>
		"按下上键" @keydown.up="keyEvent('up是上键')"/>
		"按下下键" @keydown.down="keyEvent('down是下键')"/>
		"按下左键" @keydown.left="keyEvent('left是左键')"/>
		"按下左键" @keydown.37="keyEvent2($event,'37是左键')"/>
		"按下右键" @keydown.right="keyEvent('right是右键')"/>
		"按下右键" @keydown.39="keyEvent2($event,'39是右键')"/>

	获得键盘按下时按键所对应的键码:
	
		showKeyCode:function(eve){
			alert(eve.keyCode);
		}


###留言板的思路:
		
	1.使用Bootstrap搭建html和css界面
		input输入框组+表格+模态框
	2.使用Vue遍历一个数组(数组里面相当于后台的json数据),将数据显示在页面中
		v-for="(item,index) in myData"
		{{index+1}}
		{{item.userName}}
		{{item.age}}
		{{item.sex}}
	3.添加js事件,实现添加和删除的功能
		@click="add()"
		
		add:function(){
			this.myData.push{
				ueserName:this.userName;
				age:this.age;
				sex:this.sex;
			}
			this.userName='';
			this.age='';
			this.sex='男';
		}
		删除一个:@click="nowIndex=index"
		删除全部:@click="nowIndex=-1"
		
		模态框中点确认才是真正的删除
			@click="del(nowIndex)"
			
			del:function(index){
				//如果小于0,则点击的是全部删除,就清空数组;否则,说明点击的是单个删除,就把当前下标的那个元素删除
				index<0?this.myData=[]:this.myData.splice(index,1);
			}

###tab选项卡的思路
	
	1.html和css的搭建
		div+li+a+p
	2.使用Vue循环一个数组(模拟后台数据),通过设置.active的值为true或false来控制样式的切换
		v-for="(item,index) in list"
		<a :class="'active':item.show" href="javascript:;" @click="tab(item,index)" v-for="(item,index) in list" >{{item.name}}</a>
		list:[
			{name:'html',show:true},
			{naem:'css',show:false},
			{naem:'javaScript',show:false},
			{naem:'Vue.js',show:false},
		]
	3.通过js来实现排他和点击选中和切换的效果
		@click="tab(item,index)"
		
		tab:function(item,index){
			//初始化第一个显示
			this.msg=item.name;
			//排他思想的应用
			for(var i=0;i<this.list.length;i++){
				this.list[i].show=false;
			}
			//给点击的那个元素加上样式
			this.list[index].show=true;
		}

###点击显示或隐藏一个元素的思路

	1.html+css构建样式
		button+div
	2.使用Vue的v-show来显示或隐藏这个元素
		button:设置点击事件
			@click="showHidden()"
		div:设置v-show="flag"
		
		在Vue实例中,
			data:{
				flag:true,
			},
			methods:{
				showHidden:function(){
					this.flag?this.flag=false:this.flag=true;
				}
			}
