import axios from "axios";

const User = {
    login: async (data) => {
        return await axios.post('/api/login', data)
    }
}

export default User