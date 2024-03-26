function carregar() {
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    var imagens = document.querySelectorAll('#foto img');
    
    msg.innerHTML = `Agora são ${hora} horas`;
    
    imagens.forEach(function(img) {
        img.style.display = 'none';
    });

    if (hora >= 0 && hora < 12) {
        // Bom dia
        document.getElementById('manhaImg').style.display = 'inline';
        document.body.style.background = '#f7b451';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        document.getElementById('tardeImg').style.display = 'inline';
        document.body.style.background = '#ee5c5c';
    } else {
        // Boa noite
        document.getElementById('noiteImg').style.display = 'inline';
        document.body.style.background = '#030735';
    }
}


