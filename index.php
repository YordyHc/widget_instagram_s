<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap.min.css" rel="stylesheet"> </link>
    <title>Document</title>
</head>
<body>
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
?>
</body>
</html>

