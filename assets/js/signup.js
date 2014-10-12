$(document).ready(function() {
	$("#registerButton").click(function(){
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var orgName = $("#orgName").val();
		var emailId = $("#emailId").val();
		var password = $("#password").val();
		var cPassword = $("#cPassword").val();
		var mobileNo = $("#mobileNo").val();
		var type = getParameterByName( 'registerType' );

		if (emailId && password) {
			if (password === cPassword) {
				$.post(
					'/signup',
					{firstName: firstName, lastName: lastName, orgName: orgName, emailId: emailId, password:password, mobileNo:mobileNo, type:type},
					function () {
						window.location = "/signupconfirm";
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
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
