"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter, Arial, sans-serif", // your custom font here
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            src: local('Inter'), url('/fonts/inter.woff2') format('woff2');
          }
        `,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main style={{ flex: 1 }}>{children}</main>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
