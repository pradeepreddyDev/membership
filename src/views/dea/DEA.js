import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

// Generate sample data
const generateData = () => {
  const rows = []
  for (let i = 1; i <= 100; i++) {
    rows.push({
      id: `BL0406${i.toString().padStart(2, '0')}`,
      ce_cp: 'CE',
      dea: `DEA${i}`,
      hin: `HIN${i}`,
      participate: i % 2 === 0 ? 'TRUE' : 'FALSE',
      participating_start: '10/1/2004',
      termination: i % 10 === 0 ? '12/1/2005' : '---',
      entity_name: 'Health Corp',
      entity_subdivision_name: 'Medical Clinic',
      pharmacy_name: 'DRUGS',
      phone_number: '123-456-7890',
    })
  }
  return rows
}

const DEA = () => {
  const [data] = useState(generateData())
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 50

  // Get current rows based on pagination
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  const totalPages = Math.ceil(data.length / rowsPerPage)

  return (
    <CRow className="px-4">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>DEA</strong> <small>Data Table</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="mb-4">
              <CRow className="mb-3">
                <CCol md={3}>
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormInput type="text" id="address" placeholder="Enter address" />
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="state">State</CFormLabel>
                  <CFormInput type="text" id="state" placeholder="Enter state" />
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="city">City</CFormLabel>
                  <CFormInput type="text" id="city" placeholder="Enter city" />
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="zip">ZIP</CFormLabel>
                  <CFormInput type="text" id="zip" placeholder="Enter ZIP" />
                </CCol>
              </CRow>
              <CButton color="primary" className="me-2">Search</CButton>
              <CButton color="secondary" className="me-2">Import File</CButton>
              <CButton color="success">Generate Report</CButton>
            </CForm>

            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>ID</CTableHeaderCell>
                  <CTableHeaderCell>CE/CP</CTableHeaderCell>
                  <CTableHeaderCell>DEA</CTableHeaderCell>
                  <CTableHeaderCell>HIN</CTableHeaderCell>
                  <CTableHeaderCell>Participate</CTableHeaderCell>
                  <CTableHeaderCell>Participating Start</CTableHeaderCell>
                  <CTableHeaderCell>Termination</CTableHeaderCell>
                  <CTableHeaderCell>Entity Name</CTableHeaderCell>
                  <CTableHeaderCell>Entity Subdivision Name</CTableHeaderCell>
                  <CTableHeaderCell>Pharmacy Name</CTableHeaderCell>
                  <CTableHeaderCell>Phone Number</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {currentRows.map((row) => (
                  <CTableRow key={row.id}>
                    <CTableDataCell>{row.id}</CTableDataCell>
                    <CTableDataCell>{row.ce_cp}</CTableDataCell>
                    <CTableDataCell>{row.dea}</CTableDataCell>
                    <CTableDataCell>{row.hin}</CTableDataCell>
                    <CTableDataCell>{row.participate}</CTableDataCell>
                    <CTableDataCell>{row.participating_start}</CTableDataCell>
                    <CTableDataCell>{row.termination}</CTableDataCell>
                    <CTableDataCell>{row.entity_name}</CTableDataCell>
                    <CTableDataCell>{row.entity_subdivision_name}</CTableDataCell>
                    <CTableDataCell>{row.pharmacy_name}</CTableDataCell>
                    <CTableDataCell>{row.phone_number}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            {/* Pagination */}
            <CPagination align="center" className="mt-4">
              <CPaginationItem
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </CPaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <CPaginationItem
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </CPaginationItem>
              ))}
              <CPaginationItem
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default DEA
