import axios from 'axios'

export default async function getPerson () {
  try {
    const pr = []
    for (let i = 0; i <= 7; i++) {
      pr.push(Math.ceil(Math.random() * 183))
    }
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${pr}`
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
//id,name,status,species,origin
