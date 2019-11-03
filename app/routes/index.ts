import express from 'express';
import { gameController, reportController } from './../controllers';

const app: express.Application = express();

app.use(express.json())

// Game api
app.get("/game/", gameController.game);
app.post("/game/", gameController.gameUpdate);

// Report api
app.get("/report/", reportController.report);
app.post("/report/", reportController.reportUpdate);

export default app;