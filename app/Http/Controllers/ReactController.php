<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactController extends Controller
{
    public function index(){

    	//abort(404);

    	return view('welcome-react');
    }
}
