import { Repository } from 'typeorm';
import { UserModel } from 'src/models/user.model';
import { UserSchema } from 'src/schemas/user.schema';
export declare class UserController {
    private model;
    constructor(model: Repository<UserModel>);
    create(body: UserSchema): Promise<UserModel>;
    getOne(id: number): Promise<UserModel>;
    getAll(): Promise<UserModel[]>;
    update(id: number, body: UserSchema): Promise<UserModel>;
    delete(id: number): Promise<string>;
}
