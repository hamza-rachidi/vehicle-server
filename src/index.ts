import { connectDb, dbConfigFromEnv } from "./database";
import { setupApp } from "./app";

async function main() {
  let port = 8080;
  let host = "localhost"; // Valeur par défaut

  if (process.env.PORT) {
    port = parseInt(process.env.PORT, 10);
  }

  if (process.env.HOST) {
    host = process.env.HOST;
  }

  const db = await connectDb(dbConfigFromEnv());

  setupApp(db).listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}

main().catch((e: unknown) => {
  console.error(`Something went wrong: ${e as string}`);
});
