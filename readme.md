## Forex App

The Forex app config file is config/forex.php. This file contains a configurable email where notifications are sent to. It also contains the API key for retrieving exchange rates form currencylayer.com.

Run the Following artisan commands to create db tables and populate currencies
 php artisan migrate
 php artisan db:seed

Once you have the app running:
You can update the currencies' exchange rates with live data by running the [Fetch Rates URL](http://forex.dev/fetch-rates).

## API End-Points

/api/currencies - returns currency information
api/order - store new order

## Frontend APP

The frontend app allows you to create new orders. It is accessible on [Frontend URL](http://forex.dev/app)

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
