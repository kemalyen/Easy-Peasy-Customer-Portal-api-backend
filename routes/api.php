<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\UserController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/email-verification/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify');
Route::post('/password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('api.password.email');
Route::post('/password/reset', [ResetPasswordController::class, 'reset'])->name('api.password.update');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return new UserResource($request->user());
});

Route::group(['prefix' => '/', 'middleware' => ['auth:sanctum']], function () {
//Route::group(['prefix' => '/'], function () {
    Route::get('/customers', [CustomerController::class, 'index'])->name('customers');
    Route::get('/customers/{customer}', [CustomerController::class, 'single'])->name('customers.single');

    Route::get('/customers/{customer}/users', [CustomerController::class, 'users'])->name('customers.users');
    Route::post('/customers', [CustomerController::class, 'store'])->name('customers.store');
    Route::put('/customers/{customer}', [CustomerController::class, 'update'])->name('customers.update');

    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [UserController::class, 'single'])->name('users.single');
});
