<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'currentUser' => $request->user()
        ]);
    }
}
