<?php

namespace App\Http\Controllers\Wp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Wordpress;
use App\WordpressImported;

class WpController extends Controller
{
    public function index(){

    	$items = Wordpress::paginate(10);

    	return view('wp.index')->with(compact('items'));
    }

    public function updateDb(){

        $importedFiles = WordpressImported::all()->toArray();

        //dd($importedFile[0]['option_name']);

        foreach($importedFiles as $importedFile){
           /* Wordpress::where('option_name', '=', $importedFile['option_name'])
            ->update([
                'option_value' => $importedFile['option_value'],
                'autoload' => $importedFile['autoload']
            ]);*/

/*            Wordpress::updateOrCreate([
                'option_id' => $importedFile['option_id'],
                'option_name' => $importedFile['option_name'],
                'option_value' => $importedFile['option_value'],
                'autoload' => $importedFile['autoload']
            ]);*/
            //$importedFile['option_name'];

        };

        foreach($importedFiles as $importedFile){

            $lastValue = Wordpress::orderBy('option_id', 'desc')->first()->option_id;
            
            $item = Wordpress::where('option_name', '=', $importedFile['option_name'])->get();

            if($item->isEmpty()){

              Wordpress::create([
                        'option_id' => $lastValue + 1,
                        'option_name' => $importedFile['option_name'],
                        'option_value' => $importedFile['option_value'],
                        'autoload' => $importedFile['autoload']
                    ]);  
                }
            
        };

        //dd($importedFile['option_name']);
		//return 'успехх!!';
        return redirect()->back();

    }


    public function fixTable(){

    }
	

}
