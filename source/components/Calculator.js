import React from 'react'
import { Button } from 'react-native'

const Calculator = props => {

    return (
        <Button title='Calculate!' onPress={props.add} />
    )
    
}

export default Calculator