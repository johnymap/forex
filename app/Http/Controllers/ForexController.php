<?php

namespace App\Http\Controllers;

use App\Currency;
use App\Order;
use Request;
use App\Http\Requests\OrderRequest;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;

class ForexController extends Controller
{
    //
    public function getRates()
    {
        $api_url = Config::get("forex.api_url");
        $api_key = Config::get("forex.api_key");
        $currencies = Config::get("forex.currencies");

        // Initialize CURL:
        $ch = curl_init($api_url.'='.$api_key.'&currencies='.$currencies.'&source=&format=1');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Store the data:
        $json = curl_exec($ch);
        curl_close($ch);

        // Decode JSON response:
        $exchangeRates = json_decode($json, true);

        if($exchangeRates['success']){
            
            foreach ($exchangeRates['quotes'] as $code => $rate) {
                Currency::where('code', $code)
                ->update(['rate' => $rate]);
            }
        }
        else{
            echo "Error getting Rates";
            dd($exchangeRates);
        }
    }

    public function getCurrencies()
    {
        return json_decode(Currency::all());
    }

    public function storeOrders()
    {
        // dd();
        $order = new Order(Request::all());
        $order->save();
        return $order;

        $surcharge_percentage = 0;

        $data = ['name' => trim($request->name), 
                 'email' => trim($request->email),
                 'currency_purchased' => trim($request->currency_purchased), 
                 'exchange_rate' => trim($request->exchange_rate), 
                 'amount_paid' => trim($request->amount_paid),
                ];

        if (trim($data['currency_purchased']) == 'USDGBP')
            Helpers::sendMail($data, 'GBP Ordered');

        // return response()->json(['message' => 'success']);
    }
}
