##  Easy Peasy Portal Backend API

This demo project includes a quickstart using Sanctum Authentication for SPA and Eloquent Resources.  

## Installation

First clone the reporsitory
 
Run composer to install PHP dependencies:

```sh
composer install
```
 
Don't forget to update environment!

I prefer to use sqlite, easy and basic. This will also create 

So update environment file to use with sqlite:

```sh
DB_CONNECTION=sqlite 
```

and now Laravel will create a sample database and create the structure for us.

```sh
php artisan migrate
```

Now let's put some sample data

```sh
php artisan db:seed
```

And now start the built in server

```sh
php artisan serve
```

Our website must be running on localhost and Vite will serve the frontend codes on localhost:5173.

Username: admin@example.com
Password: password

Sample .env

```sh
FRONTEND_URL=http://localhost:5173

SANCTUM_STATEFUL_DOMAINS=localhost:5173
SESSION_DOMAIN=localhost
```



## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
