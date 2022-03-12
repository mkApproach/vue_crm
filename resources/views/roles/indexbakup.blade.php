
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>{{ config('app.name', 'Laravel') }}</title>
    
    
    
    <link href="{{ mix('css/app.css') }}" 
        rel="stylesheet" type="text/css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body style="padding:10px;">
<h1>{{ config('app.name', 'Laravel') }}</h1>
    <p>{{$msg}}</p>
  

    <div id="app">
        <role-component></role-component>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>


</body>


</html> 
