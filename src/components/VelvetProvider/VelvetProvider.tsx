import React, { useMemo } from "react";
import { colors } from "../../core/colors";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-weight: 500;
    box-sizing: border-box;

    /* Button */
    button, [role="button"] {
      cursor: pointer;
    }
  }
`;

// Velvety
import VelvetProviderProps from "./VelvetProvider.types";

const VelvetProvider = ({ scheme, theme, children }: VelvetProviderProps) => {
  const contextTheme = useMemo(() => {
    const defaultColors: any = colors;

    // Assign currently selected scheme
    if (scheme) {
      defaultColors.primary = defaultColors[scheme];
    } else {
      defaultColors.primary = defaultColors.velvet;
    }

    // TODO
    // 1. Merge new theme values

    const velvetTheme = {
      colors: defaultColors,
    };

    return velvetTheme;
  }, [theme]);

  return (
    <div className="VelvetProvider" data-testid="VelvetProvider">
      <ThemeProvider theme={contextTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default VelvetProvider;
