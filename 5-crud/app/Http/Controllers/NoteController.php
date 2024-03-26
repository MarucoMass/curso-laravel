<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
    public function index()
    {
        $notes = Note::all();
        return view('note.index', compact('notes'));
    }

    public function create()
    {
        return view('note.create');
    }

    public function store(Request $request)
    {
        // SI VOY A OPERAR CON EL DATO
            // $note = new Note();
            // $note->title = $request->title;
            // $note->description = $request->description;
            // $note->save();

        // SI SOLO LO CREO Y GUARDO EN LA BD
            // Note::create([
            //     'title' => $request->title,
            //     'description' => $request->description
            // ]);
        // Y SI LOS NAMES COINCIDEN CON LOS DATOS DEL MODELO HAY OTRO ATAJO MAS
             Note::create($request->aLL());

        return redirect()->route('note.index');
    }

    public function edit(Note $note) // se puede asignar el parametro como clase en lugar de hacer $myNote = Note::find($note)
    {
        return view('note.edit', compact('note'));
    }
}
