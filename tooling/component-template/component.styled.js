module.exports = (componentName) => ({
  content: `import styled from "styled-components";
import { motion } from "framer-motion";

// Velvety
import ${componentName}Props from "./${componentName}.types";

const Styled${componentName} = styled(motion.div)<${componentName}Props>\`
  // Base
  position: relative;
\`;

export default Styled${componentName};
  `,
  extension: `.styled.tsx`,
});
