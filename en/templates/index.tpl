<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <p>
            Hello, {$name}
        </p>
        <p>
            {* access $_GET variable *}
            You are {$smarty.get.age} years old.

            {* access $_SERVER variable *}
            {$smarty.server.SERVER_NAME}
            <br>
            {$smarty.template}
        </p>
    </body>
</html>