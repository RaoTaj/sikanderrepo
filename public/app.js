var mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function Submit() {
    if (!st_Name.value) {
        alert("Name please !");
        return;
    }
    if (!email.value) {
        alert("Email please !")
        return;
    }
    if (email.value.match(mail)) {

            } else {
                alert("Invalid Email !")
                return
            }
        
        if (!pass.value && pass.value.length < 6) {
            alert("Password must contain 6 Digit !")
            return;
        }
        if (pass.value.length < 6) {
            alert("Password must contain 6 Digit !")
            return;
        }

        if (!contact.value && contact.value.length <= 11) {
            alert("Enter your contact number")
        }
        if (contact.value.length < 11 ) {
            alert("Invalid Contact !")
            return;
        }
        
        else{
            var userData = {
                st_Name,
                email,
                pass,
                contact,
            
            }
        }

        console.log(userData.st_Name.value);
        console.log(userData.email.value);
        console.log(userData.pass.value);
        console.log(userData.contact.value);
        


}