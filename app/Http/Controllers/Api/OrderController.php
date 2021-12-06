<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function orders()
    {
        $orders = DB::table('orders')
                ->where('user_id', 3)
                ->get();

        return $orders;
    }
}
