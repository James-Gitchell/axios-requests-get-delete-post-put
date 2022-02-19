const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
         axios.get(`${BASE_URL}/constellations`)
                .then(Response=> console.log(Response.data))
                  .catch(error=> console.log(error))
}

function create(body) {}

function show(id) {}

function update(id, body) {}

function destroy(id) {}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
