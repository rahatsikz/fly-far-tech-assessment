import { SearchTabs } from "@/components/ui/tabs";
import { tabs as tabsData } from "@/data";

export default function Home() {
  return (
    <div>
      <SearchTabs tabs={tabsData} />
    </div>
  );
}
