import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReportCard from "../components/adminDashboard/ReportCard";
import axiosConfig from "../services/axiosConfig";

function Report() {
  const { uid } = useParams();
  useEffect(() => {
    const fetchReports = async () => {
      const { data } = await axiosConfig.get("/getsubmissions", { "uid": uid });
      console.log(data, "WHAT");
    };
    fetchReports();
  }, [uid]);
  return (
    <div className="flex flex-row flex-wrap">
      <ReportCard />
      <ReportCard />
    </div>
  );
}

export default Report;
