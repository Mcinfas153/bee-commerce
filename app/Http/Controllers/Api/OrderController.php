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

        $confirmedOrders = DB::table('orders')
                ->where([
                    ['user_id', '=', Auth::user()->id],
                    ['order_status_id', '=', 3],
                ])
                ->count();

        return response()->json([
            'todayOrders' => $todayOrders,
            'confirmOrders' => $confirmedOrders,
            'orderCount' => count($orders),
            'orders' => $orders,
        ]);
    }
}
