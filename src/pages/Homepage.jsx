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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.
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