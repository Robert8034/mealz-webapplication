const apiUrl = "https://localhost:5001/"

const register = `${apiUrl}register`;
const login = `${apiUrl}authenticate`;
const testGet = `${apiUrl}name`;

const actions = {
    register: register,
    login: login,
    testGet: testGet
};

export default actions;