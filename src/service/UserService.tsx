const apiUrl = 'https://random-data-api.com/api/v2/users?size=20'

export class UserService {
    static getAll() {
        return fetch(apiUrl).then(res => res.json())
    }
}