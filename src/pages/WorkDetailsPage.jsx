import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import WorkHeaderPage from "../components/works/WorkHeaderPage";


const WorkDetailsPage = () => {
  const { id } = useParams();

  const work = useSelector((state) =>
    state.works.items.find((item) => item.id === Number(id)),
  );

  if (!work) {
    return <div className="text-center py-20 text-white">Work not found</div>;
  }

  return (
    <div className="bg-[#001412]">
      <WorkHeaderPage work={work} />
      {/* <WorkDetails work={work} />
      <WorkImage work={work} />
      <SelectedPageofWork currentId={work.id} /> */}
    </div>
  );
};

export default WorkDetailsPage;
