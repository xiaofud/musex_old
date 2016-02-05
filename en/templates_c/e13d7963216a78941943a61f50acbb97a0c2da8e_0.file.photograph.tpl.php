<?php
/* Smarty version 3.1.28, created on 2016-02-05 22:09:37
  from "/home/smallfly/programming_projects/php5/musex/en/templates/photograph.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.28',
  'unifunc' => 'content_56b4ad21b892d8_49143664',
  'file_dependency' => 
  array (
    'e13d7963216a78941943a61f50acbb97a0c2da8e' => 
    array (
      0 => '/home/smallfly/programming_projects/php5/musex/en/templates/photograph.tpl',
      1 => 1454681373,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56b4ad21b892d8_49143664 ($_smarty_tpl) {
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/font-en.css">
    <?php echo '<script'; ?>
 type="text/javascript" src="../js/photograph.js"><?php echo '</script'; ?>
>
    <link rel="stylesheet" href="../css/content-desktop.css">
    <link rel="stylesheet" href="../css/mode-day.css">
    <?php echo '<script'; ?>
 type="text/javascript" src="../js/content-style.js"><?php echo '</script'; ?>
>
</head>
<body id="photography" class="content-page" onLoad="Loaded()">
    <div id="content-frame" style="top: 100%">
        <center><img id="title" src="../img/title.png"></center>
        <center>
        <div id="viewer">
            
            
            
            
            
            <div id="photo-list">
                
                <?php
$_from = $_smarty_tpl->tpl_vars['latest_photos']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_photo_path_0_saved_item = isset($_smarty_tpl->tpl_vars['photo_path']) ? $_smarty_tpl->tpl_vars['photo_path'] : false;
$_smarty_tpl->tpl_vars['photo_path'] = new Smarty_Variable();
$__foreach_photo_path_0_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_photo_path_0_total) {
foreach ($_from as $_smarty_tpl->tpl_vars['photo_path']->value) {
$__foreach_photo_path_0_saved_local_item = $_smarty_tpl->tpl_vars['photo_path'];
?>
                        <img class="photos" src="<?php echo $_smarty_tpl->tpl_vars['photo_path']->value;?>
"><br>
                <?php
$_smarty_tpl->tpl_vars['photo_path'] = $__foreach_photo_path_0_saved_local_item;
}
}
if ($__foreach_photo_path_0_saved_item) {
$_smarty_tpl->tpl_vars['photo_path'] = $__foreach_photo_path_0_saved_item;
}
?>
        </div>
        <!--Copyright-->
        <p id="copyright">Powered by Max Kwok<br>
            © 2016 Max Kwok. All Rights Reserved</p>
        <!--Set list-->
        <div id="set-list">
                
                <?php
$_from = $_smarty_tpl->tpl_vars['photo_info']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_photos_1_saved_item = isset($_smarty_tpl->tpl_vars['photos']) ? $_smarty_tpl->tpl_vars['photos'] : false;
$__foreach_photos_1_saved_key = isset($_smarty_tpl->tpl_vars['dir']) ? $_smarty_tpl->tpl_vars['dir'] : false;
$_smarty_tpl->tpl_vars['photos'] = new Smarty_Variable();
$__foreach_photos_1_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_photos_1_total) {
$_smarty_tpl->tpl_vars['dir'] = new Smarty_Variable();
foreach ($_from as $_smarty_tpl->tpl_vars['dir']->value => $_smarty_tpl->tpl_vars['photos']->value) {
$__foreach_photos_1_saved_local_item = $_smarty_tpl->tpl_vars['photos'];
?>
                    <a onclick="display_photos_by_folder('<?php echo $_smarty_tpl->tpl_vars['dir']->value;?>
')"><img class="set-thumbnail" src="<?php echo $_smarty_tpl->tpl_vars['photos']->value[0];?>
"></a>
                <?php
$_smarty_tpl->tpl_vars['photos'] = $__foreach_photos_1_saved_local_item;
}
}
if ($__foreach_photos_1_saved_item) {
$_smarty_tpl->tpl_vars['photos'] = $__foreach_photos_1_saved_item;
}
if ($__foreach_photos_1_saved_key) {
$_smarty_tpl->tpl_vars['dir'] = $__foreach_photos_1_saved_key;
}
?>
        </div>
            <p id="photo_json" style="display: none">
               <?php echo $_smarty_tpl->tpl_vars['photo_info_json']->value;?>

            </p>

    </div>
        </center>
        <?php echo '<script'; ?>
 type="text/javascript" src="../js/content-loading.js"><?php echo '</script'; ?>
>
</body>
</html><?php }
}
