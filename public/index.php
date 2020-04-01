<?php

const DS = DIRECTORY_SEPARATOR;
const PS = PATH_SEPARATOR;

define('ROOT', dirname(__DIR__).DS);
define('APP', ROOT.'app'.DS);
define('CONTROLLER', APP.'controller'.DS);
define('MODEL', APP.'model'.DS);
define('VIEW', APP.'view'.DS);
define('CORE', APP.'core'.DS);
define('DATA', APP.'data'.DS);
$modules=[ROOT,APP, MODEL, VIEW, CONTROLLER, CORE, DATA];

set_include_path(get_include_path().PS.implode(PS, $modules));
spl_autoload_register('spl_autoload',false);

new Application;
//echo get_include_path();
//echo $_SERVER['REQUEST_URI'];