<?php
class homeController extends Controller{

    public function index($id='',$name=''){
     //   echo $id,' ',$name;
     $this->makeView('home'.DIRECTORY_SEPARATOR.'index', ['name'=>$name, 'id'=> $id]);
     $this-> view -> page_title="Home";
     $this -> view ->render();
    }

    public function contact($id='', $name=''){
        $this->makeView('home'.DIRECTORY_SEPARATOR.'contact',['name'=>$name,'id'=>$id]);
        $this-> view -> page_title = "Contact";
        $this -> view ->render();
    }
    
}