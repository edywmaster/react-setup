import { styled } from '@stitches/react';
import { css } from '../../stitches.config';

const mainContainer = css({
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: 'calc(100vh - 90px)',
})

const Info = css({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  margin: '20px auto',

  '& h1': {
    fontSize: '3.5rem',
    fontWeight: 700,
    margin: '10px 0',
    textTransform: 'uppercase',
  },

  '& span': {
    fontFamily: '$texts',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: '1.5',
  }
})

const Button = styled('button', {
  alignSelf: 'center',
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',
});

export const PageContent = () => {

  return (
    <section className={mainContainer()}>
      <div className={Info()}>
        <h1>The Best Product Code Here</h1>
        <span>
          Some fancy description here for code here and this amazing landing
          page
        </span>
        <Button>Button</Button>
      </div>
    </section>
  )
}
