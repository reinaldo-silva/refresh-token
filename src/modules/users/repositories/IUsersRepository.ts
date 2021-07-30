import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
