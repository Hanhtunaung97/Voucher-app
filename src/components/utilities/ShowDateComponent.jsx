import React from 'react'

const ShowDateComponent = ({timeStamp}) => {
    const data = new Date(timeStamp);
    const createdDate = data.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const createdTime = data.toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      // second: "numeric",
      hour12: false,
    });
  return (
    <>
    <p>{createdDate}</p>
    <p>{createdTime}</p>
    </>
  )
}

export default ShowDateComponent