# Widget de Instagram

Frontend de una interfaz para mostrar el feed de una cuenta de Instagram
profesional. El proyecto se desarrollo con React y Vite y consume un backend que administra la conexion con la API de Instagram.

### Vista previa

![Captura de pantalla 2025-03-10 113054](https://github.com/user-attachments/assets/29b9f499-5b3a-4b56-87d1-9e78e2176a5e)

## ¿Que muestra?

- Informacion del perfil: foto, nombre y usuario
- Cantidad de publicaciones, seguidores y cuentas seguidas
- Publicaciones organizadas en una galeria de hasta seis elementos por pagina
- Contenido ampliado mediante el embed oficial de Instagram
- Enlace directo para seguir la cuenta
- Tema claro u oscuro

## Tecnologias

- React 19
- Tailwind CSS 4
- Motion
- Styled Components
- React Icons

## Funcionamiento

La interfaz no se conecta directamente con Instagram. Al cargar
`src/pages/WidInstagram.jsx`, el servicio realiza una peticion al backend privado
configurado en el proyecto:

```text
Backend privado + /widinsta
```

La implementacion de esa peticion se encuentra en
`src/services/instagram.js`. La URL base se obtiene de la variable de entorno
`VITE_INSTA_API_URL`, por lo que el frontend no contiene access tokens ni
credenciales de Instagram.

El backend responde con un perfil y una lista de publicaciones en el siguiente
formato:

```json
{
  "perfil": {
    "id": "17841400000000000",
    "username": "usuario",
    "name": "Nombre de cuenta",
    "profile_picture_url": "https://ejemplo.com/perfil.jpg",
    "media_count": 42,
    "followers_count": 12580,
    "follows_count": 215
  },
  "posts": [
    {
      "id": "17900000000000001",
      "caption": "Descripcion de la publicacion",
      "media_type": "IMAGE",
      "media_url": "https://ejemplo.com/publicacion.jpg",
      "thumbnail_url": "https://ejemplo.com/publicacion.jpg",
      "permalink": "https://www.instagram.com/p/ejemplo/",
      "like_count": 245,
      "comments_count": 18
    }
  ]
}
```

## Configuracion del frontend

Para modificar o ejecutar el codigo localmente se necesitan Node.js 20 o superior
y npm.

El archivo `.env` define la direccion del backend privado:

```env
VITE_INSTA_API_URL=https://puerto-de-tu-backend.com/api
```

No se debe incluir `/widinsta` al final de la variable. El servicio lo agrega
automaticamente al construir la peticion.

## Datos de prueba

La carpeta `src/mocks` contiene datos locales de ejemplo. Aunque el proyecto
esta preparado para consumir el backend privado, el archivo
`src/mocks/ejemplo.json` puede usarse temporalmente durante el desarrollo desde
`src/pages/WidInstagram.jsx`.

## Comportamiento ante errores

Si `VITE_INSTA_API_URL` no esta definida o el backend no responde, el servicio
registra el error en la consola y muestra la interfaz sin perfil ni publicaciones.
