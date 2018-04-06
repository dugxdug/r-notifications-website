export class User {
    name: string;
    notificationPref: string;
    email: string;
    departments: any[];

    constructor() {
        this.name = '';
        this.notificationPref = '';
        this.email = '';
        this.departments = [];
    }
}
