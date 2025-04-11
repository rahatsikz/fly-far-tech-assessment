import { SearchTabs } from "@/components/ui/tabs";
import { tabs as tabsData } from "@/data";
import bgImage from "@/assets/images/mainbannerimg.webp";

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
        <div style={{ position: "relative", zIndex: "1" }}>
          <SearchTabs tabs={tabsData} />
        </div>
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
