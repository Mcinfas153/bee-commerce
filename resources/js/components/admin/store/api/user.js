import axios from "axios";

const User = {
    login: async (email, password) => {
        return await axios.post('/api/login', {
            email: email,
            password: password
        })
    }
}

export default User