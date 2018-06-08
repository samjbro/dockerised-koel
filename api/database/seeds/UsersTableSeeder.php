<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class)->create([
           'name' => 'koel-admin',
            'email' => 'admin@koel.com',
            'password' => bcrypt('secret')
        ]);
    }
}
