function printReverse(array){
	for(var i=array.length-1;i>=0;i--)
	{
		console.log(array[i]);
	}
}
function isUniform(array){

	for(var i=0;i<array.length-1;i++)
	{
		if(array[i]!==array[i+1])
		{
			return false;
		}
	}
	return true;
}
function sumArray(array){
	var sum=0;
	for(var i=0;i<array.length;i++)
	{
		sum=sum+array[i];
	}
	return sum;
}
function max(array){
	var max=array[0];
	for(var i=1;i<array.length-1;i++)
	{
		if(array[i]>max)
		{
			max=array[i];
		}
	}
	return max;
}


	