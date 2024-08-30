import React, { useState } from 'react';
import styles from '../../Home.module.css';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';
import Sidebar from '../../../component/adminscreencomp/sidebar';
import { useSelector } from "react-redux";
import LoadingModal from "../../../component/Modal/LoadingModal";
import { AdminAccountComponent } from '../../../component/adminscreencomp/Home/Accounts';
import { Error } from '../../../component/common/Error';


const AdminAccountScreen = ({status}) => {
    //tradeModal and transfer modal
    let [isOpenTradeModal, setIsOpenTradeModal] = useState(false)
    let [isOpenTransferModal, setIsOpenTransferModal] = useState(false)
    let { color } = useSelector(state => state.userAuth)
    let [isLoading, setIsLoading] = useState(false)
    let [isError,setIsError] = useState(false)


    let showmenuHandler = () => {
        let drawer = document.querySelector('.drawerCon')
        drawer.classList.toggle('showdrawer')
    }


    let closeModal = () => {
        setIsOpenTransferModal(false)
        setIsOpenTradeModal(false)
    }

    if(isError){
        return <Error/>
    }


    return (<>
        {isLoading && <LoadingModal />}
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <Sidebar status='Matters' />
            </div>

            <div className={styles.main}>
                {/*mobile and dashboard headers*/}
                <DashboardDrawer showmenuHandler={showmenuHandler} />
                <DashboardHeader showmenuHandler={showmenuHandler}  headerTitle='List Of Accounts' />
                <AdminAccountComponent status={status}/>
            </div>
        </div>
    </>
    )
}

export default AdminAccountScreen