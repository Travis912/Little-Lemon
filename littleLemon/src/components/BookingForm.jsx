/* eslint-disable react/prop-types */

import { useState} from "react";

export default function BookingForm(props) {
    // const [state, dispatch] = useReducer(updateTimes, InitializeTimes);
    const [date, setDate] = useState("")
    const [occasion, setOccasion] = useState('none');
    const [guests, setGuests] = useState(1);
    const [times, setTimes] = useState()

    function handleChange(e) {
        setDate(e);
        props.dispatch(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e)
    }

    return (
        <div>
            <form className="reservations-form" onSubmit={handleSubmit}>
                <h2>Book Now</h2>
                <label htmlFor="res-date">Choose Date:</label>
                <input type="date" id="res-date" value={date} required onChange={(e) => {
                    handleChange(e.target.value)
                }}></input>

                <label htmlFor="res-time">Choose Time:</label>
                <select id="res-time" value={times}>
                    <option value="" onChange={(e) => {
                        setTimes(e.target.value)
                    }}>Select a Time</option>
                    {
                        props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                    }
                </select>

                <label htmlFor="guests">Number of Guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(event) => {
                    setGuests(event.target.value)
                }}></input>

                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" key={occasion} value={occasion} onChange={(event) => {
                    setOccasion(event.target.value)
                }}>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                    <option>None</option>
                </select>

                <input aria-label="On Click" className='submit-btn' type="submit" value="Make Your reservation" onClick={props.submitForm}></input>
            </form>
        </div>
    )
}

