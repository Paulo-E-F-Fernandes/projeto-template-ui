export class UserRegistration {

    private _userName: string;
    private _userEmail: string;
    private _userPassword: string;
    private _userConfirmPassword: string;
    private _userUseNickname: boolean;
    private _userNickname?: string;

    constructor() {
        this._userUseNickname = false;
    }

    get userName() : string {
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
    }

    get userEmail() : string {
        return this._userEmail;
    }

    set userEmail(userEmail: string) {
        this._userEmail = userEmail;
    }

    get userPassword() : string {
        return this._userPassword;
    }

    set userPassword(userPassword: string) {
        this._userPassword = userPassword;
    }

    get userConfirmPassword() : string {
        return this._userConfirmPassword;
    }

    set userConfirmPassword(userConfirmPassword: string) {
        this._userConfirmPassword = userConfirmPassword;
    }

    get userUseNickname() : boolean {
        return this._userUseNickname;
    }

    set userUseNickname(userUseNickname: boolean) {
        this._userUseNickname = userUseNickname;
    }

    get userNickname() : string {
        return this._userNickname;
    }

    set userNickname(userNickname: string) {
        this._userNickname = userNickname;
    } 

}
