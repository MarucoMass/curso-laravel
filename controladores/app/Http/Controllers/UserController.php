<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return view('user.index', compact('users')); 
        // compact() es lo mismo que poner el array ["users" => $users]. Se usa cuando los nombres son iguales
    }
    public function create(){
        $user = new User();
        $user->name="Robson";
        $user->email = "robson@mail.com";
        $user->password= Hash::make('12312321');
        $user->age= 40;
        $user->address = "mitre 123";
        $user-> zip_code = 1231;
        $user->save();

        User::create([
        "name"=> "Roberto",
        "email"=> "rober@mail.com",
        "password"=> Hash::make('12312321'),
        "age"=> 23,
        "address"=> "mitre 123",
        "zip_code"=> 1231
        ]); // otra manera de crear el user
        
        return redirect()->route('user.index');

    }
}
