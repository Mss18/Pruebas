import Axios from "axios";

const loading = document.getElementById("loading");
const message = document.getElementById("mensaje");

const boton = document.getElementById("cargar_ajax");
boton.addEventListener("click", () => {
  loading.style.display = "block";
  Axios.get("texto.txt", {
    responseType: "text"
  })
    .then(function(res) {
      if (res.status === 200) {
        message.innerHTML = res.data;
      }
      console.log(res);
    })
    .catch(err => {
      menssage.innerText = `Conexión errónea ${err}`;
    })
    .then(() => {
      loading.style.display = "none";
    });
});
