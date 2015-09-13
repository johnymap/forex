<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $fillable = array('name', 'email', 'currency_purchased', 'exchange_rate', 'amount_purchased', 'amount_paid', );
}
