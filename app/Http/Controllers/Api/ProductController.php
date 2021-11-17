<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'products' => $products
        ], 200);
    }

    public function show($id)
    {
        $product = Product::find($id);

        return response()->json([
            'product' => $product,
        ], 200);
    }

    public function search($title)
    {
        $key = $title;
        $products = DB::table('products')
                    ->where('title', 'like', '%'.$key.'%')
                    ->get();

        return response()->json([
            'products' => $products
        ], 200);
    }
}
