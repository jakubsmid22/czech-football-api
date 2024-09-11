const Overview = () => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-[#161F73] mb-4">Overview</h1>
      <h2 className="text-xl mb-4">
        This API provides endpoints to fetch data related to Czech football
        teams. There are two main types of data available:
      </h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>
          Simplified team data (from{" "}
          <a
            target="_blank"
            href="https://rapidapi.com/jakubsmid22/api/czech-football-api/playground/apiendpoint_6819508e-3186-46e0-88eb-7d3bf380f1a1"
            className="text-[#AEFF00] bg-[#161F73] px-1 hover:underline"
          >
            /teams
          </a>
          )
        </li>
        <li>
          Detailed team data (from{" "}
          <a
            target="_blank"
            href="https://rapidapi.com/jakubsmid22/api/czech-football-api/playground/apiendpoint_2303a740-31ef-4407-a462-7718e29484a7"
            className="text-[#AEFF00] bg-[#161F73] px-1 hover:underline"
          >
            /detailed-teams
          </a>{" "}
          and /detailed-teams/:title for a single team)
        </li>
      </ol>
    </section>
  );
};

export default Overview;
