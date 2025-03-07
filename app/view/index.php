<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>

    </style>
</head>
<body>
    <div class="perfil container">
        <div class="perfil-info"> 
            <img src="https://placehold.co/400/orange/white" alt="Perfil" class="perfil-img">
            <div class="perfil-nom">
                <h2>TITULO PRUEBA <img src="https://placehold.co/400/blue/white" alt="Verificado" class="verificado"></h2>
                <p>@probando</p>
            </div>
        </div>
        <div class="estats">
            <div>
                <div id="c_posts" class="cant">764</div>
                <div class="divper">Posts</div>
            </div>
            <div>
                <div id="seguidores" class="cant">3.2M</div>
                <div class="divper">Followers</div>
            </div>
            <div>
                <div id="seguidos" class="cant">1.6K</div>
                <div class="divper">Following</div>
            </div>
        </div>
        <button class="boton-seg">
            <i class="fab fa-instagram"></i> Follow
        </button>
    </div>

    
<div class="contenedor-galeria">
    <div class="carrusel activo">
        <div class="galeria">
            <div class="publicacion">
                <img src="imagenes_prueb/Adventure Time 50.jpeg" class="img-fluid" alt="">
                <div class="overlay">Adventure Time</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/descarga (2).jpeg" class="img-fluid" alt="">
                <div class="overlay">Prueba opacidad</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/descarga (3).jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 3</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/descarga (4).jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 4</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/descarga (5).jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 5</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/descarga (6).jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 6</div>
            </div>
        </div>
    </div>

    <div class="carrusel">
        <div class="galeria">
            <div class="publicacion">
                <img src="imagenes_prueb/descarga (7).jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 7</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/Hidan e Kakuzo.jpeg" class="img-fluid" alt="">
                <div class="overlay">Hidan & Kakuzu</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/hunter x hunter.jpeg" class="img-fluid" alt="">
                <div class="overlay">Hunter x Hunter</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/imagen9.jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 9</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/imagen10.jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 10</div>
            </div>
            <div class="publicacion">
                <img src="imagenes_prueb/imagen11.jpeg" class="img-fluid" alt="">
                <div class="overlay">Imagen 11</div>
            </div>
        </div>
    </div>

    <button class="btn-anterior">&#10094;</button>
    <button class="btn-siguiente">&#10095;</button>
</div>
<script>
    document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel");
    const btnAnterior = document.querySelector(".btn-anterior");
    const btnSiguiente = document.querySelector(".btn-siguiente");
    let indiceActual = 0;

    function mostrarCarrusel(indice) {
        carruseles.forEach((carrusel, i) => {
            carrusel.classList.toggle("activo", i === indice);
        });
    }

    btnSiguiente.addEventListener("click", () => {
        indiceActual = (indiceActual + 1) % carruseles.length;
        mostrarCarrusel(indiceActual);
    });

    btnAnterior.addEventListener("click", () => {
        indiceActual = (indiceActual - 1 + carruseles.length) % carruseles.length;
        mostrarCarrusel(indiceActual);
    });

    mostrarCarrusel(indiceActual);
});

</script>
</body>
</html>