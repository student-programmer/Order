import React from 'react'
import { Redirect } from 'react-router-dom'

export const CompareViewRedirect = (props) => (
  <div>
    <div>Loading...</div>
    <Redirect to="/compare"/>
  </div>
)

export default CompareViewRedirect

