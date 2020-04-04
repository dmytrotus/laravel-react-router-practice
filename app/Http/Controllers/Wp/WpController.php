<?php

namespace App\Http\Controllers\Wp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Wordpress;

class WpController extends Controller
{
    public function index(){

    	$items = Wordpress::paginate(10);

    	return view('wp.index')->with(compact('items'));
    }

    public function updateDb(){

    	Wordpress::updateOrCreate([
		    'option_name' => $postData['option_name'],
		    'option_value' => $postData['option_value'],
		    'autoload' => $postData['autoload']
		]);

		return redirect()->back();

    }
	

}
