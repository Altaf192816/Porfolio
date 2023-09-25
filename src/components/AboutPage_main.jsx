import AboutContent from "./AboutContent";
import TabComponent from "./TabComponent";

export function AboutPage_main() {
  return (
    <div className="h-[90vh] flex">
      <AboutContent />
      <TabComponent />
    </div>
  );
}
