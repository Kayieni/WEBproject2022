$(document).ready(function() {
    $('#password').keyup(function() {
        //Check the strength of the password
        const password = $(this).val();
        const stength = checkPasswordStrength(password);

        //Update the password strength indicator
        $('#password-strength').css('animation-name', 'animate-' + stength);
    })
});

function checkPasswordStrength(password) {
    //Check if the passoword contains at least one uppercase letter
    const hasUpp = /[A-Z]/.test(password);
    // Check if the password contains at least one number
    const hasNum = /\d/.test(password);
    // Check if the password contains at least one special character
    const hasSpecialChar = /[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?]/.test(password);

    if (hasUpp && hasNum && hasSpecialChar) {
        return 'strong';
    }else if (hasNum || hasSpecialChar || hasUpp) {
        return 'medium';
    }else {
        return 'weak';
    }

}