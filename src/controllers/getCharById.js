const axios = require("axios");

const getCharById = async (req, res) => {
  const { id } = req.params;
  console.log("id=", id);

  try {
    const result = await axios(
      `http://rickandmortyapi.com/api/character/${id}`
    );
    const data = result.data;
    let character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
    console.log(character);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
