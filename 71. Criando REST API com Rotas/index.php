<?php

require 'inc/configuration.php';
require 'inc/Slim-2.x/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

// GET route
$app->get(
    '/',
    function () {

        require_once("view/index.php");

    }
);


$app->get(
    '/videos',
    function () {

        require_once("view/videos.php");

    }
);


$app->get(
    '/shop',
    function () {

        require_once("view/shop.php");

    }
);

$app->get('/produtos', function(){

    $sql = new Sql();

    $data = $sql->select("SELECT * FROM tb_produtos WHERE preco_promorcional > 0 ORDER BY preco_promorcional DESC LIMIT 3;");

    // var_dump($data);
    // exit;

    header('Content-Type: application/json; charset=utf-8');
    
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;

});

$app->run();