module.exports = (componentName) => ({
  content: `import React from "react";

import ${componentName}Props from "./${componentName}.types";
import Styled${componentName} from "./${componentName}.styled";
import ${componentName}Animation from "./${componentName}.anim";

const ${componentName} = React.forwardRef(
  ({ theme="velvet", children, ...props }: ${componentName}Props, ref) => {
    return (
      <Styled${componentName}
        data-testid="${componentName}"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={${componentName}Animation}
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
