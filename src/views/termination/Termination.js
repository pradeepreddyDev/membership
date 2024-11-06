import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
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

// Sample 50 rows data
const sampleData = Array.from({ length: 50 }, (_, i) => ({
  MEMBERID: `MEM${String(i + 1).padStart(3, '0')}`,
  "Contract ID": `C${String(i + 1).padStart(3, '0')}`,
  "Sold to Customer": `Customer ${String.fromCharCode(65 + (i % 26))}`,
  Line1: `${i + 1} Main St`,
  Line2: i % 2 === 0 ? "Suite 100" : "",
  City: `City ${String.fromCharCode(65 + (i % 26))}`,
  STATE_PROV: "State",
  POSTAL_ZIP: `${10000 + i}`,
  DEA: `DEA${String(i + 1).padStart(3, '0')}`,
  HIN: `HIN${String(i + 1).padStart(3, '0')}`,
  "340B": i % 3 === 0 ? "Yes" : "No",
  "Match - ID": i % 2 === 0 ? "Yes" : "No",
  "Match - Address1": i % 3 !== 0 ? "Yes" : "No",
  "Match - Address2": i % 4 === 0 ? "No" : "Yes",
  "Match - City": "Yes",
  "Match - State": i % 5 === 0 ? "No" : "Yes",
  "Match - ZIP": "Yes",
}))

const Termination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  // Get current rows based on pagination
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = sampleData.slice(indexOfFirstRow, indexOfLastRow)

  const totalPages = Math.ceil(sampleData.length / rowsPerPage)

  return (
    <CRow className="px-4">
      <CCol xs={12}>
        <CCard className="mb-4 w-100">
          <CCardHeader>
            <strong>Termination</strong> <small>Data Table</small>
          </CCardHeader>
          <CCardBody>
            <CButton color="secondary" className="me-2 mb-3">Import File</CButton>
            <CTable hover responsive striped bordered className="w-100">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>MEMBERID</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Contract ID</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Sold to Customer</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Line1</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Line2</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>City</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>STATE_PROV</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>POSTAL_ZIP</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>DEA</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>HIN</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>340B</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Match - ID</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Match - Address1</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Match - Address2</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Match - City</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Match - State</CTableHeaderCell>
                  <CTableHeaderCell style={{ fontSize: '0.8rem' }}>Match - ZIP</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {currentRows.map((row, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{row.MEMBERID}</CTableDataCell>
                    <CTableDataCell>{row["Contract ID"]}</CTableDataCell>
                    <CTableDataCell>{row["Sold to Customer"]}</CTableDataCell>
                    <CTableDataCell>{row.Line1}</CTableDataCell>
                    <CTableDataCell>{row.Line2}</CTableDataCell>
                    <CTableDataCell>{row.City}</CTableDataCell>
                    <CTableDataCell>{row.STATE_PROV}</CTableDataCell>
                    <CTableDataCell>{row.POSTAL_ZIP}</CTableDataCell>
                    <CTableDataCell>{row.DEA}</CTableDataCell>
                    <CTableDataCell>{row.HIN}</CTableDataCell>
                    <CTableDataCell>{row["340B"]}</CTableDataCell>
                    <CTableDataCell>{row["Match - ID"]}</CTableDataCell>
                    <CTableDataCell>{row["Match - Address1"]}</CTableDataCell>
                    <CTableDataCell>{row["Match - Address2"]}</CTableDataCell>
                    <CTableDataCell>{row["Match - City"]}</CTableDataCell>
                    <CTableDataCell>{row["Match - State"]}</CTableDataCell>
                    <CTableDataCell>{row["Match - ZIP"]}</CTableDataCell>
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

export default Termination
