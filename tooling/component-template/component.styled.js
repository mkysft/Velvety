module.exports = (componentName) => ({
  content: `import styled from "styled-components";
import { motion } from "framer-motion";

const Styled${componentName} = styled(motion.div)\`
  position: relative;
\`;

export default Styled${componentName};
  `,
  extension: `.styled.tsx`,
});
