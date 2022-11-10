import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();
    const user = this.usersRepository.findById(user_id);

    if (user.admin != true) {
      throw new Error("User is not adm!");
    }

    /*if (!user) {
      throw new Error("User not Found!");
    }*/

    return users;
  }
}

export { ListAllUsersUseCase };
