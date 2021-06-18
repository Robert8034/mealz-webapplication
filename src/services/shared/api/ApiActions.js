const apiUrl = "http://20.61.248.25/"

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
const getRecipe = `${recipeController}getRecipe`;
const deleteUser = `${userController}deleteUser`;
const getRole = `${authenticationController}getRole`;
const reportRecipe = `${moderationController}postReport`;
const getReports =`${moderationController}getReports`;
const getMyReports =`${moderationController}getMyReports`;
const removeReport = `${moderationController}removeReport`;
const removeRecipe = `${moderationController}removeRecipe`;
const postRequest = `${moderationController}postRequest`;
const getRequests =`${moderationController}getRequests`;
const approveRequestToChef = `${moderationController}approveRequestToChef`;
const approveRequestToModerator = `${moderationController}approveRequestToModerator`;
const approveRequestToAdmin = `${moderationController}approveRequestToAdmin`;
const declineRequestToChef = `${moderationController}declineRequestToChef`;
const declineRequestToModerator = `${moderationController}declineRequestToModerator`;
const declineRequestToAdmin = `${moderationController}declineRequestToAdmin`;

const actions = {
    register: register,
    login: login,
    fetchUserId: fetchUserId,
    fetchAccountInfo: fetchAccountInfo,
    updateUser: updateUser,
    postRecipe: postRecipe,
    getRecipes: getRecipes,
    getRecipe: getRecipe,
    deleteUser: deleteUser,
    getRole: getRole,
    reportRecipe: reportRecipe,
    getReports: getReports,
    getMyReports: getMyReports,
    removeReport: removeReport,
    removeRecipe: removeRecipe,
    postRequest: postRequest,
    getRequests: getRequests,
    approveRequestToChef: approveRequestToChef,
    approveRequestToModerator: approveRequestToModerator,
    approveRequestToAdmin: approveRequestToAdmin,
    declineRequestToChef: declineRequestToChef,
    declineRequestToModerator: declineRequestToModerator,
    declineRequestToAdmin: declineRequestToAdmin
};

export default actions;