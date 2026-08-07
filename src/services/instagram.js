// instagramService.js

export async function instagramService() {
  try {
    // 1. Extraemos la URL base del archivo .env
    // Nota: Si usas Vite se usa import.meta.env.VITE_API_URL
    // Si usas Create React App se usa process.env.REACT_APP_API_URL
    // Si usas Next.js se usa process.env.NEXT_PUBLIC_API_URL
    const baseUrl = import.meta.env.VITE_INSTA_API_URL;

    if (!baseUrl) {
      throw new Error(
        "La variable de entorno VITE_INSTA_API_URL no está definida.",
      );
    }

    // 2. Concatenamos la URL base con el endpoint específico
    const endpoint = `${baseUrl}/widinsta`;

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      perfil: data.perfil,
      posts: data.posts,
    };
  } catch (error) {
    console.error("Hubo un error al obtener los datos de Instagram:", error);

    return {
      perfil: null,
      posts: [],
    };
  }
}
