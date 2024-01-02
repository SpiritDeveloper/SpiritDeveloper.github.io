function sendEmail()   {  
    console.log('entro');
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const mensaje = document.getElementById("massage").value;
    if (name === '' || email === '' || phone === '' || mensaje === ''){
        console.log('entro');
        const elemento = document.getElementById("notification");
        const title = document.getElementById("texto1");
        const menssage = document.getElementById("texto2");
        elemento.className = ''
        elemento.className += "alert mb-0 alert-danger";
        title.textContent="¡Tienes que llenar todos los campos para continuar!";
        menssage.textContent="Hubo un error al enviar el mensaje";
        $('.toast').toast('show')
        setTimeout(function(){  $('.toast').toast('hide') }, 2500);
    } else {
        const elemento = document.getElementById("notification");
        const title = document.getElementById("texto1");
        const menssage = document.getElementById("texto2");
        elemento.className = ''
        elemento.className += "alert mb-0 alert-primary";
        title.textContent="Tú mensaje se esta enviando ...";
        menssage.innerHTML = '<div style=" text-align:center;" class="spinner-border text-primary" role="status"><span class="sr-only" style=" text-align:center;"></span></div>'
        $('.toast').toast('show')
        setTimeout(function(){  $('.toast').toast('hide') }, 1500);
        const newEmial = {
            Host:"smtp.gmail.com",
            Username:"codeaxolotl@gmail.com",
            Password:"kriboy21",
            To:"soporte@axolotlcode.tech",
            From:"codeaxolotl@gmail.com",
            Subject:"Tenemos un nuevo cliente",
            Body:`Información del cliente\n<br>Nombre del contacto : ${name},\n<br>Correo del contacto: ${email},\n<br>Telefono del contacto: ${phone},\n<br>Mensaje del contacto : ${mensaje}`
        }
        Email.send(newEmial).then(function(message){
            if(message == 'OK'){
                const elemento = document.getElementById("notification");
                const title = document.getElementById("texto1");
                const menssage = document.getElementById("texto2");
                elemento.className = ''
                elemento.className += "alert mb-0 alert-success";
                title.textContent="¡Tú mensaje se envio correctamente!";
                menssage.textContent="Pronto nos pondremos en contacto contigo.";
                $('.toast').toast('show')
                setTimeout(function(){  $('.toast').toast('hide') }, 2500);
            } else {
                    const elemento = document.getElementById("notification");
                    const title = document.getElementById("texto1");
                    const menssage = document.getElementById("texto2");
                    elemento.className = ''
                    elemento.className += "alert mb-0 alert-warning";
                    title.textContent="¡Ups!";
                    menssage.textContent="Hubo un problema al enviar el mensaje";
                    $('.toast').toast('show')
                    setTimeout(function(){  $('.toast').toast('hide') }, 2500);
            }
        });
    }
}  