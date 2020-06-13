import axios from "axios";

export const getList = () => {
  return axios
    .get((process.env.FRONTEND_URL + "/api/tasks") || "http://localhost:5000/api/tasks", {
      headers: { "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
             }
    })
    .then(res => {
      return res.data;
    });
};

export const addToList = term => {
  return axios
    .post((process.env.FRONTEND_URL + "/api/task") || "http://localhost:5000/api/task",
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
             }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete((process.env.FRONTEND_URL + `/api/task/${term}`) ||`http://localhost:5000/api/task/${term}`, {
      headers: { "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
             }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

