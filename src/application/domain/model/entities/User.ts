// ビジネスルールはまだないのでまずはシンプルに書く
export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly createdAt: Date
    ) {}
}