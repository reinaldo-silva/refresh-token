import { Router } from "express";

import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "../modules/users/useCases/refreshToken/RefreshTokenController";

const authenticationRouter = Router();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticationRouter.post("/sessions", authenticateUserController.handle);
authenticationRouter.post("/refresh-token", refreshTokenController.handle);

export { authenticationRouter };
