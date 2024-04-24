import React, { useEffect, useState } from 'react'
import TaskHeader from '../components/TaskHeader'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import '../styles/MyTask.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorFetch from '../components/ErrorFetch';
import Empty from '../components/Empty';

const MyTasks = () => {
    const [task, setTask] = useState([])
    const [loading, setLoading] = useState(true);
    const url = 'https://task-api-quy1.onrender.com/api/v1/tasks'

    const getTasks = async () => {
        try {
            const { data } = await axios.get(url)
            setTask(data.tasks)
            const sortedTasks = data.tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setTask(sortedTasks);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    const handleDelete = async (taskId) => {
        try {
            const { data } = await axios.delete(`${url}/${taskId}`)
            if (data.success) {
                getTasks()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const taskColour = (tag) => {
        if (tag === "urgent") {
            return "text-danger"
        }
        else {
            return "text-success"
        }
    }
    useEffect(() => {
        getTasks()
    }, [])
    // if (!loading) {
    //     return <ErrorFetch />;
    // }
    if (!loading && task.length < 1) {
        return <Empty />;
    }
    if (loading) {
        return <div><Loading /></div>; // Show loading state
    }

    return (
        <div>
            <TaskHeader heading='My Tasks' />
            {
                task.map((list) => {
                    const { _id, tag, title, description } = list;
                    return (
                        <div className='mytaskbody' key={_id}>
                            <div>
                                <div className='taskheading d-flex'>
                                    <h6 className={`mytaskh6 pt-2 ${taskColour(tag)}`}>
                                        {tag}
                                    </h6>
                                    <div>
                                        <button className='taskbtn1'>
                                            <Link className='text-decoration-none text-white' to={`/tasks/${_id}`} >
                                                <FiEdit /> Edit
                                            </Link>
                                        </button>
                                        <button onClick={() => handleDelete(_id)} className='taskbtn2'>
                                            <RiDeleteBinLine /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <h2 className='mytaskh2'>
                                    {title}
                                </h2>
                                <p className='mytaskp'>
                                    {description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default MyTasks