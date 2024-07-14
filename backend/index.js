const axios = require('axios');
const express = require('express');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())

async function fetchTimeData() {
  try {
    const response = await axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=730DAC0B860974BA4FBA47D5AD391FDD&steamid=76561199482112464&format=json'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching time data:', error);
    throw error; 
  }
}

async function fetchKillData() {
  try {
    const response = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=730DAC0B860974BA4FBA47D5AD391FDD&steamid=76561199482112464'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching kill data:', error);
    throw error; 
  }
}

app.get('/playtime', async (req, res) => {
  try {
    const fetchedData = await fetchTimeData();
    let playTimeForever = 0;
    if (fetchedData && fetchedData.response && fetchedData.response.games) {
      for (let i = 0; i < fetchedData.response.games.length; i++) {
        if (fetchedData.response.games[i].appid === 730) {
          playTimeForever = fetchedData.response.games[i].playtime_forever;
          break;
        }
      }
    }
    res.json({ playTimeForever });
  } catch (error) {
    console.error('Error in /playtime endpoint:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/maxkills', async (req, res) => {
  try {
    const fetchedData = await fetchKillData();
    let maxKills = 0;
    if (fetchedData && fetchedData.playerstats && fetchedData.playerstats.stats) {
      for (let i = 0; i < fetchedData.playerstats.stats.length; i++) {
        if (fetchedData.playerstats.stats[i].name === 'total_kills') {
          maxKills = fetchedData.playerstats.stats[i].value;
          break;
        }
      }
    }
    res.json({ maxKills });
  } catch (error) {
    console.error('Error in /maxkills endpoint:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
