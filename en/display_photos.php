<?php
/**
 * Created by PhpStorm.
 * User: smallfly
 * Date: 16-1-27
 * Time: 下午3:06
 */


/**
 * 获取所有root文件夹下所有的文件夹
 * @param string $root root path
 * @return array all folders
 */
function get_all_folders($root="."){
    $file_list = scandir($root, SORT_DESC);
    $all_folders = array();
    foreach($file_list as $file){
//        echo $file . "<br>";
        if ($file == "." || $file == "..")
            continue;
        $file_path = $root . DIRECTORY_SEPARATOR . $file;
        if (is_dir($file_path))
            $all_folders[] = $file_path;
    }
    return $all_folders;
}

/**
 * 获取文件夹下的图片文件
 * @param $root
 * @return array
 */
function get_all_photos($root){
    $file_list = scandir($root, SORT_DESC);
    $all_photos = array();
//    echo "the root in get_all_photos is " . $root . "<br>";
//    var_dump($file_list);
    foreach($file_list as $file){
        if ($file == "." || $file == "..")
            continue;
        $suffix = pathinfo($file, PATHINFO_EXTENSION);
        if ($suffix != "txt"){
            $file_path = $root . DIRECTORY_SEPARATOR . $file;
            $all_photos[] = $file_path;
        }
    }
    return $all_photos;
}

/**
 * 按照约定的格式,生成图片的数据文件
 * @param $root
 * @return array
 */
function sort_the_photos($root){
    $all_dirs = get_all_folders($root);
//    echo $root . " has " . count($all_dirs) . " folders" . "<br>";
    $photo_info = array();
    foreach($all_dirs as $dir){
//        $photo_info[$dir] = array();
        $all_photos = get_all_photos($dir);
        $photo_info[$dir] = $all_photos;
    }
    return $photo_info;
}

function display_photo_structure($photo_info){
    foreach($photo_info as $dir => $photos){
        echo "*" . $dir . "*" . "<br>";
        foreach($photos as $photo){
            echo "<img src=\"" . $photo . "\" />" . "<br>";
        }
    }
}

$PHOTO_DIR = "../photo";
$photo_info = sort_the_photos($PHOTO_DIR);
//display_photo_structure($photo_info);

require_once("/usr/local/lib/smarty-3.1.28/libs/Smarty.class.php");
$smarty = new Smarty();

// 所有图片的信息
$smarty->assign("photo_info", $photo_info);
// 最新的图片
$smarty->assign("latest_photos", current($photo_info));
// 图片信息的json字符串
$smarty->assign("photo_info_json", json_encode($photo_info, JSON_UNESCAPED_SLASHES));
$smarty->display("photograph.tpl");