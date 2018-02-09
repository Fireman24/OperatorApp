
export class LocalClientStorage implements IClientStorage {
    GetData(key: string): string {
        const data = localStorage.getItem( key );
        return data;
    }

    SetData(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    GetAsBoolean( key: string): boolean {
        const data = localStorage.getItem( key );
        if ( data === 'true') {
            return true;
        }
        return false;
    }

}
