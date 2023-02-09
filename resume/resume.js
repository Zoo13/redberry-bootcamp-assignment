

const Box = document.getElementById('box')


function removeBox(){
    Box.addEventListener('click' , function (){
        Box.style.display = 'none'
    })
}