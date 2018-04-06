export class User {
    name: string;
    email: string;
    departments: string[];
    notificationPref: string;
    fcmTokens?: { [token: string]: true };
}
