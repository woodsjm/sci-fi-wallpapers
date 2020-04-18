import React, { useState } from "react";
import { Slider } from "react-semantic-ui-range";
import { Label } from 'semantic-ui-react'
 
const BasicSlider = ({ currentVal, handleSlider, max, min, name, start, step }) => {
    const settings = {
        value: currentVal,
        start: start,
        min: min,
        max: max,
        step: step,
        onChange: value => handleSlider(value, name)
      }

    return(
        <div>
            <Slider settings={settings} style={{ trackFill: { backgroundColor: "#3498db"}}} />
        </div>
    )
}

export default BasicSlider