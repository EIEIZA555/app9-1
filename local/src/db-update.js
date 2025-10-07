/*eslint-disable react-hooks/exhaustive-deps  */
import React from 'react'
import './table-style.css'


export default function DBUpdate() {
    let [data, setData] = React.useState('')
    const from = React.useRef()
    const name = React.useRef()
    const price = React.useRef()
    const data_added = React.useRef()
    const detail = React.useRef()

    React.useEffect(() => {
        fetch('/api/db/read') 
        .then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                showData(result)
            } else {
                setData(<>ไม่มีรายการข้อมูล</>)
            }
        })
        .catch(err => alert(err))
    }, [] )

    const showData = (result) => {
        let r = {
            <form onSubmit={onSubmitForm} ref={form}>
                <table id ="tableUpdate"> 
                </table>
            </form>
        }
    }
}
