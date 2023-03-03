function myFunction(){
    const userelement = document.getElementById('form2Example17').value;
    const passelement= document.getElementById('form2Example27').value;
    if (userelement.value !== '' && passelement.value !== ''){
        console.log("Credentials entered")
    }else{
        alert("Please enter user name & password")
    }
}



