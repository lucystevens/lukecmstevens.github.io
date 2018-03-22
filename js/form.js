	function sendForm(){
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "http://localhost/lithium/sendform/?token?",
			"method": "POST",
			"headers": {
				"content-type": "application/json",
				"cache-control": "no-cache",
				"Access-Control-Allow-Origin": "02fdfe0a-cd33-233c-4385-c3570d8f7f80"
			},
			"processData": false,
			"data": "{\n    \"name\": \"Luke Stevens\",\n    \"email\": \"lcm.stevens96@gmail.com\",\n    \"message\": \"This is a test 2\"\n}"
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		});
	}