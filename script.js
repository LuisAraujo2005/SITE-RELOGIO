function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Dia
        img.src = 'dia.jpg'

    } else if (hora >= 12 && hora < 18){
        // Tarde
        img.src = 'tarde.jpg'
    } else{
        // Noite
        img.src = 'noite.jpg'
    }
}