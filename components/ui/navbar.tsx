"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "@/assets/images/companylogo.webp";
import Image from "next/image";
import { Button } from "@mui/material";

export function Navbar() {
  const buttonStyle = (color: string) => ({
    background: color,
    borderRadius: "20px",
    boxShadow: "none",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "1px",
    padding: "6px 24px",
    textTransform: "none" as const,
  });

  return (
    <AppBar
      position='static'
      style={{
        background: "white",
        padding: "20px",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Image
            src={logo.src}
            alt='logo'
            height={100}
            width={100}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "140px",
              height: "40px",
            }}
          />

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex", gap: "14px" },
            }}
          >
            <Button variant='contained' style={buttonStyle("var(--primary)")}>
              Travel Agency
            </Button>
            <Button variant='contained' style={buttonStyle("var(--secondary)")}>
              Login / Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
