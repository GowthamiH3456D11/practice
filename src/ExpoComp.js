import React from 'react'
import { memo } from 'react'
 function ExpoComp(props) {
    console.log("ExpoComp Rendered",props.count,"times")
  return (
    <div>ExpoComp </div>
  )
}
export default memo(ExpoComp)