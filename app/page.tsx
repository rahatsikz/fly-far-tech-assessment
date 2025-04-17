import { SearchTabs } from "@/components/ui/tabs";
import { tabs as tabsData } from "@/data";
import bgImage from "@/assets/images/mainbannerimg.webp";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          minHeight: "600px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            padding: {
              xs: "21px 14px 26px",
              sm: "21px 26px 26px",
              md: "26px 32px 32px",
            },
          }}
        >
          <SearchTabs tabs={tabsData} />
        </Box>
      </div>
      <div
        style={{
          backgroundColor: "black",
          opacity: "0.3",
          minHeight: "600px",
          borderRadius: "12px",
          position: "absolute",
          inset: "0",
        }}
      />
    </div>
  );
}
