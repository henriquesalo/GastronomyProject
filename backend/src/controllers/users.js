import UsersDataAccess from "../dataAccess/users.js";
import { ok, notFound, serverError } from "../helpers/httpResponse.js";

export default class UsersControllers {
    constructor() {
        this.dataAccess = new UsersDataAccess()
    }

    async getUsers() {
        try {
            const users = await this.dataAccess.getUsers()
            //console.log(users)
            return ok(users)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteUser(userId) {
        try {
            const result = await this.dataAccess.deleteUser(userId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateUser(userId, userData) {
        try {
            const result = await this.dataAccess.updateUser(userId, userData)
            
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}