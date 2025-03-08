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
            <img src="<?= $perfil['profile_picture_url']?>" alt="Perfil" class="perfil-img">
            <div class="perfil-nom">
                <h2><?= $perfil['name']?><img src="https://placehold.co/400/blue/white" alt="Verificado" class="verificado"></h2>
                <p>@<?= $perfil['username'] ?></p>
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
        <button class="boton-seg">
            <i class="fab fa-instagram"></i> Follow
        </button>
    </div>
    <div class="contenedor-galeria">
        <div id="carruseles-container">
            <!-- Carruseles generados dinámicamente -->
        </div>

        <button class="btn-anterior" onclick="cambiarCarrusel(-1)">&#10094;</button>
        <button class="btn-siguiente" onclick="cambiarCarrusel(1)">&#10095;</button>
    </div>

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
                galeria.innerHTML += `
                    <div class="publicacion">
                        <img src="${post.media_url}" alt="${post.caption || "Publicación de Instagram"}">
                        <div class="overlay">
                            <div class="meta-info">
                                <span>❤️ ${post.like_count || 0} hola</span>
                                <span>💬 ${post.comments_count || 0}</span>
                            </div>
                            <p>${post.caption || "Sin descripción"}</p>
                        </div>
                    </div>
                `;
            });

            carrusel.appendChild(galeria);
            container.appendChild(carrusel);
            carruseles.push(carrusel);
        }
    }

    function cambiarCarrusel(direccion) {
        carruseles[carruselIndex].classList.remove('activo');
        carruselIndex += direccion;

        if (carruselIndex < 0) {
            carruselIndex = carruseles.length - 1;
        } else if (carruselIndex >= carruseles.length) {
            carruselIndex = 0;
        }

        carruseles[carruselIndex].classList.add('activo');
    }

    cargarCarrusel();
</script>
</body>
</html>