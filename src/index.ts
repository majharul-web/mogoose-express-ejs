import app from "./app/app";
import log from "./app/utils/logger";
const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  app.listen(PORT, () => {
    log.info(` Server is running on port ${PORT}`);
  });
};

startServer();
