'use strict';

var redis = require("../../");
//redis.debug_mode = true
var HOST = process.argv[2] || '127.0.0.1';
var PORT = process.argv[3]
var args = PORT ? [PORT, HOST] : [HOST]

var c = redis.createClient.apply(redis, args);
c.unref();
c.info(function (err, reply) {
  if (err) process.exit(-1);
  if (!reply.length) process.exit(-1);
  process.stdout.write(reply.length.toString());
});