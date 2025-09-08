import axios from 'axios'

export default async function getAllLocations () {
  try {
    const lo = []
    for (let i = 1; i <= 126; i++) {
      lo.push(i)
    }
    const res = await axios.get(
      `https://rickandmortyapi.com/api/location/${lo}`
    )
    return res.data.map(({ id, name, type }) => ({
      id: id,
      name: name,
      type: type
    }))
  } catch (e) {
    console.log(e.error.massege)
  }
}
