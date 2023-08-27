<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\CustomerUpdateRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\CustomerCollection;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        $user = Auth::user();
 
        if ($user->hasRole('Admin')) {
            return  new UserCollection(
                User::select(['id', 'name', 'email', 'created_at', 'customer_id'])->with(['customer'])
                    ->paginate()
                    ->setPath(config('FRONTEND_URL'))
            );
        }
        return  new UserCollection(
            User::select(['id', 'name', 'email', 'created_at', 'customer_id'])
                ->where('customer_id', $user->customer_id)
                ->paginate()
                ->setPath(config('FRONTEND_URL'))
        );
    }

    public function store(UserStoreRequest $request)
    {
        $authUser = Auth::user();
        $user =  new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->customer_id = $authUser->customer_id;
        $user->password = Str::password();
        $user->save();
        $user->syncRoles($request->roles);
        
        $token = Password::getRepository()->create($user);
        $user->sendPasswordResetNotification($token);

        return  new UserResource($user);
    }

    public function single(User $user)
    {
        $customers = Customer::all();
        return  new UserResource($user);
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->email);
        $user->save();
        $user->syncRoles($request->roles);
        return  new UserResource($user);
    }
}
