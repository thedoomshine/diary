import { css } from '@diaryco/style-engine/css'

const layoutStyles = css({
  display: 'grid',
  gridTemplateColumns: '0 max-content auto 0',
  width: '100%',
  xl: {
    gridTemplateColumns: '0 14rem auto 0',
  },
})

const mainStyles = css({
  overflow: 'hidden',
  display: 'flex',
  gridColumn: 3,
  flex: '1 1 auto',
  flexDirection: 'column',
  maxHeight: '100dvh',
  border: 'solid 0.0125rem token(colors.grey)',
  borderTop: 0,
  borderBottom: 0,
})

export default function Home() {
  return (
    <div className={layoutStyles}>
      <main className={mainStyles}>Hello World</main>
    </div>
  )
}
