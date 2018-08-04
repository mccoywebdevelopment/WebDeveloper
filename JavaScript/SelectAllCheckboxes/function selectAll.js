function selectAll(){
	var checkBox=document.getElementsByTagName("input");
	for(var i=0;i<checkBox.length;++i)
	{
		if(checkBox.type=='checkbox')
		checkBox[i].checked=true;
	}

}