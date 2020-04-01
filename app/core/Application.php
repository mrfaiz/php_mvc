<?php
class Application{

    protected $controller = 'homeController';
    protected $method = 'index';
    protected $params = [];

    public function __construct(){
        $this->prepaireUrl();
        if(file_exists(CONTROLLER.$this->controller.'.php')){
            $this->controller = new $this->controller;
            if(method_exists($this->controller,$this->method)){
                call_user_func_array([$this->controller,$this->method],$this->params);
            }
        }
    }

    private function prepaireUrl(){
        $requestUri = trim($_SERVER['REQUEST_URI'],'/');
        if(!empty($requestUri)){
            $url = explode('/',$requestUri);
            $this->controller = isset($url[0])?$url[0].'Controller':'homeController';
            if(isset($url[1])){
            $this->method = $url[1];
            unset($url[0],$url[1]);
            if(!empty($url)){
                $this->params = array_values($url);
            }
        }
        }
    }
}