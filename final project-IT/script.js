function validateForm() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let mesazhi = document.getElementById("mesazhi");
    mesazhi.innerHTML = "";



    if(username.length < 3) {
        mesazhi.innerHTML = "<div class='alert alert-warning'>Emri duhet te jete se paku 3 karaktere.</div>";
        return;
    }

    if(!email.includes ("@")) {
        mesazhi.innerHTML = "<div class='alert alert-warning'>Email-i duhet te permbaje '@' .</div>";
        return;
    }

    if(password.length < 8) {
        mesazhi.innerHTML = "<div class='alert alert-warning'>Fjalekalimi duhet te jete se paku 8 karaktere.</div>";
        return;
    }

    if(password !== confirmPassword) {
        mesazhi.innerHTML = "<div class='alert alert-danger'>Fjalekalimet nuk perputhen</div>";
        return;
    }

    

    mesazhi.innerHTML = "<div class='alert alert-success'>Forma u degua me sukses!</div>";

    

    





} 