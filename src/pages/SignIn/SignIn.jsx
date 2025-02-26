import React from 'react';
import { useForm } from 'react-hook-form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-lg-6 d-flex align-items-center" style={{ height: '90vh' }}>
        <Slider {...settings} className="w-100">
  <div style={{ height: '110vh' }}>
    <img src="/assets/Image1.slide.jpg" className="w-100 h-100" alt="Slide 1" />
  </div>
  <div style={{ height: '110vh' }}>
    <img src="/assets/Image1.slide.jpg" className="w-100 h-100" alt="Slide 2" />
  </div>
  <div style={{ height: '110vh' }}>
    <img src="/assets/Image1.slide.jpg" className="w-100 h-100" alt="Slide 3" />
  </div>
</Slider>

        </div>
        <div className="col-lg-6 d-flex flex-column align-items-center bg-white p-3 rounded  h-75" style={{ fontSize: '14px' }}>
          <div className="text-center mb-2 w-100">
            <img src="/assets/image.jpg" className="mb-2 mx-auto d-block" alt="Logo" style={{ width: '80px' }} />
            <h3>Welcome to Mana.id</h3>
            <p>the best interior consultant on earth</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-100 text-center">
            <div className="mb-2 d-flex flex-column align-items-center">
              <input
                type="email"
                className="form-control w-75"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <p className="text-danger small text-start w-75">{errors.email.message}</p>}
            </div>
            <div className="mb-2 d-flex flex-column align-items-center">
              <input
                type="password"
                className="form-control w-75"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                })}
              />
              {errors.password && <p className="text-danger small text-start w-75">{errors.password.message}</p>}
            </div>
            <div className="mb-2 d-flex flex-column align-items-center">
              <button type="submit" className="btn btn-dark w-75">Login</button>
            </div>
            <div className="text-center">
              <p>Don’t have an account? <a href="/signup" className="text-primary fw-bold">Sign up for free</a></p>
              <p>or sign with</p>
              <button type="button" className="btn btn-dark w-75">Continue with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
