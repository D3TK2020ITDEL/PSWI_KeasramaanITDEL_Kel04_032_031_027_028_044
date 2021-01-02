function validate(form) {
	var returnValue = true;
	var username = document.getElementById ("username");
	var password = document.getElementById ("password");
	var password2 = document.getElementById ("password2");
			
	if(username.value != "yangsimpelaja") {
		returnValue = false;
		alert("Masukkan alamat Email(Username) dengan benar");
		document.getElementById("username").focus();
	}
	else if(password.value != "jangansampailupa") {
		returnValue = false;
		alert("Password anda salah! \n Coba lagi.");
		document.getElementById("password").focus();
	}
	else if(password.value != password2.value) {
		returnValue = false;
		alert("Password tidak sesuai\n Coba lagi.");
		document.getElementById("password2").focus();
	}
	else{

	}
	return returnValue;
}
	