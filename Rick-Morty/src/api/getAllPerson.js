import axios from 'axios'

export default async function getAllPerson () {
  try {
    const pe = []
    for (let i = 0; i <= 826; i++) {
      pe.push(i)
    }
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${pe}`
    )
    return res.data.map(({ id, name, status, species, origin, image }) => ({
      id: id,
      name: name,
      status: status,
      species: species,
      img: image,
      org: origin.name
    }))
  } catch (e) {
    console.log(e.error.massage)
  }
}
