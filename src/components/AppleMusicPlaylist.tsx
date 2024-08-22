import React from "react";
interface AppleMusicPlaylistProps {
  src: string;
}
export const AppleMusicPlaylist: React.FC<AppleMusicPlaylistProps> = ({
  src
}) => {
  return (
    <iframe
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      height="450"
      style={{
        width: "100%",
        maxWidth: "660px",
        overflow: "hidden",
        border: "0",
      }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
    ></iframe>
  );
};
