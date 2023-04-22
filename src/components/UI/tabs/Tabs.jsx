import * as React from 'react'
import { Tabs as MuiTabs, Tab as MuiTab, Box, styled } from '@mui/material'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
}
TabPanel.defaultProps = {
   children: null,
}

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export default function BasicTabs({
   children,
   requestTab,
   followersCount = 4,
   requestsCount = 5,
   changeStyle,
}) {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box changeStyle={changeStyle}>
         <Box sx={{ width: '100%', height: '32px' }}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  color="inherit"
                  label={
                     <FollowersTab>
                        Мои друзья <p>{followersCount}</p>
                     </FollowersTab>
                  }
                  {...a11yProps(0)}
                  iconPosition="end"
               />
               <Tab
                  color="inherit"
                  label={
                     <RequestTab>
                        Запросы в друзья <p>{requestsCount}</p>
                     </RequestTab>
                  }
                  {...a11yProps(1)}
                  iconPosition="end"
               />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            {children}
         </TabPanel>
         <TabPanel value={value} index={1}>
            {requestTab}
         </TabPanel>
      </Box>
   )
}

const Tabs = styled(MuiTabs)((changeStyle) => ({
   borderRadius: '8.91px',
   border: '0.5px solid #797979',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   marginTop: changeStyle ? '33px' : '22px',

   p: {
      fontSize: '14px',
      color: '#ffff',
      borderRadius: '50%',
      background: '#595656',
      width: '20px',
      textAlign: 'center',
   },

   '& button.Mui-selected': {
      background: '#8639B5',
      textAlign: 'center',
      letterSpacing: '0.02em',
      color: '#FFFFFF',
      margin: '2px',
      width: '50%',

      p: {
         fontSize: '14px',
         textAlign: 'center',
         color: '#8639B5',
         background: '#FFFFFF',
         borderRadius: '50%',
         width: '20px',
         height: '20px',
      },
   },
   '& button': {
      maxWidth: '50%',
      minHeight: 0,
      textTransform: 'lowercase',
      margin: '2px',
   },
   '& span.MuiTabs-indicator': {
      background: 'none',
   },
   '&.MuiTabs-root': {
      minHeight: 0,
      padding: 0,
   },
}))

const Tab = styled(MuiTab)(() => ({
   width: '50%',
   borderRadius: '6.93px',
   padding: '2px',
   marginLeft: '2px',
   marginRight: '2px',
}))
const FollowersTab = styled('div')(() => ({
   textTransform: 'capitalize',
   width: '109px',
   display: 'flex',
   justifyContent: 'space-between',
   lineHeight: '20px',
   margin: '4px',
}))
const RequestTab = styled('div')(() => ({
   textTransform: 'capitalize',
   width: '153px',
   display: 'flex',
   justifyContent: 'space-between',
}))
