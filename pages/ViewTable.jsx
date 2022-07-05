import Link from 'next/link'
import React from 'react'
import Table from '../component/Table'

const ViewTable = () => {
  return (
    <div>
      <Table/>
      <button><Link href='/'>back</Link></button>
    </div>
  )
}

export default ViewTable
