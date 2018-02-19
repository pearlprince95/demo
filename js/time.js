	function startTime() 
	{
	document.getElementById("time").innerHTML = Date();
	var t = setTimeout(startTime, 500);
	}