<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Vue SPA Demo</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="spa">
        <app></app>
    </div>

    <script>
        window.App = {!! json_encode([
            'apiToken' => Auth::user()->api_token,
        ]) !!};
    </script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>