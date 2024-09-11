const Usage = () => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-[#161F73] mb-4">Usage</h1>
      <div className="bg-gray-800 text-white p-4 rounded mb-4">
        <strong>Fetch API</strong>
        <div className="overflow-x-auto">
          <pre className="whitespace-pre-wrap md:whitespace-pre">
            <code>
              {`
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
              `}
            </code>
          </pre>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 rounded mb-4">
        <strong>Axios</strong>
        <div className="overflow-x-auto">
        <pre className="whitespace-pre-wrap md:whitespace-pre">
          <code>
            {`
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
              `}
          </code>
        </pre>
        </div>
      </div>
    </section>
  );
};

export default Usage;
