<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/font-en.css">
    <script type="text/javascript" src="../js/photograph.js"></script>
    <link rel="stylesheet" href="../css/content-desktop.css">
    <link rel="stylesheet" href="../css/mode-day.css">
    <script type="text/javascript" src="../js/content-style.js"></script>
</head>
<body id="photography" class="content-page" onLoad="Loaded()">
    <div id="content-frame" style="top: 100%">
        <center><img id="title" src="../img/title.png"></center>
        <center>
        <div id="viewer">
            {*<h1 id="photo-title">Sample</h1>*}
            {*<h2 id="photographer">by Max Kwok</h2>*}
            {*<p class="photo-info">Model: Zhang Xin</p>*}
            {*<p class="photo-info">Location: HIE University, Changsha</p>*}
            {*<p class="photo-info">Time: June 17th, 2015</p>*}
            <div id="photo-list">
                {*display latest photos*}
                {foreach $latest_photos as $photo_path}
                        <img class="photos" src="{$photo_path}"><br>
                {/foreach}
        </div>
        <!--Copyright-->
        <p id="copyright">Powered by Max Kwok<br>
            © 2016 Max Kwok. All Rights Reserved</p>
        <!--Set list-->
        <div id="set-list">
                {*display all thumbnails*}
                {foreach $photo_info as $dir => $photos}
                    <a onclick="display_photos_by_folder('{$dir}')"><img class="set-thumbnail" src="{$photos[0]}"></a>
                {/foreach}
        </div>
            <p id="photo_json" style="display: none">
               {$photo_info_json}
            </p>

    </div>
        </center>
        <script type="text/javascript" src="../js/content-loading.js"></script>
</body>
</html>