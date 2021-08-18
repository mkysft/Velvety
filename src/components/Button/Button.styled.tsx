import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import ButtonProps from "./Button.types";

const StyledButton = styled(motion.button)<ButtonProps>`
  /* Base */
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Default */
  color: white;
  background-color: ${(props) => props.theme.colors.primary[500]};
  border: 0.125rem solid ${(props) => props.theme.colors.primary[500]};
  border-radius: 0.25rem;
  cursor: pointer;
  /* States */
  &:hover {
    background-color: ${(props) => props.theme.colors.primary[600]};
    border-color: ${(props) => props.theme.colors.primary[600]};
  }
  &:focus {
    box-shadow: 0 0 0 0.1875rem ${(props) => props.theme.colors.primary[100]};
  }

  /* CSS Animations */
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;

  /* Size - Medium :: 4 x 16 */
  ${(props) =>
    props.size === "sm" &&
    css`
      height: 1.75rem;
      font-size: 0.75rem;
      line-height: 0.75rem;
      padding: 0.25rem 1rem;
    `};

  /* Size - Medium :: 8 x 24 */
  ${(props) =>
    props.size === "md" &&
    css`
      height: 2.25rem;
      font-size: 1rem;
      line-height: 1rem;
      padding: 0.5rem 1.5rem;
    `};

  /* Size - Medium :: 16 x 48 */
  ${(props) =>
    props.size === "lg" &&
    css`
      height: 3.5rem;
      font-size: 1.25rem;
      line-height: 1.25rem;
      padding: 1rem 3rem;
    `};

  /* Variant - Solid */
  ${(props) => props.variant === "solid" && css``};

  /* Variant - Outline */
  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.primary[500]};
      &:hover {
        background-color: ${(props) => props.theme.colors.primary[50]};
      }
    `};

  /* Variant - Icon :: Small, Medium, Large */
  ${(props) =>
    props.variant === "icon" &&
    props.size === "sm" &&
    css`
      padding: 0.25rem;
    `};

  ${(props) =>
    props.variant === "icon" &&
    props.size === "md" &&
    css`
      padding: 0.5rem;
    `};

  ${(props) =>
    props.variant === "icon" &&
    props.size === "lg" &&
    css`
      padding: 1rem;
    `};

  /* Variant - Text */
  ${(props) =>
    props.variant === "text" &&
    css`
      border: none;
      background-color: transparent;
      color: ${(props) => props.theme.colors.primary[500]};
      &:hover {
        background-color: ${(props) => props.theme.colors.primary[50]};
      }
    `};

  /* Props - Fullwidth */
  ${(props) =>
    props.fullwidth === true &&
    css`
      width: 100%;
    `};

  /* Props - Disabled */
  ${(props) =>
    props.disabled === true &&
    css`
      background-color: ${(props) => props.theme.colors.primary[50]};
    `};
`;

export default StyledButton;
