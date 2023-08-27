import React from 'react'
import { Link } from '@inertiajs/react'
import { InertiaLink } from '@inertiajs/inertia-react';
export default function Header() {

    const logout = () => {
        Inertia.post(route('logout'));
    };
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link className="d-flex align-items-center link-body-emphasis text-decoration-none" href="/"><span className="fs-4">Customer Portal</span></Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <InertiaLink className="me-3 py-2 link-body-emphasis text-decoration-none" href="/">Home</InertiaLink>
                    <InertiaLink className="me-3 py-2 link-body-emphasis text-decoration-none" href="/customers/create">Create New Customer</InertiaLink>
                    <InertiaLink className="py-2 link-body-emphasis text-decoration-none" href="/users/create">Create New User</InertiaLink>
                    <Link href="/logout" className="py-2 mx-2 link-body-emphasis btn-link btn text-decoration-none" method="post" as="button">Logout</Link>
                </nav>

            </div>
        </header >
    )
}
