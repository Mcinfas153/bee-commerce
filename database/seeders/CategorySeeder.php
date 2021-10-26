<?php

namespace Database\Seeders;

use App\Models\Category;
use Faker\Factory;
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

        $faker = Factory::create();

        DB::table('categories')->insert([
            ['name' => 'Animals & Pet Supplies', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Arts & Entertainment', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Baby & Toddler', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Business & Industrial', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Cameras & Optics', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Clothing & Accessories', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Electronics', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Food, Beverages & Tobacco', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Furniture', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Hardware', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Health & Beauty', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Home & Garden', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Media', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Office Supplies', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Software', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Sporting Goods', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Toys & Games', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)],
            ['name' => 'Vehicles & Parts', 'slug' => '', 'image_url' => $faker->imageUrl(100, 100)]
        ]);
    }
}
