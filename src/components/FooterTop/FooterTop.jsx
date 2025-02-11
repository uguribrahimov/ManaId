import React from "react";
import { useForm } from "react-hook-form";
import styles from "./FooterTop.module.css";  
import footerImage from "../../../public/assets/Footer1.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterTop = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className={`d-flex ${styles.footerTopContainer}`}>
      <div className={`d-flex align-items-center justify-content-center ${styles.footerLeft}`}>
        <img src={footerImage} alt="Interior Design" className={`img-fluid ${styles.footerImage}`} />
      </div>

      <div className={`d-flex flex-column justify-content-center p-4 ${styles.footerRight}`}>
        <h2 className={`mb-4 ${styles.footerTitle}`}>Book a Call With Our Interior Consultant</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input 
                type="text" 
                placeholder="First Name" 
                className="form-control" 
                {...register("firstName", { required: "First Name is required" })} 
              />
              {errors.firstName && <p className={`text-danger ${styles.error}`}>{errors.firstName.message}</p>}
            </div>
            <div className="col-md-6">
              <input 
                type="text" 
                placeholder="Last Name" 
                className="form-control" 
                {...register("lastName", { required: "Last Name is required" })} 
              />
              {errors.lastName && <p className={`text-danger ${styles.error}`}>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="mb-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="form-control" 
              {...register("email", { 
                required: "Email is required", 
                pattern: { 
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, 
                  message: "Invalid email address" 
                } 
              })} 
            />
            {errors.email && <p className={`text-danger ${styles.error}`}>{errors.email.message}</p>}
          </div>

          <div className="mb-3">
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="form-control" 
              {...register("phone", { 
                required: "Phone number is required", 
                pattern: { 
                  value: /^\+?[1-9]\d{1,14}$/, 
                  message: "Invalid phone number" 
                } 
              })} 
            />
            {errors.phone && <p className={`text-danger ${styles.error}`}>{errors.phone.message}</p>}
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <select className="form-select" {...register("region", { required: "Please select a region" })}>
                <option value="">Select Region</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="america">America</option>
              </select>
              {errors.region && <p className={`text-danger ${styles.error}`}>{errors.region.message}</p>}
            </div>
            <div className="col-md-6">
              <select className="form-select" {...register("enquiry", { required: "Please select a type of enquiry" })}>
                <option value="">Type of Enquiry</option>
                <option value="design">Interior Design</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
              {errors.enquiry && <p className={`text-danger ${styles.error}`}>{errors.enquiry.message}</p>}
            </div>
          </div>

          <button type="submit" className={`btn btn-light w-100 mt-3 ${styles.bookingButton}`}>Booking Call</button>
        </form>
      </div>
    </div>
  );
};

export default FooterTop;
