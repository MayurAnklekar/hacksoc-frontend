import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReportCard from "../components/adminDashboard/ReportCard";
import axiosConfig from "../services/axiosConfig";

function Report() {
  const [report, setReport] = useState([]);
  const { uid } = useParams();
  console.log(uid);
  useEffect(() => {
    const fetchReports = async () => {
      const body = await axiosConfig.get("/getsubmissions");
      // console.log("what", body);
      // console.log("body", body.data);
      const filterData = body.data.filter((d) => d.uid === uid);
      setReport(filterData);
      // console.log("report", report);
    };
    fetchReports();
  }, [uid]);

  return (
    <div className="flex flex-row">
      {report.map((datas) => {
        return (
          <ReportCard
            title={datas.title}
            summary={datas.summary}
            bk={datas.bookID}
            key={datas.uid}
            uid={datas.uid}
          />
        );
      })}
    </div>
  );
}

export default Report;
