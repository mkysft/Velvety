import { ColorShades } from "../../core/colors";

// Velvety
import { ThemeTypes } from "../../core/types";

interface ThemeProps {
  primary?: ColorShades;
  secondary?: ColorShades;
  // velvet?: ColorShades;
}

interface VelvetProviderProps {
  scheme?: ThemeTypes;
  theme?: ThemeProps;
  children?: JSX.Element;
}

export default VelvetProviderProps;
