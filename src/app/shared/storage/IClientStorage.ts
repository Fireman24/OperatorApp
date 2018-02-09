interface IClientStorage {
    GetData( key: string ): string;

    SetData( key: string , str: string );

    GetAsBoolean( key: string ): boolean;
}
