<?php
class studentController extends Controller{
    
    public function index($id='',$name=''){
        $this-> loadModel('student');
        $this -> makeView('student'.DIRECTORY_SEPARATOR.'index',['students'=>$this->model->getStudents()]);
        $this -> view-> page_title = "Students";
        $this -> view -> render();
    }

}