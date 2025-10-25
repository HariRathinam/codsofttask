import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}
