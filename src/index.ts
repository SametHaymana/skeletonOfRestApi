import { app } from './app';

const start = (port: number) => {
  try {
    app.listen(port, () => {
      console.info('Server listening on port: ' + port);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

const port = 8000;
start(port);
