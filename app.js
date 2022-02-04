const slider=document.querySelector('.slider')
const arrowLeft=document.querySelector('.arrowLeft')
const arrowRight=document.querySelector('.arrowRight')
const dot1=document.querySelector('.dot1')
const dot2=document.querySelector('.dot2')
const dot3=document.querySelector('.dot3')
const dot4=document.querySelector('.dot4')
const dot5=document.querySelector('.dot5')

//kreiraju se objekti tipa Image
//isto kao <img src="adidas.jpg" width=250 height=250>
const img0=new Image(250,250)
img0.src='adidas0.jpg'
const img1=new Image(250,250)
img1.src='adidas1.jpg'
const img2=new Image(250,250)
img2.src='adidas2.jpg'
const img3=new Image(250,250)
img3.src='adidas3.jpg'
const img4=new Image(250,250)
img4.src='adidas4.jpg'

//polje sa slikama koje koristi slajder
const images=[img0,img1,img2,img3,img4]

//pokaži slike na početku
slider.appendChild(images[0])
slider.appendChild(images[1])
dot1.classList.add('dotRed')
dot2.classList.add('dotRed')


let counter=0
let imagesInit=false

//dodajemo event na lijevu strelicu na click
arrowLeft.addEventListener('click',()=>{ 
    
    if(counter>=4){
        counter=0
    }
    counter++
    console.log(counter);
    if(counter===1){
       slider.removeChild(images[0])
        slider.removeChild(images[1])
        slider.appendChild(images[1])
        slider.appendChild(images[2])
        dot1.classList.remove('dotRed') 
        dot3.classList.add('dotRed')
    }
    if(counter===2){
       slider.removeChild(images[1])
        slider.removeChild(images[2])
        slider.appendChild(images[2])
        slider.appendChild(images[3]) 
    }
    if(counter===3){
       slider.removeChild(images[2])
        slider.removeChild(images[3])
        slider.appendChild(images[3])
        slider.appendChild(images[4]) 
    }
    if(counter===4){
        slider.removeChild(images[3])
         slider.removeChild(images[4])
         slider.appendChild(images[4])
         slider.appendChild(images[0]) 
     }
     if(counter===0){
        slider.removeChild(images[4])
         slider.removeChild(images[0])
         slider.appendChild(images[0])
         slider.appendChild(images[1]) 
     }

    

    //
})
arrowRight.addEventListener('click',()=>{ 
    //dodaj logiku za pomicanje slika udesno
})