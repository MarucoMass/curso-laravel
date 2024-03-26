@extends('layouts.layout');

@section('content')
<a href="{{ route('note.index') }}">Back</a>
    <form action="">
        <label for="name">Name:</label>
        <input type="text" name="" id="name">

        <label for="description">Description:</label>
        <input type="text" name="" id="description">

        <input type="submit" value="Send">
    </form>
@endsection