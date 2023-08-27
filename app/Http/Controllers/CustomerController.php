<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\CustomerUpdateRequest;
use App\Http\Resources\CustomerCollection;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\UserCollection;
use App\Models\Customer;
use App\Repositories\CustomerRepository;

class CustomerController extends Controller
{

    public function __construct(protected CustomerRepository $customerRepository)
    {
        
    }
    public function index()
    {
        return  new CustomerCollection(
            Customer::select(['id', 'name', 'email', 'status', 'balance', 'created_at'])
            ->paginate()
            ->setPath(config('FRONTEND_URL'))
        );
    }


    public function single(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    public function users(Customer $customer)
    {
        return [
            'customer' => new CustomerResource($customer),
            'users' => new UserCollection(
                $customer->users()->paginate()
            )
        ];
    }
 
    public function store(CustomerStoreRequest $request)
    {
        $customer = $this->customerRepository->create($request);
        return new CustomerResource($customer);
    } 

    public function update(CustomerUpdateRequest $request, Customer $customer)
    {
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->status = ($request->status ? $request->status : 0);
        $customer->balance = ($request->balance ? $request->balance : 0);
        $customer->save();
        return new CustomerResource($customer);
    }
}
