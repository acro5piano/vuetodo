<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'api'], function () {
    Route::resource('tasks',  'TaskController');
});

