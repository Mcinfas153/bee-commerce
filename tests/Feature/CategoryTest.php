<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_list_categories()
    {
        $response = $this->get(route('category.index'));
        $response
        ->assertStatus(200)
        ->assertJsonStructure([
            'categories'
        ]);
    }

    public function test_get_category_products()
    {
        $id = rand(1,18);

        $response = $this->json('GET', '/api/category/'.$id.'/products');
        
        return $response->assertStatus(200)
        ->assertJsonStructure([
            'products'
        ]);
    }
}
