//Task 2: Dropdown Menu for Tour Destinations
import React from 'react';

//A dropdown menu component for choosing a tour destination.
const DestinationSelector = ({ tours, selectedTour, setSelectedTour }) => {
  return (
    <div className="destination-selector">
      {/* Label for the dropdown menu */}
      <label htmlFor="destination">Choose a Destination:</label>
      
      <select
        id="destination"
        
        value={selectedTour}
        
        //Updates the selected destination when changed
        onChange={(e) => setSelectedTour(e.target.value)} 
      >
        {/* Option to show all destinations */}
        <option value="all">All Destinations</option>
        
        {/* Generates options for each tour in the tours array */}
        {tours.map((tour) => (
          <option key={tour.id} value={tour.name}>
            {/* Displays the name of the tour */}
            {tour.name} 
          </option>
        ))}
      </select>
    </div>
  );
};
// This component is used to select a destination from a list of tours.
export default DestinationSelector;