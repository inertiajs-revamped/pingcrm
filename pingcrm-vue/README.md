# Ping CRM

> A demo application to illustrate how [Inertia.js Revamped](https://inertiajs-revamped.com/) works with Vue.

![Screenshot](https://raw.githubusercontent.com/inertiajs-revamped/pingcrm/main/.github/assets/pingcrm-screenshot.png)

## Documentation

> **Note:**  
> Inertia.js Revamped is currently in `alpha` status and not ready for production use yet.

View the docs at [inertiajs-revamped.com](https://inertiajs-revamped.com).

## Recent Changes

- Dependencies have been updated to Vue 3 and Laravel 11.
- Components have been improved and rewritten in TypeScript.
- Overall, the code has been improved, and the dependencies have been reduced.

## Installation

Clone the repo locally:

```sh
git clone https://github.com/inertiajs-revamped/pingcrm.git
cd pingcrm/pingcrm-vue

# Install PHP dependencies:
composer install

# Install NPM dependencies:
pnpm install

# Build assets:
pnpm run build

# Setup configuration:
cp .env.example .env

# Generate application key:
php artisan key:generate

# Create an SQLite database. You can also use another database (MySQL, Postgres).
touch database/database.sqlite

# Run database migrations:
php artisan migrate

# Run database seeder:
php artisan db:seed

# Create storage link:
php artisan storage:link
```

## Running Production

```sh
# Run the dev server (the output will give the address):
php artisan serve

# Run the SSR server
php artisan inertia:start-ssr
```

You're ready to go! Visit Ping CRM in your browser and login with:

- **Username:** <johndoe@example.com>
- **Password:** secret

## Running tests

```sh
# To run the Ping CRM tests, run:
php artisan test
```

## License

Licensed under the [MIT license](https://github.com/inertiajs-revamped/pingcrm/blob/main/pingcrm-vue/LICENSE).

### Credits

This project is based on [Inertia.js](https://inertiajs.com/) by [Jonathan Reinink](https://reinink.ca/). Read the [CREDITS](https://github.com/inertiajs-revamped/inertia/blob/main/CREDITS.md).
