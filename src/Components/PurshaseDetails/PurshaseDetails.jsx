import { useFormik } from "formik";
import style from "./PurshaseDetails.module.css";
import * as yup from "yup";
import { useContext } from "react";
import { cartContext } from "../../Context/cart";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function PurshaseDetails() {
  let navigate = useNavigate();
  let { cashOnDelivery, countControl } = useContext(cartContext);

  let phoneRegexp = /^01[0125][0-9]{8}$/gm;

  let validationSchema = yup.object({
    details: yup.string().min(3).max(12).required(),
    phone: yup
      .string()
      .matches(phoneRegexp, "not valid example: 0123456789")
      .required("you must enter egyption valid number"),
    city: yup.string().min(4).max(12).required("pls enter valid city name"),
  });

  async function handleSubmit(values) {
    let data = await cashOnDelivery(values);
    Swal.fire("Completed!", "order is on the way!", "success");
    countControl(0);
    navigate("/allorders");
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Helmet>
        <title>Cash on delivery</title>
        <meta name="description" content="Component" />
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">name: </label>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="name"
          name="details"
          id="details"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.details}
        />
        {formik.errors.details && formik.touched.details ? (
          <div className="alert alert-danger">{formik.errors.details}</div>
        ) : (
          ""
        )}

        <label htmlFor="phone">phone: </label>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="enter your phone number"
          name="phone"
          id="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone && formik.touched.phone ? (
          <div className="alert alert-danger">{formik.errors.phone}</div>
        ) : (
          ""
        )}
        <label htmlFor="city">address: </label>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="enter your address"
          name="city"
          id="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.errors.city && formik.touched.city ? (
          <div className="alert alert-danger">{formik.errors.city}</div>
        ) : (
          ""
        )}

        <button
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
          className="btn bg-main text-light"
        >
          finish your order
        </button>
      </form>
    </>
  );
}

export default PurshaseDetails;
