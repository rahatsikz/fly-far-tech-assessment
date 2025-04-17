"use client";

import React, { useState } from "react";
import {
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";

export interface ComboBoxOptionProps {
  label: string;
  value: string;
  port?: string;
  company?: string;
  departurePlace?: string;
}

interface Props {
  options: ComboBoxOptionProps[];
  placeholder?: string;
  value?: ComboBoxOptionProps | null;
  onChange?: (value: ComboBoxOptionProps | null) => void;
  disabled?: boolean;
}

export function ComboBox({
  options,
  placeholder = "Select an option...",
  value = null,
  onChange,
  disabled = false,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option: ComboBoxOptionProps) => {
    onChange?.(option);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setSearch("");
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    }
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "var(--primary)",
          borderRadius: 2,
          overflow: "hidden",
          pl: 1.5,
        }}
      >
        <IconButton
          size='small'
          sx={{
            backgroundColor: "var(--primary)",
            color: "white",
            borderRadius: 0,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            px: 0.24,
            mr: 0,
            "&:hover": {
              backgroundColor: "var(--primary)",
            },
          }}
        >
          <LocationOn sx={{ color: "white", fontSize: 18 }} />
        </IconButton>
        <Button
          variant='outlined'
          disabled={disabled}
          sx={{
            textTransform: "none",
            width: "100%",
            minWidth: 230,
            justifyContent: "flex-start",
            bgcolor: "#d7e7f4",
            color: "var(--secondary)",
            borderRadius: "0px",
            border: "none",
          }}
        >
          {value ? value.label : placeholder}
        </Button>
      </Box>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement='bottom-start'
        style={{ zIndex: 1 }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper sx={{ width: 280, mt: 1.5 }}>
            <TextField
              autoFocus
              placeholder='Search ...'
              size='small'
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  "& input": {
                    padding: "10px 24px",
                    "&::placeholder": {
                      fontSize: "14px",
                      opacity: 0.8,
                    },
                  },
                  "& fieldset": {
                    border: "none",
                    borderBottom: "1px solid var(--fly-far-gray)",
                    borderRadius: 0,
                  },
                  "&.Mui-focused fieldset": {
                    borderBottom: "1px solid var(--fly-far-gray)", // <-- focus color
                  },
                },
              }}
            />

            <MenuList dense sx={{ py: 0 }}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt, idx) => (
                  <MenuItem
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      wrap: "nowrap",
                      maxWidth: 280,
                      borderBottom:
                        idx !== filteredOptions.length - 1
                          ? "1px solid var(--fly-far-gray)"
                          : "none",
                      py: idx !== filteredOptions.length - 1 ? 1.5 : 2,
                      px: 3,
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      {opt.port}
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      {opt.label}
                    </Typography>
                  </MenuItem>
                ))
              ) : (
                <Typography sx={{ px: 2, py: 1 }} variant='body2'>
                  No options found
                </Typography>
              )}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
