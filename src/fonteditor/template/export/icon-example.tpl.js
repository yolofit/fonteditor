define(function () {return '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>icon example</title>\r\n    <link rel="stylesheet" href="./page.css">\r\n    <link rel="stylesheet" href="./icon.css">\r\n</head>\r\n<body>\r\n    <div class="main">\r\n        <h1>{%=fontFamily%} example</h1>\r\n        <ul class="icon-list">\r\n            {%_.each(glyfList, function(glyf) {%}\r\n            <li>\r\n            <i class="icon icon-{%=glyf.name%}"></i>\r\n                <div class="code">{%=glyf.codeName%}</div>\r\n                <div class="name">{%=glyf.name%}</div>\r\n            </li>\r\n            {%});%}\r\n        </ul>\r\n    </div>\r\n\r\n</body>\r\n</html>\r\n';});