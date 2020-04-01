<?php
class countryController extends Controller{

    public function index($id='', $name=''){
        $this->makeView('country'.DIRECTORY_SEPARATOR.'index');
        $this-> view -> page_title = "Countires";
        $this -> view -> render();
    }

}