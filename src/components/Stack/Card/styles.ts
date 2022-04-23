import { motion } from "framer-motion";
import styled from "styled-components";
import { boxShadow, flex } from "styles";

export const StyledCard = styled(motion.div)`
  ${flex("column", "center", "center")};
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: lightseagreen;
  cursor: pointer;
  border-radius: 0.4rem;
  box-shadow: ${boxShadow};
`;

export const StyledUnderCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 0.4rem;
`;
