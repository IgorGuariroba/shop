import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  span: {
    backgroundColor: '$gray800',
    color: '$gray300',
    padding: '0.55rem',
    borderRadius: '8px',
  },
})

export const CountDown = styled('span', {
  position: 'absolute',
  width: '1.7rem',
  height: '1.7rem',
  marginLeft: '1.8rem',
  marginTop: '-1rem',
  borderRadius: '50% !important',
  border: 'solid 2px $gray800',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '160%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$green500 !important',
})
