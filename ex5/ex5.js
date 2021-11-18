const app = new Vue({
    el: "#main",
    data: {
        titulo: "Tratamento de Eventos no Vue.js",
        contador: 0
    },
    methods: {
        incrementar: function() {
            this.contador++;
        }
    }
})