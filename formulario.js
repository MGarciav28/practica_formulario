/* (function(){ */
var formulario = document.getElementById ('formulario'), 
nombre = formulario.nombre, 
correo = formulario.correo, 
sexo = formulario.sexo,
terminos = formulario.terminos,
error = document.getElementById('error');

function validarNombre(e){
if(nombre.value == ''|| nombre.value == null){
     console.log('Por favor completa el nombre');
     error.style.display = 'block';
     error.innerHTML += '<li>Por favor completa el nombre</li>'
     e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
}
}

function validarCorreo(e){
if(correo.value == ''|| correo.value == null){
     console.log('Por favor completa el correo');
     error.style.display = 'block';
     error.innerHTML += '<li>Por favor completa el correo</li>'
     e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
    }else{
        error.style.display='none';        
    }
}
}

function validarNombre(e){
    if(nombre.value == ''|| nombre.value == null){
        console.log('Por favor completa el nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>'
        e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
    }else{
        error.style.display='none';        
    }
}

function validarFormulario(e){
    validarNombre(e);
    validarCorreo(e);
}

formulario.addEventListener('submit', validarFormulario);


/* }) */
