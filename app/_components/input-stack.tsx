import { ComboBox, ComboBoxOptionProps } from "@/components/ui/combo-box";
import { CalendarToday } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";

export const InputStack = ({
  label,
  airportCode,
  value,
  onChange,
  options,
  date,
  setDate,
  hideDate = false,
}: {
  label: string;
  airportCode: string;
  value: ComboBoxOptionProps | null;
  onChange: (value: ComboBoxOptionProps | null) => void;
  options: ComboBoxOptionProps[];
  date?: Dayjs | null;
  setDate?: (value: Dayjs | null) => void;
  hideDate?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      size={{ xs: 12, sm: 5.5 }}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Typography
        variant='body2'
        sx={{
          mb: 0.7,
          fontSize: { xs: "0.6rem", sm: "0.8rem" },
          pl: { xs: 0, md: 0.5 },
        }}
      >
        {label}
      </Typography>
      <Typography
        variant='h3'
        sx={{
          color: "var(--primary)",
          fontWeight: 600,
          letterSpacing: "1px",
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
          mb: 2,
          mt: 0.4,
          pl: { xs: 0, md: 0.5 },
        }}
      >
        {airportCode}
      </Typography>

      <ComboBox
        options={options}
        placeholder='Select destination'
        value={value}
        onChange={onChange}
      />
      {!hideDate && (
        <DatePicker
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          value={date}
          onChange={(newValue) => setDate && setDate(newValue)}
          slots={{
            openPickerIcon: () => null, // remove default icon
          }}
          slotProps={{
            textField: {
              onClick: () => setOpen(true), // clicking the field opens picker
              InputProps: {
                startAdornment: (
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation(); // prevent event from bubbling to input
                      setOpen(true);
                    }}
                    sx={{
                      backgroundColor: "var(--primary)",
                      color: "white",
                      borderRadius: 0,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      px: 1.5,
                      mr: 2,
                      "&:hover": {
                        backgroundColor: "var(--primary)",
                      },
                    }}
                  >
                    <CalendarToday sx={{ fontSize: 18 }} />
                  </IconButton>
                ),
                sx: {
                  mt: 2,
                  height: 36,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 2,
                  bgcolor: "#d7e7f4",
                  fontSize: "14px",

                  color: "var(--secondary)",
                  "& fieldset": {
                    border: "none",
                  },
                },
              },
              sx: {
                "& .MuiOutlinedInput-root": {
                  padding: 0,
                  "& fieldset": {
                    border: "none",
                  },
                },
              },
            },
          }}
        />
      )}
    </Grid>
  );
};
