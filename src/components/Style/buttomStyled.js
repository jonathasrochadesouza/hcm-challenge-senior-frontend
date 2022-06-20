import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

/**
 * @author Jonathas Rocha
 */

/**
 * Estilização do bootstrap para o botão
 */
const ButtonBootstrapCustom = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: '#fff',
    margin: '2em 0',
    padding: '16px 50px',
    width: '100%',
    textAlign: 'center',
    fontWeight: 400,
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0062cc',
    borderColor: '#0062cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: '#0062cc'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#E5EAF8',
      borderColor: '#1976D2',
    }
  });

export { ButtonBootstrapCustom };
