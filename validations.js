function validation(){
    var date = document.simpleForm.date;
    var lastName = document.simpleForm.lastName;
    var iP = document.simpleForm.iP;
    var text = document.simpleForm.text;
    if(checkLastName(lastName))
    {}
    return false;
}

function checkLastName(lastName)
{
    var letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if(lastName.value.match(letters))
    {
        return true;
    }
    else{
        alert('Last name has to contain only letters, spacebar or -');
        lastName.focus();
        return false;
    }
}