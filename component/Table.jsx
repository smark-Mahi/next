import React from 'react'
import {useTable} from 'react-table'
import mockdata from './mock_data.json'
import { column } from './Column'
import styles from '../styles/Table.module.css'
const table = () => {
    


    
  return (
    <div style={{position:`relative`,left:`190px`}}>
    <table className={styles.table}>
        <thead>
            <tr className={styles.tr}>
               {
                column.map((item)=>
                <th className={styles.td}>{item.header}</th>
                )
               }
            </tr>
        </thead>
        <tbody>
        
        {
            mockdata.map((items)=>
            <tr  className={styles.tr}>
                <td width='10%'  className={styles.th}>{items.id}</td>
                <td width='40%' className={styles.th}>{items.fullname}</td>
                <td width='20%' className={styles.th}>{items.address}</td>
                <td width='20%' className={styles.th}>{items.email}</td>
                <td width='30%' className={styles.th}>{items.phonenumber}</td>
            </tr>
            )
        }
        </tbody>
    </table>
        
       
      
    </div>
  )
}

export default table
