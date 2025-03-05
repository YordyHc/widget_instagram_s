<?php
require_once 'app/control/func_control.php';

$request = $_SERVER['REQUEST_URI'];

$request = strtok($request, '?');

if ($request == '/' || $request == '/widget_insta/') {
    $controller = new InstaController();
    $controller->mostrarperfil();  
} else {
    http_response_code(404);
    echo "Página no encontrada";
}
