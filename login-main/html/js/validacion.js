function go(){
    if (document.login.contraseña.value=='Contraseña' && document.login.correo.value=='Usuario'){
        document.login.submit();
        alert("Bienvenido");
        location.href="./html/principal.html"
    }
    else{
        alert("Por favor Ingrese correo y contraseña correctos");
    }
}