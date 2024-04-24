import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyTasks from "./pages/MyTasks";
import NewTask from "./pages/NewTask";
import Layout from "./components/Layout";
import Error from './pages/Error'
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all" element={<MyTasks />} />
            <Route path="/new" element={<NewTask />} />
            <Route path="/tasks/:taskId" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
