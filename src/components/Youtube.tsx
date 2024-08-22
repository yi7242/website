import React from "react";
interface YoutubeProps {
  src: string;
}
export const Youtube: React.FC<YoutubeProps> = ({
  src,
}) => {
  return (
    <iframe
      width="100%"
      style={{ maxWidth: "660px" }}
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};
