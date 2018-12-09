export class Login {

    private _accountUser: string;
    private _accountPassword: string;
    private _accountRemember: boolean;

    constructor() {
        this.accountRemember = false;
    }

    get accountUser() : string {
        return this._accountUser;
    }

    set accountUser(accountUser: string) {
        this._accountUser = accountUser;
    }

    get accountPassword() : string {
        return this._accountPassword;
    }

    set accountPassword(accountPassword: string) {
        this._accountPassword = accountPassword;
    }

    get accountRemember() : boolean {
        return this._accountRemember;
    }

    set accountRemember(accountRemember: boolean) {
        this._accountRemember = accountRemember;
    }

}
