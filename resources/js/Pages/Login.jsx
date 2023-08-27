import React from 'react'
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';


const Login = () => {
  const { customer } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    email: '',
    password: '',
    remember: true
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(`/login`);
  }
  return (
    <div className="d-flex align-items-center justify-content-center">
      <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="form-label" htmlFor="email">Email Address</label>
          <div className="col-sm-6">
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="form-label" htmlFor="name">Password</label>
          <div className="col-sm-6">
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              errors={errors.password}

              onChange={e => setData('password', e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-sm btn-primary m-2" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.layout = page => <Layout title="Login" children={page} />;
export default Login