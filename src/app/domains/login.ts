export class Login {

    private _accountUser: string;
    private _accountPass: string;
    private _accountRemember: boolean;

    get accountUser() : string {
        return this._accountUser;
    }

    set accountUser(accountUser: string) {
        this._accountUser = accountUser;
    }

    get accountPass() : string {
        return this._accountPass;
    }

    set accountPass(accountPass: string) {
        this._accountPass = accountPass;
    }

    get accountRemember() : boolean {
        return this._accountRemember;
    }

    set accountRemember(accountRemember: boolean) {
        this._accountRemember = accountRemember;
    }

}
