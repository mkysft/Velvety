module.exports = (componentName) => ({
  content: `import React from "react";

// Velvety
import ${componentName}Props from "./${componentName}.types";
import Styled${componentName} from "./${componentName}.styled";
import ${componentName}Animation from "./${componentName}.anim";

const ${componentName} = React.forwardRef(
  ({ theme="velvet", children, ...props }: ${componentName}Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Styled${componentName}
        ref={ref}
        className="${componentName}"
        // Testing
        data-testid="${componentName}"
        // Animation
        initial="initial"
        animate="animate"
        exit="exit"
        variants={${componentName}Animation}
        // Styled
        // Props
        {...props}>
        {children}
      </Styled${componentName}>
    );
  },
);

export default ${componentName};
  `,
  extension: `.tsx`,
});
