<?php
/**
 * Created by PhpStorm.
 * User: smallfly
 * Date: 16-2-5
 * Time: 下午7:32
 */

require_once("display_photos.php");

require_once("/usr/local/lib/smarty-3.1.28/libs/Smarty.class.php");
$smarty = new Smarty();

//display_photo_structure($photo_info);

$smarty->assign("photo_info", $photo_info);
$smarty->display("photograph.tpl");