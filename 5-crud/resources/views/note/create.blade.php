@extends('layouts.layout');

@section('content')
<a href="{{ route('note.index') }}">Back</a>
    <form method="POST" action="{{ route('note.store') }}">
        @csrf
        <label for="title">Title:</label>
        <input type="text" name="title" id="title">

        <label for="description">Description:</label>
        <input type="text" name="description" id="description">

        <input type="submit" value="Send">
    </form>
@endsection