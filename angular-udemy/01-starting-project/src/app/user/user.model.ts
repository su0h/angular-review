export class User {
    id: string
    avatar: string
    name: string

    constructor(id: string, name: string, avatar: string) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
}
// export class User {
//     private _id: string;
//     private _name: string;
//     private _avatar: string;

//     constructor(id: string, name: string, avatar: string) {
//         this._id = id;
//         this._name = name;
//         this._avatar = avatar;
//     }

//     public get id(): string {
//         return this._id;
//     }

//     public get name(): string {
//         return this._name;
//     }

//     public get avatar(): string {
//         return this._avatar;
//     }

//     public set id(id: string) {
//         this._id = id;
//     }

//     public set name(name: string) {
//         this._name = this.name;
//     }

//     public set avatar(avatar: string) {
//         this._avatar = avatar;
//     }
// }