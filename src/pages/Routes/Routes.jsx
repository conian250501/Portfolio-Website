import React from "react";
import { Route, Routes } from "react-router-dom";
import { PosterDetail } from "../../components/Project/PosterPage/PosterDetail/PosterDetail";
import { PosterListing } from "../../components/Project/PosterPage/PosterListing/PosterListing";
import PosterPage from "../../components/Project/PosterPage/PosterPage";
import UiPage from "../../components/Project/UiPage/UiPage";
import { Project } from "../../components/Project/WebPage/Project";

const ProjectPage = ({ id }) => {
  return (
    <div id={id}>
      <Routes>
        <Route path="/" element={<Project id="1" />} />
        <Route path="/poster" element={<PosterPage id="1" />} />
        <Route path="/poster/:posterId" element={<PosterDetail />} />
        <Route path="/ui" element={<UiPage id="1" />} />
        <Route path="/posterListing" element={<PosterListing />} />
      </Routes>
    </div>
  );
};

export default ProjectPage;
