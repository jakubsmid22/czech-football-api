const Endpoints = ({ titles }) => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#161F73] mb-4">Endpoints</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. GET{" "}
          <a
            target="_blank"
            href="https://rapidapi.com/jakubsmid22/api/czech-football-api/playground/apiendpoint_6819508e-3186-46e0-88eb-7d3bf380f1a1"
          >
            /teams
          </a>
        </h2>
        <p className="mb-2">
          <strong>Description:</strong> Returns a list of simplified team data.
        </p>
        <p className="mb-4">
          <strong>Response Format:</strong> JSON
        </p>

        <div className="bg-gray-800 text-white p-4 rounded mb-4">
          <strong>Response Example:</strong>
          <div className="overflow-x-auto">
            <pre className="whitespace-pre-wrap md:whitespace-pre">
              <code>
                {`
[
  {
    "id": 1,
    "name": "Bohemians Praha 1905",
    "logo": "https://bohemians.esports.cz/files/logos/znak_bohemians_velky.png",
    "founded": 1905
  },
  {
    "id": 2,
    "name": "SK Dynamo České Budějovice",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dynamo%C4%8Cesk%C3%A9Bud%C4%9Bjovice.svg/200px-Dynamo%C4%8Cesk%C3%A9Bud%C4%9Bjovice.svg.png",
    "founded": 1900
  }
  // ...other teams
]
                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <strong>Status Codes:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>200 OK:</strong> The request was successful, and the data
              is returned.
            </li>
            <li>
              <strong>500 Internal Server Error:</strong> There was an error
              fetching the teams.
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. GET{" "}
          <a
            target="_blank"
            href="https://rapidapi.com/jakubsmid22/api/czech-football-api/playground/apiendpoint_2303a740-31ef-4407-a462-7718e29484a7"
          >
            /detailed-teams
          </a>
        </h2>
        <p className="mb-2">
          <strong>Description:</strong> Returns a list of all detailed team
          data.
        </p>
        <p className="mb-4">
          <strong>Response Format:</strong> JSON
        </p>

        <div className="bg-gray-800 text-white p-4 rounded mb-4">
          <strong>Response Example:</strong>
          <div className="overflow-x-auto">
            <pre className="whitespace-pre-wrap md:whitespace-pre">
              <code>
                {`
[
  {
    "id": 1,
    "title": "bohemians",
    "name": "Bohemians Praha 1905",
    "short_name": "Bohemians Praha 1905",
    "logo": "https://bohemians.esports.cz/files/logos/znak_bohemians_velky.png",
    "nicknames": ["Klokani", "Bohemka"],
    "founded": 1905,
    "stadium": {
      "name": "Ďolíček",
      "capacity": 6300,
      "image": "https://www.geo5.cz/cache/gallery/293/DJI_0364.JPG_800_600_3e74bfd09d7ca55c02d8fc60faa4a69f.JPG"
    },
    "owner": "Ing. Dariusz Jakubowicz",
    "president": "Antonín Panenka",
    "head_coach": "Jaroslav Veselý",
    "location": {
      "country": "Czech Republic",
      "city": "Prague",
      "district": "Vršovice"
    },
    "club_website": "https://bohemians.cz/",
    "colors": {
      "primary": "Green",
      "secondary": "White",
      "hex": ["#009746", "#FEFEFE"],
      "emoji": "🟢⚪"
    },
    "achievements": {
      "league_titles": 1,
      "domestic_cups": 1
    },
    "rivals": [
      {
        "name": "SK Slavia Praha",
        "rivalry_name": "Vršovické derby",
        "reason": "regional"
      }
    ],
    "affiliatedClubs": ["FK Pardubice"],
    "mascot": "Kangaroo",
    "club_legends": [
      {
        "name": "Antonín Panenka",
        "reason": "player"
      }
    ],
    "socials": {
      "instagram": "https://www.instagram.com/bohemians_praha_1905",
      "facebook": "https://www.facebook.com/bohemians.cz",
      "x": "https://x.com/bohemians1905",
      "youtube": "https://www.youtube.com/bohemkatv",
      "tiktok": "https://www.tiktok.com/@bohemians.cz"
    }
  }
  // ...other teams
]
                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <strong>Status Codes:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>200 OK:</strong> The request was successful, and the data
              is returned.
            </li>
            <li>
              <strong>500 Internal Server Error:</strong> There was an error
              fetching the teams.
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. GET{" "}
          <a
            target="_blank"
            href="https://rapidapi.com/jakubsmid22/api/czech-football-api/playground/apiendpoint_ec3a3bee-6d6d-4001-bf56-1316ee5f7e9e"
          >
            /detailed-teams/:title
          </a>
        </h2>
        <p className="mb-2">
          <strong>Description:</strong> Returns detailed data for a specific
          team, identified by the team's title.
        </p>
        <p className="mb-2">
          <strong>URL Parameter:</strong> <u>title:</u> The title of the team
        </p>
        <p className="mb-2">
          <strong>Available Titles:</strong> {titles.join(", ")}
        </p>
        <p className="mb-4">
          <strong>Response Format:</strong> JSON
        </p>

        <div className="bg-gray-800 text-white p-4 rounded mb-4">
          <strong>Response Example:</strong>
          <div className="overflow-x-auto">
            <pre className="whitespace-pre-wrap md:whitespace-pre">
              <code>
                {`
{
  "id": 12,
  "title": "slavia",
  "name": "SK Slavia Praha - fotbal a.s.",
  "short_name": "SK Slavia Praha",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Slavia-symbol-nowordmark-RGB.png/200px-Slavia-symbol-nowordmark-RGB.png",
  "nicknames": [
    "Sešívaní",
    "Červenobílí",
    "SKS"
  ],
  "founded": 1892,
  "stadium": {
    "name": "Fortuna Arena",
    "capacity": 19370,
    "image": "https://img.ihned.cz/attachment.php/790/40760790/aosuv345BDJKLMjlPWbcdfqxz0Sw29mn/141-16-otvrk-Eden-1.jpg"
  },
  "owner": "Pavel Tykač",
  "president": "Jaroslav Tvrdík",
  "head_coach": "Jindřich Trpišovský",
  "location": {
    "country": "Czech Republic",
    "city": "Prague",
    "district": "Vršovice"
  },
  "club_website": "https://www.slavia.cz/",
  "colors": {
    "primary": "Red",
    "secondary": "White",
    "hex": [
      "#D82333",
      "#FFFFFF"
    ],
    "emoji": "🔴⚪"
  },
  "achievements": {
    "league_titles": 21,
    "domestic_cups": 11
  },
  "rivals": [
    {
      "name": "AC Sparta Praha",
      "rivalry_name": "Pražské derby",
      "reason": "historical"
    },
    {
      "name": "Bohemians Praha 1905",
      "rivalry_name": "Vršovické derby",
      "reason": "local"
    },
    {
      "name": "FK Dukla Praha",
      "rivalry_name": "Malé pražské derby",
      "reason": "local"
    },
    {
      "name": "FC Viktoria Plzeň",
      "rivalry_name": null,
      "reason": "competitive"
    }
  ],
  "affiliatedClubs": [
    "FC Sellier & Bellot Vlašim",
    "HNK Hajduk Split",
    "Zagłębie Sosnowiec"
  ],
  "mascot": null,
  "club_legends": [
    {
      "name": "Josef Bican",
      "reason": "player"
    },
    {
      "name": "František Plánička",
      "reason": "goalkeeper"
    },
    {
      "name": "Antoní Puč",
      "reason": "player"
    },
    {
      "name": "Ivo Knoflíček",
      "reason": "player"
    },
    {
      "name": "Vladimír Šmicer",
      "reason": "player"
    },
    {
      "name": "Stanislav Vlček",
      "reason": "player"
    },
    {
      "name": "John William Madden",
      "reason": "coach"
    },
    {
      "name": "Jindřich Trpišovský",
      "reason": "coach"
    }
  ],
  "socials": {
    "instagram": "https://www.instagram.com/slaviapraha/",
    "facebook": "https://www.facebook.com/SKSlaviaPrahaFotbal",
    "x": "https://x.com/slaviaofficial",
    "youtube": "https://www.youtube.com/channel/UCPi3_GbTljPZ6b2Laiw-Z5g",
    "tiktok": "https://www.tiktok.com/@slaviapraha"
  }
}
                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <strong>Status Codes:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>200 OK:</strong> The request was successful, and the data
              is returned.
            </li>
            <li>
              <strong>404 Not Found:</strong> No team was found with the
              specified title.
            </li>
            <li>
              <strong>500 Internal Server Error:</strong> There was an error
              fetching the team.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Endpoints;
