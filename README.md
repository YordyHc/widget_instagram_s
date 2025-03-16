# WIDGET INSTAGRAM FEED
Este widget permite integrar el feed de Instagram directamente en tu página web. 
Muestra publicaciones de una cuenta de Instagram profesional(empresa o creador) específica.

### Imagen de referencia:
![Captura de pantalla 2025-03-10 113054](https://github.com/user-attachments/assets/29b9f499-5b3a-4b56-87d1-9e78e2176a5e)

---

### ENLACE DE MI EJEMPLO:
- copia y pega el siguiente link en algun navegador:
   - widgetinstagramyor.infinityfreeapp.com

---

### TECNOLOGÍAS USADAS
- **PHP**
- **HTML**
- **CSS**
- **Javascript**

---

### FRAMEWORK
- **Bootstrap 5**
  
---

### SERVICIOS A USAR
- **Cuenta de Meta for developers**
- **Instagram Api graph**

---

### ¿CÓMO USAR?
Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Descargar el repositorio**:
   - Clona o descarga el repositorio en tu computadora.

   
2. **Cuenta profesional**:
   - Tener presente que la cuenta de instagram tiene que ser profesional(empresa o creador);sigue el manual de tu preferencia:
     - [CONFIGURAR CUENTA DE CREADOR EN IG](https://help.instagram.com/2358103564437429?helpref=faq_content)
     - [CONFIGURAR CUENTA EMPRESARIAL EN IG](https://help.instagram.com/502981923235522?helpref=faq_content)

     
3. **Configurar el archivo "config.php"**:
   - Dirígete al archivo `config.php`  en la ruta `includes/config.php`.
   - Define tu **TOKEN ACCES** en la variable `TOKEN_ACCES`. Si no tienes una, puedes obtenerla siguiendo los siguientes manuales en orden: 
     - [REGISTRARSE COMO DESARROLLADOR DE META](https://developers.facebook.com/docs/development/register?locale=es_ES)
     - [CREA UNA APP META PARA LA PLATAFORMA INSTAGRAM](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/create-a-meta-app-with-instagram) (Llega solo hasta la primera parte del paso 6)
     - Dirigete a **"Roles de la app/ Roles"**.
     - Presiona **"agregar personas"**, eliges la opcion **"evaluador de instagram"**, ingresas el usuario de la cuenta de instagram profesonal y finalizas presionando **"agregar"**.
     - El estado deberá estar en **"pendiente"**.
     - [INGRESA A INSTAGRAM](https://www.instagram.com/?flo=true), logeas la cuenta, dirigete a **"perfil/configuraciones/aplicaciones y sitios web/Invitaciones para evaluadores"** y por ultimo aceptas la invitacion.
     - Continuar solo con el paso 7 del manual [CREA UNA APP META PARA LA PLATAFORMA INSTAGRAM](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/create-a-meta-app-with-instagram)
     - Copia el **ACCESS TOKEN** y pégalo en la variable `TOKEN_ACCES` dentro del archivo `config.php`.
    
4. **Obtener el ID DE LA CUENTA**:
   - Para solcitar el id de la cuenta, usa `https://graph.instagram.com/me?fields=id&access_token={ACCESS_TOKEN}`, reemplaza por tu **ACCESS TOKEN** y buscalo en un navegador.
   - El **ID de la cuenta** aparecerá como parte de un bloque de código JSON, algo como esto:
     ```json
     "id": "19xxxxxxxxxxxxxxxx"
     ```
   - Copia el **ID de la cuenta** y pégalo en la variable `ID_CUENTA` dentro del archivo `config.php`.

5. **Ejecutar el proyecto**:
  Para ejecutar el proyecto en tu entorno de desarrollo local, sigue estos pasos:

---

#### Opción A: Usando XAMPP

1. **Instalar XAMPP**:
   - Si no tienes XAMPP instalado, ve a [XAMPP](https://www.apachefriends.org/es/index.html) y descarga la versión adecuada para tu sistema operativo (Windows, macOS, Linux).
   - Instala XAMPP y asegúrate de que Apache y MySQL estén corriendo.

2. **Colocar el proyecto en la carpeta "htdocs"**:
   - Dirígete a la carpeta donde instalaste XAMPP, usualmente en `C:\xampp\htdocs` (en Windows).
   - Coloca la carpeta del proyecto dentro de `htdocs` (por ejemplo, `C:\xampp\htdocs\widget_instagram_s`).

3. **Abrir el proyecto en tu navegador**:
   - Abre tu navegador y ve a `http://localhost/widget_instagram_s` (si nombraste la carpeta del proyecto "widget_instagram_s").
   - ¡El proyecto debería funcionar!

---

#### Opción B: Usando Laragon

1. **Instalar Laragon**:
   - Si prefieres usar Laragon, ve a [Laragon](https://laragon.org/) y descarga la última versión.
   - Instala Laragon en tu sistema.

2. **Colocar el proyecto en la carpeta "www"**:
   - Dirígete a la carpeta `www` dentro de Laragon (por lo general, `C:\laragon\www`).
   - Coloca la carpeta del proyecto dentro de `www` (por ejemplo, `C:\laragon\www\widget_instagram_s`).

3. **Abrir el proyecto en tu navegador**:
   - Abre tu navegador y ve a `http://localhost/widget_instagram_s` (si nombraste la carpeta del proyecto "widget_instagram_s").
   - ¡El proyecto debería funcionar!

---
