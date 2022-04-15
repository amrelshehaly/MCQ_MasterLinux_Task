import {
    TextField,
    alpha,
    styled,
} from '@mui/material';


const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& label": {
        "&.Mui-focused": {
            color:"white"
        }
    },
    '& .MuiFilledInput-root': {
      border: '1px solid transparent',
      color:'white',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#212526eb',
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha("#000000", 0.25)} 0 0 0 2px`,
        borderColor: "transparent",
      },
    },
    marginBlockEnd:10
  }));

  const FormInput = ({label, helperText="", ...otherProps}) =>{
      return(
        <RedditTextField
        label={label}
        variant="filled"
        style={{ marginTop: 11 }}
        helperText={helperText}
        error={helperText.length> 0? true: false}
        {...otherProps}
      />
      )
  }

  export default FormInput