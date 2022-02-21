const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios.get(`${BASE_URL}/constellations`)
         .then(response=> console.log(response.data))
           .catch(err=> console.log(err))
       
}

function create(body) {
        axios.post(`${BASE_URL}/constellations`, body)
               .then(response=> console.log(response))
                 .catch(err=> console.log(err))

}

function show(id) {
         axios.get(`${BASE_URL}/constellations/${id}`)
                .then(response=> console.log(response))
                   .catch(err=> console.log(err))
}

function update(id, body) {
          axios.put(`${BASE_URL}/constellations/${id}`, body)
                .then(response=> console.log(response))
                  .catch(err=> console.log(err))
}

function destroy(id) {
        axios.delete(`{BASE_URL}.constellations/${id}`)
              .then(response=> console.log(response))
                .catch(err=> console.log(err));
                
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
