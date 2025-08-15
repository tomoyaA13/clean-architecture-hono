export interface userSignInCommand {
    email: string;
    password: string;
}

export interface userSignInResult {
    message:string
}

/**
 * 受信ポート(ユースケースインターフェイス) は
 * 受信アダプタ(Controller や CLI アダプタ) によって使用され、
 * アプリケーションサービス によって実装されます。
 * ユースケースインターフェイスはエンティティを操作します。
 */
export interface UserSignInUseCase {
    userSignIn(command: userSignInCommand): Promise<userSignInResult>;
}
