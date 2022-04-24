import ReactPlayer from "react-player";
import { FC } from "react";
import { StyledVideo } from "./styles";

type Props = {
  url: string;
};

export const Video: FC<Props> = ({ url }) => {
  return (
    <StyledVideo>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        loop
        playing
        muted
      />
    </StyledVideo>
  );
};
