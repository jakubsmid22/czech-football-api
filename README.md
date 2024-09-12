# Czech Football API

[API Link]([https://github.com/jakubsmid22/czech-football-api](https://rapidapi.com/jakubsmid22/api/czech-football-api))

### Overview
This API provides endpoints to fetch data related to football teams. There are two main types of data available:

1. Simplified team data (from /teams)
2. Detailed team data (from /detailed-teams and /detailed-teams/:title)

### Endpoints

#### 1. GET /teams

- **Description:** Returns a list of simplified team data.

-  **Response Format:** JSON

-  **Response Example:**

```
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
```

-  **Status Codes:**
    
    - **200 OK:** The request was successful, and the data is returned.

    - **500 Internal Server Error:** There was an error fetching the teams.

#### 2. GET /detailed-teams

- **Description:** Returns a list of all detailed team data.

-  **Response Format:** JSON

-  **Response Example:**

```
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
```

-  **Status Codes:**
    
    - **200 OK:** The request was successful, and the data is returned.

    - **500 Internal Server Error:** There was an error fetching the teams.

#### 3. GET /detailed-teams/:title

- **Description:** Returns detailed data for a specific team, identified by the team's title..

-  **URL Parameter::** *title:* The title of the team

-  **Response Format:** JSON

-  **Available Titles:** bohemians, budejovice, dukla, hradec, jablonec, liberec, boleslav, plzen, olomouc, banik, pardubice, slavia, slovacko, sparta, teplice, karvina

-  **Response Example:**

```
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
```

-  **Status Codes:**
    
    - **200 OK:** The request was successful, and the data is returned.

    - **404 Not Found:**  No team was found with the specified title.

    - **500 Internal Server Error:** There was an error fetching the teams.

### Usage

#### Fetch API

```
  // Fetch simplified team data
  
  const url = 'https://czech-football-api.p.rapidapi.com/teams';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '' // Your API KEY,
      'x-rapidapi-host': 'czech-football-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  
  // Fetch detailed team data
  
  const url = 'https://czech-football-api.p.rapidapi.com/detailed-teams';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '' // Your API KEY,
      'x-rapidapi-host': 'czech-football-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  
  // Fetch specific team data by title
  
  const url = 'https://czech-football-api.p.rapidapi.com/detailed-teams/slavia';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '' // Your API KEY,
      'x-rapidapi-host': 'czech-football-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
```

#### Axios

```
  // Fetch simplified team data
  
  import axios from 'axios';
  
  const options = {
    method: 'GET',
    url: 'https://czech-football-api.p.rapidapi.com/teams',
    headers: {
      'x-rapidapi-key': '' // Your API KEY,
      'x-rapidapi-host': 'czech-football-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  
  // Fetch detailed team data
  
  import axios from 'axios';
  
  const options = {
    method: 'GET',
    url: 'https://czech-football-api.p.rapidapi.com/detailed-teams',
    headers: {
      'x-rapidapi-key': '' // Your API KEY,
      'x-rapidapi-host': 'czech-football-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  
  // Fetch specific team data by title
  
  import axios from 'axios';
  
  const options = {
    method: 'GET',
    url: 'https://czech-football-api.p.rapidapi.com/detailed-teams/slavia',
    headers: {
      'x-rapidapi-key': '' // Your API KEY,
      'x-rapidapi-host': 'czech-football-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
```
