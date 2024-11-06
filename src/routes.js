import React from 'react'

// Import the DEA component as a lazy-loaded module
const DEA = React.lazy(() => import('./views/dea/DEA'))
const CustomerValidation = React.lazy(() => import('./views/customer-validation/CustomerValidation'))
const IndirectCustomerValidation = React.lazy(() => import('./views/indirect-customer-validation/IndirectCustomerValidation'))
const Termination = React.lazy(() => import('./views/termination/Termination'))

// Define the required routes, making DEA the default route
const routes = [
  { path: '/', exact: true, name: 'DEA', element: DEA },
  { path: '/dea', name: 'DEA', element: DEA },
  { path: '/customer-validation', name: 'Customer Validation', element: CustomerValidation },
  { path: '/indirect-customer-validation', name: 'Indirect Customer Validation', element: IndirectCustomerValidation },
  { path: '/termination', name: 'Termination', element: Termination },
]

export default routes
