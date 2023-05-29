(() => {
    const App = {
        HTMLElement: {
            FormNotas: document.getElementById("FormNotas"),
            FormNotasImput: document.getElementById("notas"),
        
        },
        init() {  
         
            App.HTMLElement.FormNotas.addEventListener("submit",App.handlers.imprimirGraficaHandler);
         },
        handlers: {
            FromNotasSubmitHandler(event){
                event.preventDefault();
                const Notas = App.HTMLElement.FormNotasImput.value;
                const ArregloNotasLleno = App.methods.crearArreglo(Notas);
                App.methods.calcularPromedio(ArregloNotasLleno);
            },
            imprimirGraficaHandler(event){
                event.preventDefault();
                const Notas = App.HTMLElement.FormNotasImput.value;
                const ArregloNotasLleno = App.methods.crearArreglo(Notas);
                const promedio = App.methods.calcularPromedio(ArregloNotasLleno);
             App.methods.imprimirGrafica(promedio);

            },
        },
        methods: { 
                crearArreglo(notas){
                    var contador = 1;
                    var ArregloNotas = [];
                    while (contador <= notas){
                        ArregloNotas[contador] = prompt("Ingrese nota " + contador + ":","Solo numeros");
                        contador ++;
                    }
                    return ArregloNotas;
                },

                calcularPromedio(ArregloNotas){
                    const ArregloNotasLleno = App.methods.crearArreglo(null);
                    const i = 0;
                    const sumatoria = ArregloNotas.reduce((a, b) => a*1 + b*1, i);
                    let promedio;
                    promedio = sumatoria / (ArregloNotas.length - 1); 
                    console.log(promedio);
                    console.log(sumatoria); 
                    return promedio;
                },
            imprimirGrafica(promedio){
                console.log(promedio);
                console.log("llego");
                var color;
                var canvas = document.getElementById('canvas');
                if (promedio < 71){
                    color = "#FF1500"
                }else{
                    color ="#00FF15"
                };
                var texto = canvas.getContext('2d');
                var prom = canvas.getContext('2d');
                texto.fillStyle = '#CCCCCC';
                texto.fillRect (200 , 0, 100, 100);
                prom.fillStyle = color;
                prom.fillRect(200, 0, 100, promedio);
                var imprimir = document.getElementById('promedio').innerHTML = "Su promedio es de: " + promedio;
            },
        },
    };
    App.init();
 })();            