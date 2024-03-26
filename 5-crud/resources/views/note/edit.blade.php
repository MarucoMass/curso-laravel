@extends('layouts.layout');

@section('content')
<a href="{{ route('note.index') }}">Back</a>
<form method="POST" action="#">
    @csrf
    <label for="title">Title:</label>
    <input type="text" name="title" id="title" value="{{ $note->title }}">

    <label for="description">Description:</label>
    <input type="text" name="description" id="description" value="{{ $note->description }}">

    <input type="submit" value="Update">
</form>
@endsection