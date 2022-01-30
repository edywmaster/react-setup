import { ThemeToggle } from '../components/ThemeToggle'
import { css } from '../../stitches.config';
import ewmLogo from '../assets/ewm.svg'

const navBar = css({

  width: '80%',
  height: 50,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
  marginTop: '2em'

})

const navLogo = css({
  height: 45,
  '& img': {
    width: 150,
    height: 'auto'
  }
})

const navContainer = css({
  display: 'flex',
  '& ul': {
    display: 'flex',
    listStyle: 'none',
    position: 'relative',
    margin: '0 20px'
  },
  '& li': {
    display: 'flex',
    listStyle: 'none',
    position: 'relative',
    margin: '0 20px'
  },
})

const itemToggle = css({
  fontFamily: '$headers',
  textDecoration: 'none',
  color: '$primary',
  padding: 10,
  textTransform: 'uppercase',
  fontWeight: 700,
})

const itemLink = css({

  fontFamily: '$headers',
  textDecoration: 'none',
  color: '$primary',
  padding: 10,
  textTransform: 'uppercase',
  fontWeight: 700,

  '&::after': {
    content: `""`,
    height: 2,
    width: '0%',
    background: '$blue500',
    opacity: 0,
    position: 'absolute',
    left: 0,
    bottom: 5,
    transitionDuration: '0.5s'
  },
  '&:hover::after': {
    width: '100%',
    opacity: 1,
  },

})

export const PageHeader = () => {
  return (
    <div className={navBar()}>
      <div className={navLogo()}>
        <img
          src={ewmLogo}
          alt="EWM"
        />
      </div>
      <nav className={navContainer()}>
        <ul>
          <li><a href="#" className={itemLink()}>Link</a></li>
          <li><a href="#" className={itemLink()}>Link</a></li>
          <li><a href="#" className={itemToggle()}><ThemeToggle /></a></li>
        </ul>
      </nav>
    </div>
  )
}
