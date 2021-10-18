<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();

        DB::table('categories')->insert([
            ['name' => 'Animals & Pet Supplies'],
            ['name' => 'Arts & Entertainment'],
            ['name' => 'Baby & Toddler'],
            ['name' => 'Business & Industrial'],
            ['name' => 'Cameras & Optics'],
            ['name' => 'Clothing & Accessories'],
            ['name' => 'Electronics'],
            ['name' => 'Food, Beverages & Tobacco'],
            ['name' => 'Furniture'],
            ['name' => 'Hardware'],
            ['name' => 'Health & Beauty'],
            ['name' => 'Home & Garden'],
            ['name' => 'Media'],
            ['name' => 'Office Supplies'],
            ['name' => 'Software'],
            ['name' => 'Sporting Goods'],
            ['name' => 'Toys & Games'],
            ['name' => 'Vehicles & Parts']
        ]);
    }
}
