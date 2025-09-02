import axios from 'axios'

export default async function getEpisods () {
  try {
    const ep = []
    for (let i = 0; i <= 3; i++) {
      ep.push(Math.ceil(Math.random() * 51))
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
