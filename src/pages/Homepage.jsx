import React from 'react'
import Header from '../components/Header'
import task from '../assets/task.png'
import '../styles/Homepage.css'

const Homepage = () => {
    return (
        <div className='homebody'>
            <div className='home'>
                <h2 className='homeh2'>
                    Manage your Tasks on <span className='homespan'>TaskDuty</span>
                </h2>
                <p>
                    Effortlessly stay organized and boost productivity with TaskDuty, your go-to platform for task management. Whether it's personal to-dos or team projects, TaskDuty keeps you on track with intuitive tools and seamless collaboration.
                </p>
                <a href="/all
            ">
                    <button className='taskbtn'>
                        Go To My Tasks
                    </button>
                </a>
            </div>
            <div>
                <img className='taskimg' src={task} alt="" />
            </div>
        </div>
    )
}

export default Homepage