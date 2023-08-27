<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'Manager']);
        Role::create(['name' => 'User']);

        Customer::factory(100)
                ->has(
                        User::factory()
                                ->count(3)
                                ->hasAttached(Role::whereName('User')->first())
                                ->hasAttached(Role::whereName('Manager')->first())
                                )
                ->create();

        User::create([
            'name' => 'Admin',
            'email' => 'info@sendbox.uk',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'customer_id' => 0
        ]);

        $user = User::whereEmail('info@sendbox.uk')->first();
        $user->assignRole('Admin');

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
