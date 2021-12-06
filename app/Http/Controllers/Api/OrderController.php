<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function orders()
    {
        $orders = DB::table('orders')
                ->where('user_id', Auth::user()->id)
                ->get();

        return response()->json([
            'orders' => $orders,
            'orderCount' => count($orders),
        ]);
    }
}
