import {requisicaoFetch, requisicaoXhr} from "./manager.js"

window.addEventListener("DOMContentLoaded", () => {
     requisicaoXhr("https://felpsdornelas.github.io/PFWJ/user.json");
     requisicaoFetch("https://felpsdornelas.github.io/PFWJ/user.json");  

});