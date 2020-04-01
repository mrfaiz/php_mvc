<?php
class View{
    protected $view_name;
    protected $view_data = [];
    public $page_title="Welcome !";
    private $view_extension = '.phtml';
    public function __construct($view,$data){
        $this->view_name = $view;
        $this->view_data = $data;
    }

    public function render(){
        if(file_exists(VIEW.$this->view_name.$this ->view_extension)){
            include VIEW.$this->view_name.$this ->view_extension;
        }
    }

    public function getAction(){
        $viewName=explode('\\',$this->view_name)[1];
        if($viewName=='index'){
            $viewName=explode('\\',$this->view_name)[0];
        }
        return $viewName;
    }
}