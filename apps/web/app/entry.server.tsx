/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { PassThrough } from 'node:stream'

import type { EntryContext } from '@remix-run/node'
import { Response } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import isbot from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'

import { ServerStyleSheet } from 'styled-components'

const ABORT_DELAY = 5_000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get('user-agent'))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    const sheet = new ServerStyleSheet()

    const { pipe, abort } = renderToPipeableStream(
      sheet.collectStyles(
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />),
      {
        onAllReady() {
          responseHeaders.set('Content-Type', 'text/html')
          const body = new PassThrough({
            transform: (chunk, _, callback) => {
              const stringChunk = (chunk as Buffer).toString();
              callback(
                undefined,
                Buffer.from(
                  stringChunk.replace('__STYLES__', sheet.getStyleTags())
                )
              )
            }
          })

          pipe(body)

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          )
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          responseStatusCode = 500
          console.error(error)
        },
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    const sheet = new ServerStyleSheet()

    const { pipe, abort } = renderToPipeableStream(
      sheet.collectStyles(
        <RemixServer
          context={remixContext}
          url={request.url}
          abortDelay={ABORT_DELAY}
        />),
      {
        onShellReady() {
          responseHeaders.set('Content-Type', 'text/html')
          const body = new PassThrough({
            transform: (chunk, _, callback) => {
              const stringChunk = (chunk as Buffer).toString();
              callback(
                undefined,
                Buffer.from(
                  stringChunk.replace('__STYLES__', sheet.getStyleTags())
                )
              )
            }
          })

          pipe(body)

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          )
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          console.error(error)
          responseStatusCode = 500
        },
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
