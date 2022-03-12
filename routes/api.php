<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/role/read', 'RoleController@json');
Route::post('/role/create', 'RoleController@createnew');
Route::put('/role/update', 'RoleController@update');
Route::delete('/role/delete/{id}', 'RoleController@delete');
Route::post('/role/search', 'RoleController@search');

Route::get('/task/read', 'TaskController@read');
Route::post('/task/create', 'TaskController@create');
Route::put('/task/update', 'TaskController@update');
Route::delete('/task/delete/{id}', 'TaskController@delete');
Route::post('/task/search', 'TaskController@search');