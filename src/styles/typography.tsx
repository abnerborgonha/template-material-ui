import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const typography = (palette: Palette): TypographyOptions => ({
  h1: {
    fontWeight: 500,
    fontSize: 35,
    letterSpacing: '-0.24px',
  },
  h2: {
    fontWeight: 500,
    fontSize: 29,
    letterSpacing: '-0.24px',
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: '-0.06px',
    color: palette.text.primary,
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: '-0.06px',
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.05px',
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.05px',
  },
  overline: {
    fontWeight: 500,
    color: palette.text.secondary,
  },
});

export default typography;
