import { Request, Response, Router } from "express";

const routes = Router();

routes.get('/test', (req: Request, res: Response) => {
  res.json({ ok: true });
});

export default routes;
