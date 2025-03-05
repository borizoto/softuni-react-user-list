const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            const users = Object.values(data);

            return users;
        } catch (err) {
            throw new Error(err);
        }
    }
}