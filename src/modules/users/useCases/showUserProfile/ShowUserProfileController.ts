import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const userID = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id: String(userID) });

      return response.json(user);
    } catch (err) {
      return response.status(404).json({ "error": err });
    }
  }
}

export { ShowUserProfileController };
