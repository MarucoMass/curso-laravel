<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return view('user.index', compact('users')); 
        // compact() es lo mismo que poner el array ["users" => $users]. Se usa cuando los nombres son iguales
    }
}
