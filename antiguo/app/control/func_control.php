<?php
require_once 'app/model/func_model.php'; 

class InstaController {

    public function mostrarperfil() {
        $instaModel = new InstaModel();

        $perfil = $instaModel->get_dat_perfil();  
        $posts = $instaModel->get_publicaciones();
        include $_SERVER['DOCUMENT_ROOT'] . '/widget_insta/app/view/index.php';
    }
}