<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
            min-height: 100dvh;
            display: grid;
            place-items: center;
            background: #c1c1c1;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
    </style>
</head>
<body>
    <h1>Listado:</h1>
    @if ($users->isEmpty())
        <h2>No hay usuarios</h2>
    @else
    <ul>
        @foreach ($users as $user)
            <li>{{ $user->name }}</li>
        @endforeach
        <hr>
        @foreach ($users_menores as $user_menor)
            <li>{{ $user_menor->name }} Edad: {{$user_menor->age}}</li>
        @endforeach

    </ul>
    @endif
</body>
</html>