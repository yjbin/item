function ajax(url,fnSurc,fnFaild)
		{
			1//创建ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//2连接服务器
	oAjax.open('GET',url,true);
	//3发送
	oAjax.send();
	//4接收
	oAjax.onreadystatechange=function()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				//alert('成功了'+oAjax.responseText);
				fnSurc(oAjax.responseText);
			}
			else
			{
				//alert('失败了');
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
}