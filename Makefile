instal-vue2:
	composer require laravel/ui
	php artisan ui vue
	npm update vue-loader
	npm install
	npm run watch