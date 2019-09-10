function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector('#txtano')
var res = document.querySelector('#res')
if(fano.value.length ==0 || fano.value > ano){   
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id','foto')
   img.style.borderRadius = '100%'
   img.style.width= '200px'
   img.style.height= '200px'

   if (fsex[0].checked){
       genero = 'Homem'
       if (idade >=0 && idade<10){
           //criança
           img.setAttribute('src', './img/criancamenino.png')
       } else if (idade < 21){
           //jovem
           img.setAttribute('src', './img/meninojovem.png')
       } else if (idade <50){
           //Adulto
           img.setAttribute('src', './img/adulto.jpg')
       }else{
           //idoso
           img.setAttribute('src', './img/idoso.png')
       }
   }else if (fsex[1].checked){
       genero = 'Mulher'
       if (idade >=0 && idade<10){
        //criança
        img.setAttribute('src', './img/criancamenina.png')
       
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', './img/meninajovem.png')
        } else if (idade <50){
            //Adulta
            img.setAttribute('src', './img/adulta.png')
        }else{
            //idosa
            img.setAttribute('src', './img/idosa.png')
        }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
}

}