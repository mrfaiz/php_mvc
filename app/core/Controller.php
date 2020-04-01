<?php
class Controller
{
    protected $view;
    protected $model;

    public function makeView($viewName,$data=[]){
        $this->view = new View($viewName,$data);
        return $this->view;
    }

    public function loadModel($modelName){
        if(file_exists(MODEL.$modelName.'.php')){
            $this -> model = new $modelName;
        }
    }

}