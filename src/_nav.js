import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilFile, cilGroup, cilReportSlash, cilSettings } from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'DEA',
    to: '/dea',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customer Validation',
    to: '/customer-validation',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Indirect Customer',
    to: '/indirect-customer-validation',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Termination',
    to: '/termination',
    icon: <CIcon icon={cilReportSlash} customClassName="nav-icon" />,
  },
];

export default _nav;
