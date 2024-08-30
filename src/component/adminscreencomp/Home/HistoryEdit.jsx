import React, { useState, useEffect } from 'react';
import styles from '../../common/Home.module.css'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export const AdminHistoryEditComponent = ({ updateHandler, }) => {
    let [isData, setIsData] = useState({})
    let { color, historyList } = useSelector(state => state.userAuth)

    let { id } = useParams()
    let handleChangeHandler = (e, nameField) => {
        let val = e.target.value
        setIsData(prev => {
            prev[`${nameField}`] = val
            let newData = { ...prev }
            return newData
        })

    }

    let submitHandler = (e) => {
        e.preventDefault()
        //patch case on 
        updateHandler(isData)

    }

    useEffect(() => {
        let dataObj = historyList.find(data => data._id.toString() === id.toString())
        setIsData(dataObj)
    }, [id])



    return (<>
        <div className={styles.homeScreen} style={{ backgroundColor: color.background }}>
            <div className={styles.timeline} style={{ backgroundColor: color.background }}>

                {historyList && isData && <form className={styles.editForm} onSubmit={submitHandler}>

                    <h2>Basic Info</h2>
               

                    <div className={styles.inputCards}>
                        <label>
                            TransferID
                        </label>
                        <input value={isData?.id} type='text' readOnly />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Transaction Type
                        </label>
                        <input value={isData.transactionType} onChange={(e) => handleChangeHandler(e, 'transactionType')} type='text' readOnly/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            status
                        </label>
                        <select onChange={(e) => handleChangeHandler(e, 'status')}
                            value={isData.status}
                        >
                            <option>
                                active

                            </option>
                            <option >
                                Pending
                            </option>

                        </select>


                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Date Of Transaction
                        </label>
                        <input value={isData.dateOfTransfer} onChange={(e) => handleChangeHandler(e, 'date')} type='date' />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Amount
                        </label>

                        <input value={isData.amount} onChange={(e) => handleChangeHandler(e, 'amount')} type='number' />
                    </div>

                    


                    <div className={styles.inputCards}>
                        <label>
                            Reason
                        </label>
                        <input value={isData.reason} onChange={(e) => handleChangeHandler(e, 'reason')} type='text' />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Source Account
                        </label>
                        <input value={isData.sourceAccountNumber}  type='text' readOnly/>
                    </div>

                    

                    <h2>{isData.transactionType} Info</h2>


                    <div className={styles.inputCards}>
                        <label>
                            Account Number
                        </label>
                        <input value={isData.accountNumber} onChange={(e) => handleChangeHandler(e, 'accountNumber')} type='number' />
                    </div>
                    <div className={styles.inputCards}>
                        <label>
                            RouteNumber
                        </label>
                        <input value={isData.routeNumber} onChange={(e) => handleChangeHandler(e, 'routeNumber')} type='number' />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Account Name
                        </label>
                        <input value={isData.accountName} onChange={(e) => handleChangeHandler(e, 'accountName')} type='text' />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Name Of Bank
                        </label>
                        <input value={isData.nameOfBank} onChange={(e) => handleChangeHandler(e, 'nameOfBank')} type='text' />
                    </div>
                    <div className={styles.inputCards}>
                        <label>
                            Name Of Country
                        </label>
                        <input value={isData.nameOfCountry} onChange={(e) => handleChangeHandler(e, 'nameOfCountry')} type='text' />
                    </div>
                    
                    <div className={styles.buttonContainer} >
                        <button >Update</button>
                    </div>



                </form>}
            </div>






        </div></>)




}