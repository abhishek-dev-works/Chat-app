import React from 'react'
import SideBar from '../Layout/SideBar'
import Inbox from '../Layout/Inbox'
import { createUseStyles } from 'react-jss'
import Messaging from '../Layout/Messaging'

const useStyles = createUseStyles({
    flex : {
        display: 'flex',
        overflow: 'hidden'
    }
})

const HomePage = () => {
    const classes = useStyles()
  return (
    <div className={classes.flex}>
      <SideBar />
      <Inbox />
      <Messaging recepient={''} chats={[]} />
    </div>
  )
}

export default HomePage
