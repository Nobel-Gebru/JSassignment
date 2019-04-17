function URLvalidator(url){
	var regex = new RegExp('^(https?:\\/\\/)?'+
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+
	    '(\\#[-a-z\\d_]*)?$','i');
	  return !!regex.test(url);
	}
	function AddPicture(){
	  var user_url = ($('image-url').value);
	  if(validateURL(user_url)){
	    img.src = user_url;
	    img.className = "Head-img";
	    $('planning-area').appendChild(img);
	  }
	  else{
	    $('url-error').classList.toggle("alert");
	  }
	}
