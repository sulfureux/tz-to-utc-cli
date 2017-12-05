#!/usr/bin/env node

const { DateTime } = require('luxon');

let argv = process.argv.slice(2);

let tz = argv[0]
let withPrefix = argv[1]

const time = DateTime.local().setZone(tz);
if (time.toString() === 'Invalid DateTime') {
  console.log('Invalid TimeZone');
} else {
  console.log(((withPrefix) ? 'UTC' : '') + time.toFormat('Z'));
}
