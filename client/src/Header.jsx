import { FaGithub } from "react-icons/fa";
const Header = ({ titles }) => {
  const randomIndex = Math.floor(Math.random() * titles.length);

  return (
    <header className="bg-[#161F73] text-[#AEFF00] p-4">
      <div className="text-2xl font-bold">⚽ Czech Football API</div>
      <nav className="mt-2 space-x-4 w-full text-sm md:text-base">
        <a
          target="_blank"
          href="https://rapidapi.com/jakubsmid22/api/czech-football-api"
          className="hover:text-white"
        >
          API
        </a>
        <a href="/teams" className="hover:text-white">
          Teams
        </a>
        <a href="/detailed-teams" className="hover:text-white">
          Detailed Teams
        </a>
        <a
          href={`/detailed-teams/${titles[randomIndex]}`}
          className="hover:text-white"
        >
          Random team
        </a>
        <a
          target="_blank"
          href="https://github.com/jakubsmid22/czech-league-teams-app"
          className="hover:text-white"
        >
          Example Project
        </a>
        <a
          target="_blank"
          href="https://github.com/jakubsmid22/czech-football-api"
          className="hover:text-white"
        >
          <FaGithub className="inline text-2xl" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
