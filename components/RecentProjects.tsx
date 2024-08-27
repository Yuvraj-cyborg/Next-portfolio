"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { CardSpotlight } from "./ui/CardSpotlight";
import { projects } from "@/data";
import { Compare } from "./ui/Compare";

const RecentProjects = () => {
  return (
    <div className="py-0">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-green-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-0.5 gap-5 mt-5">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                {item.title}
              </p>
              <div className="text-neutral-200 mt-2 relative z-20">
                <ul className="list-none  mt-2"></ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                {item.des}
              </p>
            </CardSpotlight>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
