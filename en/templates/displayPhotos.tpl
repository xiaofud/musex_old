<!doctype html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
{*display all photos*}
    {foreach $photo_info as $dir => $photos}
        【{$dir}】 has: <br>
        <ol>
            {foreach $photos as $photo_path}
                <li class="img_link">
                    {*<img src="{$photo_path}"><br>*}
                    <a style="color: red;" href="{$photo_path}">{$photo_path}</a>
                </li>
            {/foreach}
        </ol>
    {/foreach}

</body>
</html>