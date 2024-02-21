@extends('layouts.layout')

@section('title', 'Services')

@section('content')
    <h1>Services</h1>
    @component('_components.card')
        @slot('title', 'Service 1')
        @slot('content', 'Lorem impsum dolor ar atste.')
    @endcomponent
    @component('_components.card')
        @slot('title', 'Service 2')
        @slot('content', 'Lorem impsum.')
    @endcomponent
@endsection