import React, { useState } from 'react';
import Layout from '@/Shared/Layout';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Pagination from '@/Shared/Pagination';

const Dashboard = () => {
    const { customers } = usePage().props;
    const {
        data,
        meta: { links }
    } = customers;
 
    return (
        <>
            <h3>Customer List</h3>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Balance</th>
                            <th>Users</th>
                            <th>Created At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ id, name, email, status, balance, created_at }) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{status}</td>
                                    <td>{balance}</td>
                                    <td>
                                    <InertiaLink
                                            tabIndex="-1"
                                            href={`/customers/${id}/users`}
                                            className="btn btn-sm btn-primary"
                                        >
                                            User List
                                        </InertiaLink>
                                    </td>
                                    <td>{created_at}</td>
                                    <td>
                                        <InertiaLink
                                            tabIndex="-1"
                                            href={`/customers/${id}/edit`}
                                            className="btn btn-sm btn-primary"
                                        >
                                            Update
                                        </InertiaLink>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>

            <div className='mt-3'><Pagination className="m-6" links={links} /></div>


            {data.length === 0 && (
                <div className="alert alert-warning" role="alert">
                    There's no customer
                </div>
            )}
        </>
    )
}
Dashboard.layout = page => <Layout title="Dashboard" children={page} />;
export default Dashboard