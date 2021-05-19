const apiUrl = "https://localhost:50003/"

//Controllers
const authenticationController = `${apiUrl}authentication/`;
const userController = `${apiUrl}userservice/`;
const recipeController = `${apiUrl}recipeservice/`;
const moderationController = `${apiUrl}moderationservice/`;

//Endpoints
const register = `${apiUrl}register`;
const login = `${apiUrl}authenticate`;
const fetchUserId = `${authenticationController}readToken`;
const fetchAccountInfo = `${userController}getUser`;
const updateUser = `${userController}updateUser`;
const postRecipe = `${recipeController}postRecipe`;
const getRecipes = `${apiUrl}getRecipes`;
const deleteUser = `${userController}deleteUser`;
const getRole = `${authenticationController}getRole`;
const reportRecipe = `${moderationController}postReport`;

const actions = {
    register: register,
    login: login,
    fetchUserId: fetchUserId,
    fetchAccountInfo: fetchAccountInfo,
    updateUser: updateUser,
    postRecipe: postRecipe,
    getRecipes: getRecipes,
    deleteUser: deleteUser,
    getRole: getRole,
    reportRecipe: reportRecipe
};

export default actions;