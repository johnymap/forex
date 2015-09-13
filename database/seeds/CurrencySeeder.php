<?php

use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
         DB::table('currencies')->delete();

        $currencies = array(
            array('code' => 'USDUSD', 'rate' => '0.0808279'),
            array('code' => 'USDGBP', 'rate' => '0.0527032'),
            array('code' => 'USDEUR', 'rate' => '0.0718710'),
            array('code' => 'USDKES', 'rate' => '7.81498'),
            array('code' => 'USDZAR', 'rate' => '1'),
        );
        DB::table('currencies')->insert($currencies);
    }
}