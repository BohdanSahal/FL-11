let minLength = 6;
let email = prompt("Pls enter your email", "");

if(email) {
    if(email.length > minLength) {
        if(email === "user@gmail.com" || email === "admin@gmail.com") {
            let password = prompt("Pls enter your Password", "");
            if(password) {
                if(email === "user@gmail.com" && password === "UserPass" ||
                    email === "admin@gmail.com" && password === "AdminPass") {
                        let changePassConfirm = confirm("Do you want to change your password?");
                        if(changePassConfirm) {
                            let oldPass = prompt("Please enter your old password", "");
                            if(email === "user@gmail.com" && oldPass === "UserPass" ||
                                email === "admin@gmail.com" && oldPass === "AdminPass") {
                                    let newPass = prompt("Pls enter your new password", "");
                                    if(newPass.length > 5) {
                                        let confirmNewPass = prompt("Please confirm your new password", "");
                                        if (confirmNewPass === newPass) {
                                            alert("You have successfully changed you password.");
                                        } else {
                                            alert("You wrote the wrong password");
                                        }
                                    } else {
                                        alert("It's too short passwrod. Sorry");
                                    }
                                }   else {
                                    alert("Wrong password");
                                }
                        } else {
                            alert("You have failed the change.");
                        }
                    } else {
                        alert("Wrong password");
                    }
            } else {
                alert("Canceled");
            }
        } else {
            alert("I don't know you");
        }
    } else {
		alert('I don\'t know any emails having name length less than 6 symbols.');
	}
} else {
    alert("Canceled");
}