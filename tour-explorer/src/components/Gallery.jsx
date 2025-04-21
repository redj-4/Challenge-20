import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const TourList = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchTours = async () => {
        try {
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            if (!response.ok) { //Checking response status
                throw new Error("Failed to fetch tours");
            }
            const data = await response.json();
            setTours(data); 
        } catch (error) {
            setError(true);
            console.log(error); //Logging the error to the console
        } finally {
            setLoading(false);
        }
    };

    //Call the API when the component mounts
    useEffect(() => {
        fetchTours();
    }, []); //Use useEffec to call the API when the component mounts

    //Render loading state for API call
    if (loading) {
        return <h2>Loading...</h2>;
    }

    //Render error state for API call
    if (error) {
        return <h2>Something went wrong.</h2>;
    }

    //Render if there are no tours available //I added this part already for task 4 so here is the comment for it
    //If the tours array is empty, show a message and a button to refresh
    //This is a good user experience as it allows the user to refresh the list of tours
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours} className="refresh-btn">Refresh</button>
            </div>
        );
    }

    //Render the list of tours
    return (
        <section className="tour-list">
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id} 
                        {...tour} 
                        onRemove={onRemove} 
                    />
                );
            })}
        </section>
    );
};

export default TourList;