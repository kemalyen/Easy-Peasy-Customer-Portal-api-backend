<?php

namespace App\Repositories;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;

class CustomerRepository
{
    public function create(Request $request)
    {
        $customer =  new Customer();
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->status = ($request->status ? $request->status : 0);
        $customer->balance = ($request->balance ? $request->balance : 0);
        $customer->save();
        $this->createUserForCreatedCompany($customer->email, $customer->id);
        return $customer;
    }

    private function createUserForCreatedCompany(string $email, int $customer_id)
    {
        $user =  new User();
        $user->name = 'Customer Manager';
        $user->email = $email;
        $user->customer_id = $customer_id;
        $user->password = Str::password();
        $user->save();
        $user->syncRoles('Manager');
        $token = Password::getRepository()->create($user);
        $user->sendPasswordResetNotification($token);
    }
}
