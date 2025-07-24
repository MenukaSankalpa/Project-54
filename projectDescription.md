# XAMPP with MySQL, then backend will use Laravel with MySQL, and frontend will still be React.

set up a task management app using:

--> Laravel (Backend, REST API)

--> MySQL (via XAMPP)

--> React (Frontend)

--> GitHub (Version control)

--> Vercel (For hosting frontend only)

# FULL PROJECT STRUCTURE

📦 project-root
├── 📁 backend/         → Laravel project (API)
├── 📁 frontend/        → React project


🔁 1. Backend: Laravel API (XAMPP MySQL)
• Create Laravel project
composer create-project laravel/laravel backend

• Configure MySQL database
Open phpMyAdmin → Create DB called task_manager

In .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_manager
DB_USERNAME=root
DB_PASSWORD=

Create Models + Migrations

php artisan make:model Task -m
php artisan make:model User -m

tasks table:

Schema::create('tasks', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('description')->nullable();
    $table->date('start_date');
    $table->date('end_date');
    $table->enum('status', ['pending', 'in_progress', 'completed'])->default('pending');
    $table->foreignId('assigned_to')->constrained('users');
    $table->foreignId('created_by')->constrained('users');
    $table->timestamps();
});

users table: Laravel includes this. You’ll just add a role:


$table->enum('role', ['admin', 'user'])->default('user');

➤ Run migrations
php artisan migrate

➤ Create Auth (Laravel Breeze or Sanctum)
composer require laravel/breeze --dev
php artisan breeze:install api
php artisan migrate

2. Laravel API Routes (API only)
In routes/api.php:


// Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Protected
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'me']);
    Route::apiResource('tasks', TaskController::class);
});
Create controllers:


php artisan make:controller AuthController
php artisan make:controller TaskController --api
php artisan make:controller UserController

 1. Frontend: React App

npx create-react-app frontend
cd frontend
npm install axios react-router-dom


Connect to Laravel API:

// axios setup
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true; // if using Sanctum

4. GitHub + Hosting
   
➤ Push both frontend and backend to GitHub

git init
git remote add origin https://github.com/yourusername/task-manager
git add .
git commit -m "initial commit"
git push -u origin main

➤ Deploy frontend to Vercel
Go to https://vercel.com

Connect your repo → select /frontend folder

Set the environment variable: REACT_APP_API_URL=http://yourbackendapi.com/api

🧠 Backend on XAMPP
Run php artisan serve OR host Laravel under htdocs

Make sure CORS is enabled for localhost React app

In app/Http/Middleware/HandleCors.php, or install:

composer require fruitcake/laravel-cors

Summary

Layer	Technology
Frontend	React (Vercel)
Backend	Laravel (XAMPP, PHP)
Database	MySQL (XAMPP)
Auth	Laravel Sanctum
Hosting	Laravel locally, React on Vercel
Versioning	GitHub