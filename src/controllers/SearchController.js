const Dev = require('../models/Dev');
const parseStringAsArray = require('../utis/parseStringAsArray');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    // busca todos devs num raio 10km
    // Filtrar por tecnologias

    return response.json({ devs });
  }
}