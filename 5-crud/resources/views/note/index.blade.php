@extends('layouts.layout');

@section('content')
<a href="{{ route('note.create') }}">Create new note</a>
    <ul>
        @forelse ($notes as $note)
            <li><a href="#">
                {{$note -> title}}
                |
                <a href="{{ route('note.edit', $note -> id) }}">EDIT</a>
                |
                <a href="#">DELETE</a>
            </a></li>
        @empty
            <p>No hay datos</p>
        @endforelse
    </ul>
@endsection