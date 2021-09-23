import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    root : {
        flexGrow: 1,
    },
    pin : {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border : "solid black 0.1rem",
        paddingTop : "1rem",
        paddingRight : "1rem",
        paddingLeft : "1rem"
      },
}));

export default useStyles;