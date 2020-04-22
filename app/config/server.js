const userApi = "http://jsonplaceholder.typicode.com/users";

function fetchDataFromServer() {
    return fetch(userApi)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => console.error(error));
}

export { fetchDataFromServer };