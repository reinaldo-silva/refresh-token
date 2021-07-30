import { Router } from "express";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";

import { authenticationRouter } from "./authentication.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/", authenticationRouter);
router.use("/users", ensureAuthenticated, usersRouter);

export { router };
