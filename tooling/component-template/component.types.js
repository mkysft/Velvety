module.exports = (componentName) => ({
  content: `import React from "react";
import { HTMLMotionProps } from "framer-motion";

// Velvety
import { ThemeTypes } from "../../core/types";

interface ${componentName}Props extends HTMLMotionProps<"div"> {
  theme: ThemeTypes;
}

export default ${componentName}Props;
  `,
  extension: `.types.tsx`,
});
