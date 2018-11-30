import React from "react";

const FriendlyTime = (props) => {
  let time = Date(props.time)
  console.log(time);
  return (
    <span>{time}</span>
  )
}

export default FriendlyTime;