import axios from 'axios'

export default async function getLocationByID (id = '') {
  if (!id) {
    return
  }

  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/location/${id}`
    )
    return res.data
  } catch (e) {
    console.log(e.error.massege)
  }
}
