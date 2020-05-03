<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wordpress extends Model
{
    protected $table = 'wp_options';

    protected $fillable = ['option_id','option_name', 'option_value', 'autoload'];

    public $timestamps = false;
}
