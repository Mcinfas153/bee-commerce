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
}
