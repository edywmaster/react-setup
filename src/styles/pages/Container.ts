import { css } from '../../../stitches.config'

export const Container = css({

  /*   width: '100vw',
    height: '100vh', */

  display: 'flex',
  /*  justifyContent: 'center', */
  alignItems: 'center',
  flexDirection: 'column',

  '& h1': {
    fontFamily: '$headers',
    fontSize: 54,
    color: '19deg, #21D4FD 0%, #B721FF 100%',
    marginTop: 40
  },

  '& p': {
    marginTop: 24,
    fontFamily: '$texts',
    fontSize: 24,
    lineHeight: 32
  }

});
