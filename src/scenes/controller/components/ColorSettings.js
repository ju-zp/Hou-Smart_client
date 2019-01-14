import React from'react'
import { Typography, withStyles, Button} from '@material-ui/core';
import ColorSlider from './ColorSlider'

const styles = () => ({
    title: {
        fontSize: '25px',
        color: 'white',
        textAlign: 'center'
    },
    text: {
        fontSize: '20px',
        color: 'white',
        textAlign: 'center'
    }
    
})

const ControllerText = ({ classes, handleSlider, handleSave }) => {
    return <div>
        <Typography className={classes.title}>
            Color Settings
        </Typography>
        <Typography className={classes.text}>
            Red
        </Typography>
        <ColorSlider handleSlider={handleSlider} color="red"/>
        <Typography className={classes.text}>
            Blue
        </Typography>
        <ColorSlider handleSlider={handleSlider} color="blue"/>
        <Typography className={classes.text}>
            Green
        </Typography>
        <ColorSlider handleSlider={handleSlider} color="green"/>
        <Button onClick={handleSave}>Save</Button>
    </div>
}

export default withStyles(styles)(ControllerText)