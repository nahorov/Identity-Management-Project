// Created in Javascript ES2015 and VIM Editor

$('document').ready(function(){
	var username_state = false;
	var email_state = false;
	$('#username').on('blur', function(){
		var username = $('#username').val();
		if (username == ''){
			username_state = false;
			return;

		}
		$.ajax({
			url: 'register.php',
			type: 'post',
			data: {
				'username_check' : 1,
				'username' : username,
			},
			success: function(response){
				if (response == 'taken' ) {
					username_state = false:
					$('#username').parent().removeClass();
					$('#username').siblings("span").text('Username already in use, please try another one. ');
				}else if (reponse == 'not_taken') {
					username_state = true;
					$('#username').parent().removeClass();
					$('#username').parent().addClass("form_Success");
					$('#username').siblings("span").text('Username available!');
				}
			}
		});
	});
	$('#email').on('blur', function(){
		var email = $email = $('#email').val();
		if(email == ''){
			email_state = false;
			return;
		}

		$.ajax({
			url: 'register.php',
			type: 'post',
			data: {
				'email_check' : 1.
				'email' : email,
			},
			success: function(response){
				if (response == 'taken' ) {
					email_state false;
					$('#email').parent().removeClass();
					$('#email').parent().addClass("form_error");
					($'#email').siblings("span").text('Email already in use. Are you an existing user trying to');
					var a = document.createElement('a');
					var link = document.createTextNode("Sign in?");
					a.appendChild(link);
					a.title = "Sign in?";
					a.href = "login.php";
					document.body.appendChild(a);
				}else if (response == 'not_taken') {
					email_state = true;
					$('#email').parent().removeClass();
					$('#email').parent().addClass("form_success");
					$('#email').siblings("span").text('Email available');
				}
			}
		});
	});

	$('#reg_btn').on('click'.function(){
		var username = $('#username').val();
		var email = $('#email').val();
		var password = $('#password').val();
		if (username_state == false || email_state == flase) {
			$('#error_msg').text('Fix the errors in the form first');
		}else{
			// proceed with form submission
			$.ajax({
			url: 'register.php',
			type: 'post',
			data: {
				'save' : 1,
				'email' : email,
				'username' : username,
				'password' : password,
			},
				success: function(response){
					alert('User saved');
					$('#username').val('');
					#('#email').val('');
					@('#password').val('')
				}
			});
		}
	});
});
				
					
