'use client'

import styled from 'styled-components'
import { PageHeader } from '../_components'

const StyledLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  max-width: ${({ theme }) => theme.size.md};
  min-height: 100%;
  width: 100%;
  margin: 0 auto;
`

const StyledMain = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[8]};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.sm};
  line-height: ${({ theme }) => theme.lineHeight.body};

  & > :first-child {
    margin-top: 0 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 0.3em;
    margin-bottom: 1rem;
    margin-top: 2rem;
    line-height: ${({ theme }) => theme.lineHeight.heading};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    border-bottom: ${({ theme }) =>
      `solid ${theme.spacing[1]} ${theme.color.grey}`};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.h5};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSize.h6};
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing[16]};
  }

  ol, ul {
    margin-left: ${({ theme }) => theme.spacing[32]};
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: lower-alpha;
    ol {
      list-style: lower-roman;
    }
  }

  li::marker {
    color: ${({ theme }) => theme.color.silver};
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  em {
    font-style: italic;
  }

  blockquote {
    display: flex;
    flex-direction: column;
    border-left: solid 0.25rem ${({ theme }) => theme.color.grey};
    padding-left: 0.5rem;
    & > :last-child {
      margin-bottom: 0;
    }
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.color.grey};
  }

  p {
    color: ${({ theme }) => theme.color.silver};
  }

  :not(p) {
    color: ${({ theme }) => theme.color.white};
  }
`

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledLayout>
      <PageHeader />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  )
}
