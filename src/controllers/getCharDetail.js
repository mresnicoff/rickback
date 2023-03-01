const axios = require("axios");

const getCharDetail = async (req, res) => {
  console.log("hola");
  const { id } = req.params;
  console.log(id);
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = result.data;
    console.log(data);
    let character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharDetail;
