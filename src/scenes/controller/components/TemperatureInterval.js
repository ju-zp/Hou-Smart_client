import React, { Component } from 'react'
import { Typography, TextField, withStyles, Button, Select, MenuItem } from '@material-ui/core';

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

class TemperatureInterval extends Component {

    state = {
        time: 0
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        this.props.temperatureInterval(e)
        console.log(e.target.name)
    }

    render(){
        const { classes, handleTemperature, temperatureInterval } = this.props
        const { handleChange } = this 
        return <div>
            <Typography className={classes.title}>
                Temperature
            </Typography>
            <TextField>
            </TextField>
            <Select onChange={handleChange}
                inputProps={{
                    name: 'time'
                }}>
                <MenuItem value="">--None--</MenuItem>
                <MenuItem value={0.5}>30 Seconds</MenuItem>
                <MenuItem value={1}>1 Minute</MenuItem>
                <MenuItem value={30}>30 Minutes</MenuItem>
                <MenuItem value={60}>60 Minutes</MenuItem>
            </Select>
            <Button onClick={handleTemperature}>Set</Button>
        </div>
    }
}

export default withStyles(styles)(TemperatureInterval)