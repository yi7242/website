import React from "react";
interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  imgpath?: string;
  url: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  imgpath,
  url,
}) => {
  return (
    <div className="transition relative w-full h-48 rounded-lg p-0 shadow-md hover:shadow-lg shadow-zinc-500 hover:shadow-zinc-500 bg-white border border-zinc-500 overflow-hidden">
      <a href={url} target="_blank">
        {/* 背景部分 */}
        <img className="m-0 w-full object-cover" src={imgpath}></img>
        {/* 内容部分 */}
        <div className="transition absolute top-0 left-0 w-full h-full p-4 backdrop-blur-sm hover:backdrop-blur-none bg-gradient-to-br from-zinc-900/90 to-zinc-600/80">
          <h4 className="text-base text-zinc-200 font-semibold">{title}</h4>
          <h5 className="text-sm text-zinc-300">{date}</h5>
          <p className="text-sm text-zinc-300 mt-2">{description}</p>
        </div>
      </a>
    </div>
  );
};
