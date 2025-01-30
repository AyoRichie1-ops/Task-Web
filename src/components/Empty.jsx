// import React from "react";
import { Link } from "react-router-dom";
import '../styles/ErrorFetch.css';

const Empty = () => {
    return (
        <div
            className="text-center d-flex justify-content-center align-items-center"
            style={{ height: `calc(100vh - 165px)` }}
        >
            <div>
                <h3 className="emptyh3">No Task to display, Create new Tasks</h3>
                <button className=" emptybtn">
                    <Link className="text-decoration-none text-white" to="/new" >
                        + Create New Tasks
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Empty;
