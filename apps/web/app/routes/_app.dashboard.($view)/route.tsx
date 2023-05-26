import { useState } from 'react'
import { Calendar } from './calendar'
import { CalendarView } from './@types'

import styled from 'styled-components'

import { OutlineButton, Icon } from '@bash/design-system'
import { LoaderFunction } from '@remix-run/node'

import { CalendarView } from './@types'
import { useLoaderData } from '@remix-run/react'

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const StyledIcon = styled(Icon)`
  display: inline-block;
  &.left {
    margin-right: 0.5em;
  }

  &.right {
    margin-left: 0.5em;
  }
`

export const loader: LoaderFunction = async ({ params }) => {
  return params.view
}

export default () => {
  const [activeDate, setActiveMonth] = useState(new Date())
  const view = useLoaderData()

  const handleNavigateMonth = (direction: number) => {
    setActiveMonth(
      prev => new Date(prev.getFullYear(), prev.getMonth() + direction, 1)
    )
  }

  const onPrevClick = () => {
    handleNavigateMonth(-1)
  }

  const onTodayClick = () => {
    setActiveMonth(new Date())
  }

  const onNextClick = () => {
    handleNavigateMonth(1)
  }

  return (
    <>
      <NavBar>
        <OutlineButton onClick={onPrevClick}>
          <StyledIcon className='left' name='chevron-left' /> prev
        </OutlineButton>
        <OutlineButton onClick={onTodayClick}>today</OutlineButton>
        <OutlineButton onClick={onNextClick}>
          next <StyledIcon className='right' name='chevron-right' />
        </OutlineButton>
      </NavBar>
      <Calendar
        view={CalendarView.MONTH}
        activeDate={activeDate}
        view={view as CalendarView}
      />
    </>
  )
}
