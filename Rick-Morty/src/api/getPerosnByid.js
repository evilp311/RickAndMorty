import axios from 'axios'

export default async function getPersonById (id = '') {
  if (!id) {
    return
  }
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    return res.data
  } catch (e) {
    console.log(e.error.massege)
  }
}
