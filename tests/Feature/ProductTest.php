<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_all_products()
    {
        $response = $this->get(route('products.list'));

        $response->assertStatus(200)
        ->assertJsonStructure([
            'products'
        ]);
    }

    public function test_product_details()
    {
        $id = rand(1, 200);

        $response = $this->json('GET', '/api/product/'.$id);

        return $response->assertStatus(200)
        ->assertJsonStructure([
            'product'
        ]);
    }
}
