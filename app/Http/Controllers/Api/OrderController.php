<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function orders()
    {
        $orders = DB::table('orders')
                ->where('user_id', Auth::user()->id)
                ->get();

        $todayOrders = DB::table('orders')
                ->whereDate('created_at', date('Y-m-d'))
                ->count();

        return response()->json([
            'todayOrders' => $todayOrders,
            'orderCount' => count($orders),
            'orders' => $orders,
        ]);
    }
}
