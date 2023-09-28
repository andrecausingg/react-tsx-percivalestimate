Route::get('/{any}', function () {
    return File::get(base_path() . '/index.html');
})->where('any', '.*');
