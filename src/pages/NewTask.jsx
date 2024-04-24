import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import toast for displaying notifications
import 'react-toastify/dist/ReactToastify.css';
import '../styles/NewTask.css';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewTask = () => {
    const redirect = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [creating, setCreating] = useState(false);
    const url = 'http://localhost:3000/api/v1/tasks';

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCreating(true);
        if (!title || !description || !tag) {
            toast.error('Please fill all fields');
            setCreating(false);
            return;
        }
        try {
            const { data } = await axios.post(url, {
                title: title,
                description: description,
                tag: tag
            });

            if (data.success) {
                setCreating(false);
                redirect('/all');
            } else {
                toast.error('Task title already exists, create another');
                setCreating(false);
            }

            setTitle('');
            setDescription('');
            setTag('');

        } catch (error) {
            console.log(error);
        }
    };

    const top = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <ToastContainer position="top-center" />
            <h6>
                <Link className='newtask text-decoration-none' to='/all'>
                    <MdArrowBackIosNew /> New Task
                </Link>
            </h6>
            <form onSubmit={handleSubmit}>
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
                <select className='tags' value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="">----Tags----</option>
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                </select>
                <button type='submit' className='newtaskbtn'>
                    {creating ? 'Creating...' : 'Done'}
                </button>
            </form>
            <h5 onClick={top} className='newtaskh5'>
                Back To Top
            </h5>
        </div>
    );
};

export default NewTask;
