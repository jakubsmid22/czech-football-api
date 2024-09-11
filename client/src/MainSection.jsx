import Endpoints from "./sections/Endpoints";
import Overview from "./sections/Overview";
import Usage from "./sections/Usage";

const MainSection = ({titles}) => {
  return (
    <main className="p-6 bg-gray-100 text-gray-900">
      <Overview />
      <Endpoints titles={titles} />
      <Usage/>
    </main>
  );
};

export default MainSection;
