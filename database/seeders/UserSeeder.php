<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::truncate();

        // DB::table('users')->insert([
        //     'first_name' => 'Infas',
        //     'last_name' => 'Mohammed',
        //     'email' => 'mcinfas@gmail.com',
        //     'password' => Hash::make('12345678')
        // ]);

        User::factory(10)->create();
    }
}
