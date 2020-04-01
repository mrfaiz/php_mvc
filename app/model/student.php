<?php
class student{
    protected static $data_file;
    private $students = [];

    public function __construct(){
        self :: $data_file = DATA.'students.txt';
    }

    private function load(){
        if(file_exists(self::$data_file)){
            $this -> students = file(self::$data_file);
        }
    }

    public function getStudents(){
        $this->load();
        return $this -> students;
    }
}