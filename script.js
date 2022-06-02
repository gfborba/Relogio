
function carregar() {
    var msg= document.getElementById('msg') 
    var img= window.document.getElementById('imagem')
    var edu= window.document.getElementById ('edu')
    var datah = new Date()
    var datam = new Date()
    var hora = datah.getHours()
    var min = datam.getMinutes()
    msg.innerHTML = (`Agora são <strong>${hora} horas e ${min} minutos.</strong>`)
        if(hora>0 && hora<6) {img.src='imagens/madrugada.png' 
        document.body.style.background ='#011e30'
         edu.innerText = ('Boa Madrugada! Não durma muito tarde.')
        } else if (hora>=6 && hora<=12) {img.src='imagens/manha.png' 
        document.body.style.background ='#feec8a'
         edu.innerText = ('Bom Dia! Não desanime, uma coisa de cada vez.')
        } else if (hora>=13 && hora<18){img.src='imagens/tarde.png'
        document.body.style.background ='#8c9dad'
         edu.innerText =('Boa Tarde! Não se esqueça do cafézinho.')
        } else {img.src='imagens/noite.png'
        document.body.style.background ='#534266'
        edu.innerText = ('Boa Noite! Você conseguiu, hora de descansar.')
        
        
    }
    
}