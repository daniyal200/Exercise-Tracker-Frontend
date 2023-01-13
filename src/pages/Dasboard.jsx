import React from 'react'
import ActivityCard from '../components/ActivityCard'

const Dasboard = ({userList}) => {
  return (
    <div>
      <ActivityCard userList={userList}/>
    </div>
  )
}

export default Dasboard
