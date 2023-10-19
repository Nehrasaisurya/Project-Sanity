import sanityClient from "../client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch(`*[slug.current == "${slug}"] {
          title,
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
          techused,
        }`);
        setProject(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!project) {
    return (
      <main className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70  flex justify-center items-center lg:px-24 md:px-8 px-6 z-50">
        <h1 className="text-white text-4xl font-bold">Loading....</h1>
      </main>
    );
  }

  return (
    <main className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70  flex justify-center items-center lg:px-24 md:px-8 px-6 z-50">
      <div className="w-full p-0 xl:px-32 xl:py-20">
        <div className="w-full md:w-10/12 mx-auto  bg-[#a7bcb9] px-3 py-3 md:px-6 md:pt-6 lg:px-10 lg:pt-8 rounded-md">
          <Link to="/" className="absolute top-4 right-4  text-white text-2xl">
            <FaTimes />
          </Link>
          <img
            src={project?.mainImage?.asset?.url}
            alt="..."
            className="rounded-md"
          />
          <div className="pt-7 pb-3 px-2">
            <h1 className="text-4xl md:text-5xl font-bold">{project?.title}</h1>
            <div className="divider mb-1 md:mb-2"></div>

            <div className="flex justify-between items-center">
              <div className="w-8/12">
                <h1 className="text-lg tracking-wider font-bold capitalize">
                  {project?.description}.
                </h1>
                <span className="font-bold">Tech Used : </span>
                <span className="font-bold">
                  {project?.techused.map((tag) => (
                    <span key={tag}>{tag}, </span>
                  ))}
                </span>
              </div>
              <div className="flex flex-col items-end   font-bold text-lg w-3/12">
                <a href={project?.gitHublink} target="_blank" rel="noreferrer">
                  👉🏾<span className="underline">GitHub</span>
                </a>
                <a href={project?.livelink} target="_blank" rel="noreferrer">
                  👉🏾<span className="underline">Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
