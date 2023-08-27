import React from 'react'
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';

const Create = () => {

  const { data, setData, errors, post, processing } = useForm({
    name: '',
    email: ''
  });
  function handleSubmit(e) {
    e.preventDefault();
    post('/customers/create');
  }
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <div className="col-sm-12">
            <input
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={e => setData('name', e.target.value)}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
        </div>
        <div className="row mb-3">
          <label className="form-label" htmlFor="email">Email Address</label>
          <div className="col-sm-12">
            <input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-sm btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>

  )
}

Create.layout = page => <Layout title="Create" children={page} />;
export default Create