import Services from '@/app/services'
import BusinessConsluting from '@/app/services/BusinessConsulting'
import SoftwareServices from '@/app/services/SoftwareServices'
import AutomationInAi from '@/app/services/AutomationInAi'
import ReourceAugmentation from '@/app/services/ReourceAugmentation'
import { Box } from '@mui/material'
import React from 'react'

function Servicespage() {
  return (
    <>
        <BusinessConsluting/>
        <SoftwareServices/>
        <ReourceAugmentation/>
        <AutomationInAi/>  
    </>
  )
}

export default Servicespage