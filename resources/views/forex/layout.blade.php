<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Forex</title>

    <link href="{{ asset('/css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('/css/steps.css') }}" rel="stylesheet" />
    <!--AngularJS-->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular.min.js"></script>
    <script src="{{ asset('/app/js/app.js') }}"></script>

    @yield('styles')
    <!--[if lt IE 9]>
    <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

@yield('content')

<script src="{{ asset('/bower/jquery/dist/jquery.min.js') }}"></script>
{{--<script src="{{asset('/bower/bootstrap-sass/assets/javascripts/bootstrap.min.js')}}"></script>--}}

@yield('scripts')

</body>
</html>