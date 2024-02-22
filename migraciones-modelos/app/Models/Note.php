<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;

    // protected $table = "notes"; Esto se usa en el caso que el modelo no se pueda llamar igual que la tabla

    protected $fillable = ["title", "description", "deadline", "done"]; // Para determinar que campos de la tabla son manipulables

    protected $guarded; // Los campos protegidos. Por contraposicion de fillable ya esta definido

    protected $hidden; // Para evitar datos cuando se serializa
}
