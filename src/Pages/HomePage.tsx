import React from 'react'
import SideBar from '../Layout/SideBar'
import Inbox from '../Layout/Inbox'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    flex : {
        display: 'flex',
    }
})

const HomePage = () => {
    const classes = useStyles()
  return (
    <div className={classes.flex}>
      <SideBar />
      <Inbox />
    </div>
  )
}

export default HomePage
