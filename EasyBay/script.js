function alertCart(){
  alert("Your cart is empty")
}

function hoverIn(elem){
  elem.src="images-2/assets/cactus-s.jpg"
}

function hoverOut(elem){
  elem.src="images-2/assets/aeonium-s.jpg"
}

function remove(id){
  elem = document.querySelector(id)
  elem.remove()
}