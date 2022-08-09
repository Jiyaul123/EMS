const Auth = {
    isAuthenticated: false,
    authenticated() {
        if (localStorage.getItem("authKey")) {
            this.isAuthenticated = true;
        }
    },

    signOut() {
        this.isAuthenticated = false;
        localStorage.removeItem("authKey");
    },

    getAuth() {
        return this.isAuthenticated;
    },

    checkAuth() {
        this.authenticated();
        return this.isAuthenticated;
    }
}

export default Auth