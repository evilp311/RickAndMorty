import axios from 'axios'

export async function getAllEpisodes () {
  try {
    const ep = []
    for (let i = 0; i <= 51; i++) {
      ep.push(i)
    }
    const res = await axios.get(`https://rickandmortyapi.com/api/episode/${ep}`)
    return res.data.map(({ id, name, episode }) => ({
      id: id,
      name: name,
      episode: episode
    }))
  } catch (e) {
    console.log(e.error.massage)
  }
}
