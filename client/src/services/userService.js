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
    },

    async getOne(userId) {
        try {
            const response = await fetch(`${baseUrl}/${userId}`);
            const user = await response.json();

            return user;
        } catch (err) {
            throw new Error(err);
        }
    },

    async create(userData) {
        try {
            const { country, city, street, streetNumber, ...data } = userData;

            data.address = { country, city, street, streetNumber };
            data.createdAt = new Date().toISOString();
            data.updatedAt = new Date().toISOString();

            const response = await fetch(baseUrl, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error creating user:", error);
            return { success: false, message: error.message };
        }
    }

}