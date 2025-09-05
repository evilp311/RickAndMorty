import axios from 'axios'

export default async function getEpisodById (id = '') {
  if (!id) {
    return
  }
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    return res.data
  } catch (e) {
    console.log(e.error.masseage)
  }
}
