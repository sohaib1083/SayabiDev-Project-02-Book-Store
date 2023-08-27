import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:1000/api/v1/getBooks");
                setBooks(response.data); // Assuming the response contains an array of books
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
            <div className="d-flex justify-content-center align-iems-center py-3">
                <h4 className="text-white">Books Section</h4>
            </div>
           
        </div>
    );
};

export default Books;
