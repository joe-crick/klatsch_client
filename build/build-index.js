import fs from 'fs';
import cheerio from 'cheerio';
import 'colors';

/*eslint-disable no-console */

fs.readFile('index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  console.log('Processing index.html...'.blue);

  const $ = cheerio.load(markup);
  $('head').prepend('');
  $('#app-js').attr('src', 'bundle.js');
  $('#app-css').attr('src', 'main.css');

  fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /public'.green);
  });
});