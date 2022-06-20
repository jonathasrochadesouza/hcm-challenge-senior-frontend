import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import api from '../../service/api';
import { TituloPrincipal, TituloPagina } from '../../components/Utils/title';
import ButtonOutlined from '../../components/Utils/buttom';
import { FormHelperText } from '@material-ui/core';
import React from 'react';

/**
 * Tela principal, referente a marcação de ponto
 * 
 * @author Jonathas Rocha
 */

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function MarcarPonto() {

    const [helperText, setHelperText] = React.useState('');

    const classes = useStyles();

    /**
     * Handle
     * @param {*} e 
     */
    async function handleMarcarPonto(e) {
        e.preventDefault();

        setHelperText('Aguarde...');

        
        try {
            const marcacaoponto_con_exec = await api.post(`/api/marcacaoponto`, "")
            
            switch ((marcacaoponto_con_exec).status) {
                case 200:
                    setHelperText('Ponto registrado com SUCESSO!');
                    break;
                default:
                    setHelperText('Não foi possível registrar o ponto!');
                    break;
            }

        } catch (error) {
            setHelperText('Por favor, verifique se o servidor está conectado!');
        }
    }

    return (
        // Form
        <Container component="main" maxWidth="xs">
            
            <TituloPrincipal internal="MARCAÇÃO DE PONTO" />

            <div>
                <TituloPagina internal="HCM CHALLENGE" />

                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form}>

                        <ButtonOutlined 
                            className={classes.submit}
                            internal="MARCAR PONTO" 
                            type="submit"
                            variant="outlined"
                            onClick={handleMarcarPonto}
                        />

                        <FormHelperText>{helperText}</FormHelperText>

                        {/* <ButtonOutlined 
                            className={classes.submit}
                            internal="Marcar vários pontos" 
                            type="submit"
                            variant="outlined"
                            onClick={handleMarcarPonto}
                        /> */}

                    </form>
                </div>

            </div>

        </Container>
    );
}
