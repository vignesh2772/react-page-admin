
let app = express();

app.use(bodyParser.json()));
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);

initWebRouters(app);

initCronJob();

port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
