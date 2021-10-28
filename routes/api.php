<?php

use App\Http\Controllers\Api\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [UserController::class, 'store'])->name('user.create');
Route::post('/login', [UserController::class, 'login'])->name('user.login');
Route::get('/categories', [CategoryController::class, 'index'])->name('category.index');
Route::get('/products', [ProductController::class, 'index'])->name('products.list');
Route::get('/category/{id}/products', [CategoryController::class, 'products'])->name('category.prducts');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');