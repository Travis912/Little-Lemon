import "./Booking.css";
import "../App.css";
import Nav from "./Nav";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import { useReducer } from "react";
import FetchAPI from "../bookingFunctions/fetchApi";
import SubmitAPI from "../bookingFunctions/submitApi";
import { useNavigate } from "react-router-dom";

export default function BoookingPage() {
  const initialTimes = { availableTimes: FetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialTimes);

  function updateTimes() {
    return { availableTimes: FetchAPI(new Date()) };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (SubmitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <div className="booking-page">
      <Nav></Nav>
      <BookingForm
        availableTimes={state}
        dispatch={dispatch}
        submitForm={submitForm}
      ></BookingForm>
      <Footer></Footer>
    </div>
  );
}
