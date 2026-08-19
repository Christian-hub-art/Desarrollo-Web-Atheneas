window.onload = function(){
    var fichas = document.querySelectorAll(".ficha");
    var boton = document.createElement("button");
    boton.textContent = "Mostrar solo héroes";
    document.body.appendChild(boton);
    boton.addEventListener("click", function(){
            for (var ficha of fichas ){
                if(ficha.getAttribute("data-tipo")=== "villano") {
                    ficha.style.display = "none";
                }else{
                    ficha.classList.add("resultado");
                }
            }
    });

    var boton2 = document.createElement("button");
    boton2.textContent = "Mostrar solo villanos";
    document.body.appendChild(boton2);
    boton2.addEventListener("click", function(){
        for(var ficha of fichas){
            if(ficha.getAttribute("data-tipo")==="heroe"){
                ficha.style.display = "none";
            }else{
                ficha.classList.add("resultado");
            }
        }
    });

    for (var ficha of fichas) {
        ficha.addEventListener("mouseover", function(){
            this.style.backgroundColor= "#421B4A";
        });

        ficha.addEventListener("mouseout", function(){
            this.style.backgroundColor = "";
        });

    }

    var imagenes = document.querySelectorAll(".ficha img");
    for(var imagen of imagenes){
        imagen.classList.add("borde-redondeado");
    }

    

    function cargarFraseDelDia(callback) {

        fetch("https://catfact.ninja/fact")
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {
            callback(datos.fact);
        })
        .catch(function(error) {
            console.log("No se pudo cargar la frase:", error);
        });

    }   



    var botonFrase = document.createElement("button");
    botonFrase.textContent = "Frase del día";
    document.body.appendChild(botonFrase);

    botonFrase.addEventListener("click", function() {
        cargarFraseDelDia(function(frase){
            var p = document.createElement("p");
            p.textContent = frase;
            document.body.appendChild(p);
        });


    });

    function guardarFavorito(nombre) {
        return new Promise (function (resolve, reject) {
            setTimeout(function(){
                if (nombre) {
                    resolve(nombre + "guardado como favorito");
                } else {
                    reject("No se pudo guardar: falta el nombre"); 
                }
            }, 1000);
        });
    }

    for ( var ficha of fichas ){
        var botonFav = document.createElement("button");
        botonFav.textContent = "⭐ Favorito";
        ficha.appendChild(botonFav);
        botonFav.addEventListener("click",function(){
            var nombreEl = this.parentElement-this.querySelector(".nombre");
            guardarFavorito(nombre.textContent)
            .then(function(mensaje) { console.log(mensaje); })
            .catch(function(error) { console.log(error); });

        });
    }





}


