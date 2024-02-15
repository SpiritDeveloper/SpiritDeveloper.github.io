function sendEmail()   {  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const mensaje = document.getElementById("massage").value;
    const empresa = document.getElementById("empresa").value;
    if (!name && !email && !phone && !mensaje && !empresa) {
        const elemento = document.getElementById("notification");
        const title = document.getElementById("texto1");
        const menssage = document.getElementById("texto2");
        elemento.className = ''
        elemento.className += "alert mb-0 alert-danger";
        title.textContent="¡Tienes que llenar todos los campos para continuar!";
        menssage.textContent="Hubo un error al enviar el mensaje";
        $('.toast').toast('show')
        setTimeout(function(){  $('.toast').toast('hide') }, 1500);
        return
    } 
    const elemento = document.getElementById("notification");
    const title = document.getElementById("texto1");
    const menssage = document.getElementById("texto2");
    elemento.className = ''
    elemento.className += "alert mb-0 alert-primary";
    title.textContent="Tú mensaje se esta enviando ...";
    menssage.innerHTML = '<div style=" text-align:center;" class="spinner-border text-primary" role="status"><span class="sr-only" style=" text-align:center;"></span></div>'
    $('.toast').toast('show')
    setTimeout(function(){  $('.toast').toast('hide') }, 1500);
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "name": name,
    "email": email,
    "phone":  phone,
    "company":  empresa,
    "description": mensaje,
    "page": "axolotl"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://axolotlcode.tech/api/send-email/", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
        const elemento = document.getElementById("notification");
        const title = document.getElementById("texto1");
        const menssage = document.getElementById("texto2");
        elemento.className = ''
        elemento.className += "alert mb-0 alert-success";
        title.textContent="¡Tú mensaje se envio correctamente!";
        menssage.textContent="Pronto nos pondremos en contacto contigo.";
        $('.toast').toast('show')
        setTimeout(function(){  $('.toast').toast('hide') }, 1500);
        return
    })
    .catch(error => console.log('error', error));
}  