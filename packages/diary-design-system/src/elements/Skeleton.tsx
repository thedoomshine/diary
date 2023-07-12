import SkeletonPrimitive from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styled from 'styled-components'

export const Skeleton = styled(SkeletonPrimitive)`
  --base-color: ${({ theme }) => theme.color.grey};
  --highlight-color: ${({ theme }) => theme.color.white};
`
