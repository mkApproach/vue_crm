<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;
//use Faker\Generator as Faker;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        for ($i = 1; $i <= 100; $i++) {
                Task::create([
                'emergency' => $i%2,
                'content' => $this->faker->country,
            ]);
        }
        */
        
        Task::factory()->count(100)->create();
        
        
        
     //   \App\Models\Task::factory()->count(100)->create();
        
    }
}
