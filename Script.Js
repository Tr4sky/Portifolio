var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('active')
)
this.classList.add('active')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)

)
var btnExp = document.querySelector('#btn-exp')
var menuRight = document.querySelector('.menu-lateral')

btnExp.addEventListener('click',function(){
    menuRight.classList.toggle('expandir')
})