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

    //Render loading state
    if (loading) {
        return <h2>Loading...</h2>;
    }
}