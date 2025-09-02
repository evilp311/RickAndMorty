import axios from 'axios'

export default async function getLoactions () {
  try {
    const lo = []
    for (let i = 0; i <= 6; i++) {
      lo.push(Math.ceil(Math.random() * 126))
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
    console.log(e.error.massage)
  }
}
