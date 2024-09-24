import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isEqual, compareAsc, parseISO } from "date-fns";
import { useAppSelector, useAppDispatch } from "../app/hooks"; 
import { dateAdded } from "../datesSlice";
import { store } from "../app/store";
import { chosenDates } from "../datesSlice";

const ReservePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dispatch = useAppDispatch();

  // Memoize selectedDates to avoid unnecessary rerenders
  // Also possible like this 
  //const selectedDates = useAppSelector((state) => state.dates);
  
  const selectedDates = useAppSelector(chosenDates);
  const parsedDates = useMemo(() => selectedDates.map((dateStr) => new Date(dateStr)), [selectedDates]);

  const handleDateChange = () => {
    if (selectedDate) {
      const state = store.getState();
      console.log(state); // Log the dates slice of the state

      // Check if the date already exists in the array
      const isDateAlreadySelected = parsedDates.some((d) => isEqual(d, selectedDate));

      if (!isDateAlreadySelected) {
        // Convert dates to ISO strings before saving to Redux
        const updatedDates = [...parsedDates, selectedDate].map((d) => d.toISOString());
        // Sort the array by ascending order
        const sortedDates = updatedDates.sort((a, b) => compareAsc(parseISO(a), parseISO(b)));
        dispatch(dateAdded(sortedDates)); // Dispatch the sorted dates array
        setSelectedDate(null); // Reset the selected date after submission
      } else {
        alert("This date is already selected.");
      }
    } else {
      alert("Please select a date before submitting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Reserve Your Spot</h1>
      <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <label htmlFor="reservationDate" className="block text-lg mb-2">
          Select a Date:
        </label>
        <DatePicker
          id="reservationDate"
          selected={selectedDate}
          onChange={setSelectedDate} // Update the selected date when the user picks a date
          className="border p-2 rounded-lg w-full"
          minDate={new Date()}
          excludeDates={parsedDates} // Disable already selected dates
          placeholderText="Select a date"
          dateFormat="dd/MM/yyyy"
        />
        {parsedDates.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg">Selected Dates:</h3>
            <ul className="list-disc ml-5">
              {parsedDates.map((date, index) => (
                <li key={index}>{date.toDateString()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="my-8" onClick={handleDateChange}>
        Submit
      </button>
    </div>
  );
};

export default ReservePage;
