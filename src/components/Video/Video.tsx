import ReactPlayer from "react-player";
import styled from "styled-components";
import { FC } from "react";

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

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  > .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
