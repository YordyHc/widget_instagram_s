<?php

require_once __DIR__ . '/../../includes/config.php';


class InstaModel {
    private $apiKey;
    private $id_canal;

    public function __construct() {
        $this->apiKey = TOKEN_ACCES;
        $this->id_canal = ID_CUENTA;
    }
    
    public function get_dat_perfil(){
        $userEndpoint = "https://graph.instagram.com/$this->id_canal?fields=id,username,name,profile_picture_url,media_count,followers_count,follows_count&access_token=$this->apiKey";
        // Obtener los datos de Instagram
        $response = file_get_contents($userEndpoint);
        return json_decode($response,true);
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