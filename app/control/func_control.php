<?php
require_once 'app/model/func_model.php'; 

class InstaController {

    public function mostrarperfil() {
        $instaModel = new YouTubeModel();

        $videos = $youtubeModel->get_dat_videos();  
        $datos = $youtubeModel->get_profile();
        include $_SERVER['DOCUMENT_ROOT'] . '/widget_insta/app/view/index.php';
    }
}