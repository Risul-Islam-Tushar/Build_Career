import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs';
import Statistics from './Components/statistics';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';
import JobDetails from './Components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobs.json") 
      },
      {
        path: "/applied-job",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,

        loader: async ({params}) => {
          const res = await fetch("/jobs.json");
          const jobs = await res.json();

          const findJob = jobs.find(job => job.id == params.jobId);
          return findJob;
        }

      },
      




      {
        path: "*",
        element: <NotFound></NotFound>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
