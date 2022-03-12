<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/logout', 'Auth\LoginController@logout', 'logout');
Route::group(['middleware' => 'auth:web'], function () {
    Route::get('/test', function () {
        return view('app');
     });
     Route::get('/', function () {
        return view('myapp');
     });
});

Route::get('/role/json', 'RoleController@json');

Route::middleware('auth')->get('api/loginuser', 'UserController@loginuser');
/*
Route::get('/home', [HomeController::class, 'index'])->name('home');
*/

// 本当は　Route::get('/', 'TopPageController@top_page')->name('top');　だった。
Route::get('/top', 'TopPageController@top_page')->name('top');

Route::get('/users', UserController::class)->name('社員一覧')->middleware('auth');

Route::resource('/roles', RoleController::class)->middleware('auth');
Route::resource('/rolebases', RoleBaseController::class)->middleware('auth');

Route::resource('/customers', CustomerController::class)->middleware('auth');

Route::get('/customer_search', 'CustomerSearchController@index')->middleware('auth');
Route::post('/customer_search', 'CustomerSearchController@search')->middleware('auth');

Route::post('/customers/{customer}/logs', 'CustomerLogController')->middleware('auth');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
