// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict'

var Utils = require('./utils/Utils.bs.js')
var Dotenv = require('dotenv')
var Process = require('process')
var Js_option = require('bs-platform/lib/js/js_option.js')
var Js_primitive = require('bs-platform/lib/js/js_primitive.js')
var ParseDatabaseUrl = require('parse-database-url')

Dotenv.config({
  silent: /* true */ 1,
})

function getEnvVar (key, fallback) {
  return Js_option.getWithDefault(
    fallback,
    Js_primitive.undefined_to_opt(Process.env[key])
  )
}

var port = Utils.$$parseInt(getEnvVar('PORT', '4000'))

var corsHeaders = /* array */ ['Link']

var isDev = +(getEnvVar('NODE_ENV', 'development') === 'development')

var Server = /* module */ [
  /* port */ port,
  /* bodyLimit */ '100kb',
  /* corsHeaders */ corsHeaders,
  /* isDev */ isDev,
]

var url = getEnvVar(
  'DATABASE_URL',
  'postgres://reason_graphql_docker@localhost:5432/reason_graphql_docker'
)

var config = ParseDatabaseUrl(url)

var name = config.database

var username = config.user

var password = config.password

var hostname = config.host

var port$1 = config.port

var poolMin = Utils.$$parseInt(getEnvVar('DATABASE_POOL_MIN', '0'))

var poolMax = Utils.$$parseInt(getEnvVar('DATABASE_POOL_MAX', '10'))

var poolIdle = Utils.$$parseInt(getEnvVar('DATABASE_POOL_IDLE', '10000'))

var Database = /* module */ [
  /* url */ url,
  /* config */ config,
  /* name */ name,
  /* username */ username,
  /* password */ password,
  /* hostname */ hostname,
  /* port */ port$1,
  /* poolMin */ poolMin,
  /* poolMax */ poolMax,
  /* poolIdle */ poolIdle,
]

exports.getEnvVar = getEnvVar
exports.Server = Server
exports.Database = Database
/*  Not a pure module */
