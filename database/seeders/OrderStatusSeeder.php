<?php

namespace Database\Seeders;

use App\Models\OrderStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrderStatus::truncate();

        DB::table('order_status')->insert([
            ['name' => 'PENDING'],
            ['name' => 'CONFIRMED'],
            ['name' => 'OUT_FOR_DELIVERY'],
            ['name' => 'SHIPPED'],
            ['name' => 'DELIVERD'],
            ['name' => 'RETURNED']
        ]);
    }
}
