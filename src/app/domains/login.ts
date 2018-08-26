export class Login {

    private _accountUser: string;
    private _accountPass: string;
    private _accountRemember: boolean;

    get user() : string {
        return this._accountUser;
    }

    set user(accountUser: string) {
        this._accountUser = accountUser;
    }

    get pass() : string {
        return this._accountPass;
    }

    set pass(accountPass: string) {
        this._accountPass = accountPass;
    }

    get remember() : boolean {
        return this._accountRemember;
    }

    set remember(accountRemember: boolean) {
        this._accountRemember = accountRemember;
    }

}
