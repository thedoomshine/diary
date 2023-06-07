import * as build from '@remix-run/dev/server-build'
import { createRequestHandler } from '@remix-run/vercel'
import { installGlobals } from '@vercel/remix'

installGlobals()

export default createRequestHandler({ build, mode: process.env['NODE_ENV'] })
