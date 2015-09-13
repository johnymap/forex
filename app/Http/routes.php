<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/* 
* API Routes
*/
Route::get('fetch-rates', 'ForexController@getRates');
Route::get('api/currencies', 'ForexController@getCurrencies');
Route::resource('api/order', 'ForexController@storeOrders');

//Route::get('','FrontEndController@index');

Route::get('/', function () {
    return view('forex.index');
});





