import api from "./axiosClient";

const accountApi = {
    login (account) {
        return api.post("/auth/login-jwt",account);
    },
    signin (accountSignIn) {
        return api.post("/account/create",accountSignIn);
    }
};

export default accountApi;