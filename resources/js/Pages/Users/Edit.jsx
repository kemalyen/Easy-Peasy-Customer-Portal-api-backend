import React from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Layout from '@/Shared/Layout';

const Edit = () => {
    const { user, customers } = usePage().props;

    const { data, setData, errors, post, processing } = useForm({
        name: user.data.name || "",
        email: user.data.email || "",
        customer_id: user.data.customer_id || "",

        _method: "PUT",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(`/users/${user.data.id}/edit`);
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>

                <div className="row mb-3">
                    <label className="form-label" htmlFor="name">Customer</label>
                    <div className="col-sm-12">
                        <select className="form-select form-select-lg" name="customer_id" id="customer_id"
                            onChange={e => setData('customer_id', e.target.value)}
                            value={data.customer_id}>
                            <option value=""></option>
                            {customers.data.map(({ id, name }) => (
                                <option key={id} value={id}>
                                    {name}
                                </option>
                            ))}
                        </select>

                        {errors.customer_id && <div className="invalid-feedback">{errors.customer_id}</div>}
                    </div>
                </div>
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
                <div className="mb-3">
                    <button className="btn btn-sm btn-primary" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit" children={page} />;
export default Edit;
