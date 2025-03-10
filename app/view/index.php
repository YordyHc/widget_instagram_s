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
            <a href="https://www.instagram.com/<?= $perfil['username']?>/" target="_blank"><img src="<?= $perfil['profile_picture_url']?>" alt="Perfil" class="perfil-img"></a>
            <div class="perfil-nom">
                <h2><a href="https://www.instagram.com/<?= $perfil['username']?>/" target="_blank"><?= $perfil['name']?><img src="https://placehold.co/400/blue/white" alt="Verificado" class="verificado"></a></h2>
                <p><a href="https://www.instagram.com/<?= $perfil['username']?>/" target="_blank">@<?= $perfil['username'] ?></a></p>
            </div>
        </div>
        <div class="estats">
            <div>
                <div id="c_posts" class="cant"><?= $perfil['media_count']?></div>
                <div class="divper">Posts</div>
            </div>
            <div>
                <div id="seguidores" class="cant"><?= $perfil['followers_count']?></div>
                <div class="divper">Followers</div>
            </div>
            <div>
                <div id="seguidos" class="cant"><?= $perfil['follows_count']?></div>
                <div class="divper">Following</div>
            </div>
        </div>
        <button class="boton-seg"  onclick="window.open('https://www.instagram.com/<?= $perfil['username']?>/', '_blank');">
            <i class="fab fa-instagram"></i> Follow
        </button>
    </div>
    <div class="contenedor-galeria">
        <div id="carruseles-container">
            <!-- Carruseles  -->
        </div>

        <button class="btn-anterior" onclick="cambiarCarrusel(-1)">&#10094;</button>
        <button class="btn-siguiente" onclick="cambiarCarrusel(1)">&#10095;</button>
    </div>
    <div class="modal" id="mymodal">
        <div class="modal-content">
            <span class="close" onclick="cerrarModal()">&times;</span>
            <!-- contenido de instagram -->
        </div>
    </div>

    <script src="https://www.instagram.com/embed.js"></script>
    <script>
        let posts = <?php echo json_encode($posts); ?>;
        let carruselIndex = 0;
        let carruseles = [];

        function cargarCarrusel() {
        const container = document.getElementById('carruseles-container');
        container.innerHTML = '';

        // Dividir publicaciones en grupos de 6
        for (let i = 0; i < posts.length; i += 6) {
            let grupo = posts.slice(i, i + 6);
            let carrusel = document.createElement('div');
            carrusel.classList.add('carrusel');
            if (i === 0) carrusel.classList.add('activo');

            let galeria = document.createElement('div');
            galeria.classList.add('galeria');

            grupo.forEach(post => {
                // Crear el div de la publicación sin el atributo onclick
                let publicacion = document.createElement('div');
                publicacion.classList.add('publicacion');

                // Crear el contenido HTML de la publicación
                publicacion.innerHTML = `
                    <img src="${post.media_url}" alt="${post.caption || 'Publicación de Instagram'}">
                    <div class="overlay"><br><br><br><br><br><br>
                        <div class="meta-info">
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="white" stroke-width="2"/>
                            </svg> ${post.like_count || 0}</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
                                <path d="M21 15c0 1.1-.9 2-2 2h-5v3l-4-3H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8z" fill="none" stroke="white" stroke-width="2"/>
                            </svg> ${post.comments_count || 0}</span>
                        </div><br>
                        <p>${post.caption || 'Sin descripción'}</p>
                    </div>
                `;

                // Asignar el evento de click usando addEventListener
                publicacion.addEventListener('click', function() {
                    abrirModal(post.permalink);
                });

                // Agregar la publicación a la galería
                galeria.appendChild(publicacion);
            });

            // Agregar la galería al carrusel
            carrusel.appendChild(galeria);
            container.appendChild(carrusel);
            carruseles.push(carrusel);
        }
    }


    function cambiarCarrusel(direccion) {
        carruseles[carruselIndex].classList.remove('activo');

        if (direccion === 1 && carruselIndex < carruseles.length - 1) {
            carruselIndex++;
        }
        else if (direccion === -1 && carruselIndex > 0) {
            carruselIndex--;
        }

        carruseles[carruselIndex].classList.add('activo');
    }

    cargarCarrusel();

    var modal = document.getElementById("mymodal");

    function abrirModal(permalink_ofi) {
        // Mostrar el modal
        modal.style.display = "flex";
        // Limpiar el contenido anterior del modal
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '';  // Elimina el contenido previo

        // Cargar el contenido de Instagram
        modalContent.innerHTML += `
            <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${permalink_ofi}?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>
        `;

        // Procesar el contenido de Instagram
        window.instgrm.Embeds.process();
    }

    function cerrarModal() {
        // Ocultar el modal
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>

</body>
</html>