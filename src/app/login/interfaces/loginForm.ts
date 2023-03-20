export interface LoginForm {
    email: string;
    password: string;
    authorizationCode?: number | null;
}