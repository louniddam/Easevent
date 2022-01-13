import { Router } from "express";
// import { prisma } from "./database/index";
// import { categoryRouter } from "./modules/category/categoryRouter";
// import { typeRouter } from "./modules/type/typeRouter";
// import { userRouter } from "./modules/user/userRouter";
// import { questionRouter } from "./modules/question/questionRouter";
// import { gameRouter } from "./modules/game/gameRouter";
// import { historicRouter} from "./modules/historic/historicRouter"

const mainRouter = Router();

//Voilà, notre première route !
mainRouter.get("/", (_, res) => {
  res.json("Hello Api V1");
});

// mainRouter.use("/users", userRouter);
// mainRouter.use("/categories", categoryRouter);
// mainRouter.use("/types", typeRouter);
// mainRouter.use("/questions", questionRouter)
// mainRouter.use("/games", gameRouter)
// mainRouter.use("/historics", historicRouter)

export default mainRouter;