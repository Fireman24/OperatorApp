import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import {LocalClientStorage} from '../storage/LocalClientStorage';

@Injectable()
export class StorageService {
    private _clientStorage: IClientStorage;

    constructor() {
        this._clientStorage = new LocalClientStorage();
    }

    SetLocalData(key: string, data: string) {
        this._clientStorage.SetData(key, data);
    }

    GetLocalData(key: string): string {
        return this._clientStorage.GetData(key);
    }

    GetLocalAsBoolean(key: string): boolean {
        return this._clientStorage.GetAsBoolean(key);
    }
}
