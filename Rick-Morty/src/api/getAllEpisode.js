import axios from 'axios'

export async function getAllEpisodes () {
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/episode`)
    return res.data.results.map(({ id, name, episode }) => ({
      id: id,
      name: name,
      episode: episode
    }))
  } catch (e) {
    console.log(e.error.massage)
  }
}
