'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText } from 'ui'

export function ServerStylesheet({ children }) {
  const [__html] = useState(() => getCssText)
  useServerInsertedHTML(() => {
    return <style id='stitches' dangerouslySetInnerHTML={{ __html }} />
  })

  return children
}