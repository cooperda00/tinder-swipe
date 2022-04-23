import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, flex } from "styles";

export const StyledStack = styled(motion.div)`
  ${flex("row", "center", "center")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${colors.secondary};
  border-radius: 0.4rem;
`;
