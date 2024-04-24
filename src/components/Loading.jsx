import React from 'react'
import { Bars } from "react-loader-spinner";
const Loading = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center "
            style={{ height: `calc(100vh - 165px)` }}
        >
            <Bars
                height="80"
                width="80"
                color="#974FD0"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loading