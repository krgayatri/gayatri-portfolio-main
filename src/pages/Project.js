import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center ml-9 gap-3  m-2 flex-wrap">
        
        <ProjectCard
          name={"Luxora"}
          image={"/project/img2.png"}
          about={
            "Luxora is a ecommerce website that provides a platform for users to buy and sell products."
          }
          demo={"https://luxora-gules.vercel.app/"}
          code={"https://github.com/krGayatri/luxora"}
        />
        <ProjectCard
          name={"Diet Recommendation system"}
          image={"/project/img1.png"}
          about={
            "Diet recommendation system is a web application that helps users to find the best diet plan for their health."
          }
          demo={"https://diet-recommendation-system-kappa.vercel.app//"}
          code={"https://github.com/krGayatri/diet_recommendation_system"}
        />
      </div>
    </div>
  );
}

export default Project;
