import React from 'react'
import { Link } from 'react-router-dom'
const TaskHeader = ({ heading }) => {
    return (
        <div>
            <div className=" taskheader justify-content-between
            align-items-center mt-1">
                <h2 className="fw-bold">{heading}</h2>
                <p className="blue-text">
                    <Link
                        className="
                        taskheader
                        text-decoration-none fw-bold"
                        to="/new"
                    >
                        {" "}
                        <span>+ Add New Tasks</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default TaskHeader