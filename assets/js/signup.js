$("#registerButton").click(function(){
	var orgName = $("#orgName").val();
	var emailId = $("#emailId").val();
	var password = $("#password").val();
	var cPassword = $("#cPassword").val();
	var mobileNo = $("#mobileNo").val();


	if (emailId && password) {
		if (password === cPassword) {
			$.post(
				'/signup',
				{orgName: orgName, emailId: emailId, password:password, mobileNo:mobileNo},
				function () {
					window.location = "/signupConfirm";
				}
			).fail(function(res){
				alert("Error: " + res.getResponseHeader("error"));
			});
		} else {
			alert("Passwords don't match");
		}
	} else {
		alert("A username and password is required");
	}
});
