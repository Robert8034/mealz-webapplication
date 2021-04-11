const apiUrl = "https://localhost:50001/"

//Controllers
const authenticationController = `${apiUrl}authentication/`;
const userController = `${apiUrl}userservice/`;

//Endpoints
const register = `${apiUrl}register`;
const login = `${apiUrl}authenticate`;
const fetchUserId = `${authenticationController}readToken`;
const fetchAccountInfo = `${userController}getUser`;
const updateUser = `${userController}updateUser`;

const actions = {
    register: register,
    login: login,
    fetchUserId: fetchUserId,
    fetchAccountInfo: fetchAccountInfo,
    updateUser: updateUser
};

export default actions;