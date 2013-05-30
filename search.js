function search(obj) {
  	var search_result = document.getElementById("inptu").value;
		var loc = "https://duckduckgo.com/?q=" + search_result;
		window.location.href = loc;
	}
