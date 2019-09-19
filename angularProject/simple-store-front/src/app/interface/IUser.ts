/**
 * Interface for a user. Not actually how I would manage session info but for this project this is quick
 */
export interface IUser {
    isLoggedIn: boolean;
    userName: string;
    id: string;
}