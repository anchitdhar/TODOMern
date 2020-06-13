import axios from "axios";


export const getList = () => {
    console.log(process.env.REACT_APP_FRONTEND_URL)
    console.log(process.env.REACT_APP_FRONTEND_URL+"api/tasks")
    console.log(process.env.REACT_APP_FRONTEND_URL == "https://todomernasmt.herokuapp.com/")
  return axios
    .get((process.env.REACT_APP_FRONTEND_URL + "api/tasks"), {
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
    .post((process.env.REACT_APP_FRONTEND_URL + "api/task"),
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
    .delete((process.env.REACT_APP_FRONTEND_URL + `api/task/${term}`), {
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

