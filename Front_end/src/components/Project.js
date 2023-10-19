import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectData, setprojectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch(`*[_type=="project"]{
                title,
                slug,
                mainImage{
                  asset->{
                    _id,
                    url
                  },
                },
                description,
                projectType,
                gitHublink,
                livelink,
                tags,
            }`);
        setprojectData(data);
        setfilter(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [filter, setfilter] = useState(projectData);

  const Html_Css = () => {
    let filteritems = projectData.filter(
      (item) => item.projectType === "Html Css"
    );
    setfilter(filteritems);
  };

  const ReactJs = () => {
    let filteritems = projectData.filter(
      (item) => item.projectType === "React Js"
    );
    setfilter(filteritems);
  };

  const All = () => {
    setfilter(projectData);
  };

  return (
    <main className="mt-20 text-[#2E2B2B] lg:px-24 md:px-8 px-6">
      <section className="mx-auto">
        <div className="w-full text-center">
          <h1 className="text-xl font-semibold">-- Discover --</h1>
          <h1 className="text-4xl font-bold uppercase">My Projects</h1>
        </div>
        <div className="flex justify-center mt-4 gap-5 text-lg font-bold underline underline-offset-4">
          <button className="uppercase" onClick={() => All()}>
            All
          </button>
          <button className="uppercase" onClick={() => Html_Css()}>
            Html-CSS
          </button>
          <button className="uppercase" onClick={() => ReactJs()}>
            ReactJS
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-10">
          {filter &&
            filter.map((project, index) => (
              <article key={index}>
                <Link to={"/" + project?.slug?.current}>
                  <span className="content flex h-60 sm:h-64 w-full relative shadow border-l-4 border-[#a7bcb9] rounded-r-xl custom-shadow">
                    <img
                      src={project.mainImage.asset.url}
                      alt="..."
                      className="w-full h-full object- rounded-r-xl"
                    />
                    <span className="textContent px-4 py-2 rounded-md font-extrabold">
                      <h1 className="text-xl">{project?.title}</h1>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
