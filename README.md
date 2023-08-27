## Quickstart with ReactJS InertiaJS and Laravel

This demo project includes a quickstart using InertiaJS and ReactJS. Each branch includes a different feature.  

[Inertia.js](https://inertiajs.com/)
[Laravel](https://laravel.com/)
[React](https://reactjs.org/)

## Installation

First clone the reporsitory

```sh
git@github.com:kemalyen/reactjs-inertiajs-laravel.git 
```


Run composer to install PHP dependencies:

```sh
composer install
```


Later continue for javascript libraries

```sh
npm install
```

We need to build our assets files, this will start vite with preview site

```sh
npm run dev
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

Our website must be running on 127.0.0.1 and Vite will serve the frontend codes on 127.0.0.1:5173.

Username: admin@email.com
Password: password



## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
