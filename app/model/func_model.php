<?php

require_once 'config.php';


class InstaModel {
    private $apiKey;
    private $id_canal;

    public function __construct() {
        $this->apiKey = TOKEN_ACCES;
        $this->id_canal = ID_CUENTA;
    }
     // Función para obtener datos desde la API de Instagram
    public function getInstagramData($url) {
        $response = file_get_contents($url);  // Hacer la solicitud a la API de Instagram
        return json_decode($response, true);  // Decodificar la respuesta JSON en un array asociativo
    }

    public function get_dat_perfil(){
        $userEndpoint = "https://graph.instagram.com/$this->id_canal?fields=id,username,name,profile_picture_url,media_count,followers_count,follows_count&access_token=$this->apiKey";
        // Obtener los datos de Instagram
        $response = file_get_contents($userEndpoint);
        return json_decode($response,true);

        // Verificar si hay datos y mostrar los resultados
        /*if (isset($instagramData['id'])) {
            // Datos obtenidos exitosamente
            $id = $instagramData['id'];
            $username = $instagramData['username'];
            $name= $instagramData['name'];
            $profile_picture_url = $instagramData['profile_picture_url'];
            $media_count = $instagramData['media_count'];
            $followers_count = $instagramData['followers_count'];
            $follows_count = $instagramData['follows_count'];
        } else {
            // Si no se obtienen datos
            echo "Error: No se pudo obtener los datos de Instagram.";
            exit;
        }*/
    }

    public function get_publicaciones(){
        $mediaEndpoint = "https://graph.instagram.com/$this->id_canal/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,like_count,comments_count&access_token=$this->apiKey";
        $response = file_get_contents($mediaEndpoint);
        $data = json_decode($response, true);
    
        // Verificar si la respuesta tiene datos válidos
        if (isset($data['data'])) {
            return $data['data']; // Retorna solo los datos de las publicaciones
        } else {
            return []; // Retorna un array vacío si no hay datos
        }
    }
}
?>