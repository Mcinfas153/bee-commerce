<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_create()
    {

        $user = User::factory()->make();

        $userData = [
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email,
            'password' => $user->password
        ];

        $response = $this->post(route('user.store', $userData));

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'user' => [
                    'first_name',
                    'last_name',
                    'email',
                    'id',
                ]
            ]);
    }
}
