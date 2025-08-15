export interface userSignUpCommand {
    email: string;
    password: string;
}

export interface userSignUpResult {
    message: string
}

/**
 * 受信ポート(ユースケースインターフェイス) は
 * 受信アダプタ(Controller や CLI アダプタ) によって使用され、
 * アプリケーションサービス によって実装されます。
 * ユースケースインターフェイスはエンティティを操作します。
 */
export interface UserSignUpUseCase {
    userSignIn(command: userSignUpCommand): Promise<userSignUpResult>;
}
