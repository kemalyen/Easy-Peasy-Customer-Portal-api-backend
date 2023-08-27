import React from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Layout from '@/Shared/Layout';

const Edit = () => {
    const { customer } = usePage().props;

    const { data, setData, errors, post, processing } = useForm({
        name: customer.data.name || "",
        email: customer.data.email || "",
        balance: customer.data.balance || "",
        status: customer.data.status === 'Active' ? '1' : '0' || '0',
        _method: "PUT",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(customer)
        post(`/customers/${customer.data.id}/edit`);
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>

                <div className="row mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <div className="col-sm-12">
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            type="text"
                            errors={errors.name}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <div className="col-sm-12">
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="form-label" htmlFor="email">Status</label>
                    <div className="col-sm-12">

                        <select className="form-select" id="status"
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}
                            name="status">
                            <option value=""> ---- </option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>

                        {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="form-label" htmlFor="balance">Balance</label>
                    <div className="col-sm-12">
                        <input
                            className="form-control"
                            id="balance"
                            name="balance"
                            type="text"
                            errors={errors.balance}
                            value={data.balance}
                            onChange={(e) => setData("balance", e.target.value)}
                        />
                        {errors.balance && <div className="invalid-feedback">{errors.balance}</div>}
                    </div>
                </div>

                <div className="mb-3">
                    <button className="btn btn-sm btn-primary" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit" children={page} />;
export default Edit;
