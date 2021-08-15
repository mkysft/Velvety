module.exports = (componentName) => ({
  content: `import { HTMLMotionProps } from "framer-motion";
import { ThemeTypes } from "../../core/types";

interface ${componentName}Props extends HTMLMotionProps<"div"> {
  theme: ThemeTypes;
}

export default ${componentName}Props;
  `,
  extension: `.types.tsx`,
});
