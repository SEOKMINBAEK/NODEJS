const express = require('express');

const app = express();

const indexRouter = require('./routes');
const nextRouter = require('./routes/next');
const usersRouter = require('./routes/users');

app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter);
app.use('/next', nextRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => res.status(404).send('Not Found'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => console.log(app.get('port'), '번 포트에서 대기 중'));
