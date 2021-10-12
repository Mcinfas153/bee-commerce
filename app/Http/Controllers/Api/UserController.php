<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

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

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::attempt($credentials)) {

            $status = true;
            $user = Auth::user();

        } else {

            $status = false;
            $user = [];

        }

        return response()->json([
            'status' => $status,
            'user' => $user
        ], 200);

    }
}
