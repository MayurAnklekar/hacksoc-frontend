import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReportCard from "../components/adminDashboard/ReportCard";
import axiosConfig from "../services/axiosConfig";

function Report() {
  const { uid } = useParams();
  useEffect(() => {
    const fetchReports = async () => {
      const  data  = await axiosConfig.get("/getsubmissions");
      console.log( "WHAT",data);
    };
    fetchReports();
  }, []);
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <ReportCard />
      <ReportCard />
    </div>
  );
}

export default Report;
