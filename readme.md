## Forex App

This App's backend is built in Laravel. The Frondend is built in Angular.js.

## Deployment

Clone the repo.

Run - Composer update

Create a Database.
Add Database details in .env file. located in the root directory of the application.

Configure App setting.

The Forex app config file is config/forex.php. This file contains a configurable email where notifications are sent to. It also contains the API key for retrieving exchange rates form currencylayer.com.

Run the Following artisan commands to create db tables and populate currencies

 php artisan migrate

 php artisan db:seed

Once you have the app running:
You can update the currencies' exchange rates with data from CurrencyLayer by running the [Fetch Rates URL](http://forex.dev/fetch-rates).

## API End-Points

/api/currencies - returns currency information
api/order - store new order

## Frontend APP

The frontend app allows you to create new orders. It is accessible on [Frontend URL](http://forex.dev/app).
It is located in the laravel's public/app folder.

