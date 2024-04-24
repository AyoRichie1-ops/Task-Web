import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Import toast for displaying notifications
import 'react-toastify/dist/ReactToastify.css';
import '../styles/NewTask.css';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const redirect = useNavigate();
    const [update, setUpdate] = useState(false);
    const { taskId } = useParams();
    const url = `https://task-api-quy1.onrender.com/api/v1/tasks/${taskId}`;


    const Task = async () => {
        const { data } = await axios.get(url)
        if (data.success) {
            setTitle(data.task.title);
            setDescription(data.task.description);
        }
    }

    useEffect(() => {
        Task()
    }, [taskId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setUpdate(true);

        try {
            const { data } = await axios.patch(url, {
                title: title,
                description: description,
                tag: tag
            });
            if (data.success) {
                redirect('/all');
            } else {
                toast.error('Error occured while Updating, Try again');
            }
        } catch (error) {
            console.log(error);
        }
    };


    const top = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <h6>
                <Link className='newtask text-decoration-none' to='/all'>
                    <MdArrowBackIosNew /> New Task
                </Link>
            </h6>
            <form onSubmit={handleUpdate}>
                <div className='inputBox'>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span>Task Title</span>
                </div>
                <div className='inputBox'>
                    <textarea
                        type="text"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <span>Description</span>
                </div>
                <select value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="">Tags</option>
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                </select>
                <button type='submit' className='newtaskbtn'>
                    Done
                </button>
            </form>
            <h5 onClick={top} className='newtaskh5'>
                Back To Top
            </h5>
        </div>
    );
};

export default Edit;
