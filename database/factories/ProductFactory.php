<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        Product::truncate();

        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->paragraph(),
            'qty' => $this->faker->randomDigit(),
            'price' => $this->faker->randomFloat($nbMaxDecimals = 2, 10, 10000),
            'user_id' => $this->faker->randomDigit(),
            'category_id' => $this->faker->numberBetween(1, 18),
            'picture_url' => $this->faker->imageUrl(640, 480)
        ];
    }
}
