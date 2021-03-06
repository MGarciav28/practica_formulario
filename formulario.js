(function(){

    var formulario = document.getElementById ('formulario'), 
    nombre = formulario.nombre, 
    correo = formulario.correo, 
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

function validarNombre(e){
    if(nombre.value == ''|| nombre.value == null){
     error.style.display = 'block';
     error.innerHTML += '<li>Por favor completa el nombre</li>'
     e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
    }else{
        error.style.display='none';        
    }
}


function validarCorreo(e){
    if(correo.value == ''|| correo.value == null){
     error.style.display = 'block';
     error.innerHTML +='<li>Por favor completa el correo</li>'
     e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
    }else{
        error.style.display='none';        
    }
}

function validarSexo(e){
    if(sexo.value==''||sexo.value==null){
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor selecciona el sexo</li>'
        e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
    }else{
        error.style.display='none';        
    }    
}

function validarTerminos(e){
    if(terminos.checked == false){
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor acepta los terminos y condiciones</li>'
        e.preventDefault();  //ESTO NOS PERMITE DETENER EL ENVÍO
    }else{
        error.style.display='none';        
    }
}

function validarVacio(){
    if(error.innerHTML!=''){
        error.style.display='block';
    }
}

function validarFormulario(e){
    error.innerHTML= '';
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
    validarVacio();
}

formulario.addEventListener('submit', validarFormulario);
}())