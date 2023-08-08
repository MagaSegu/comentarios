function comentar() {
   const input = document.querySelector("input").value
   document.querySelector(".comentarios").innerHTML += `<p class="comentario">${input}</p`
   document.querySelector("input").value = ""

}