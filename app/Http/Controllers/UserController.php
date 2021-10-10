<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {

        $request->validate([
            'first_name' => 'required|min:4',
            'last_name' => 'required|min:4',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

       $user = new User();
       $user->first_name = $request->first_name;
       $user->last_name = $request->last_name;
       $user->email = $request->email;
       $user->password = Hash::make($request->password);
       $user->save();

        return response()->json([
            'user' => $user
        ], 200);
    }
}
