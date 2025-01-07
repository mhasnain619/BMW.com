import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Home/Home.module.css'
import home from '../../assets/home.png'

const Home = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                    <img src={home} height='100%' width='100%' alt="" />
                </div>
                <div>
                    <p style={{ marginTop: '10px' }}>
                        Access Your Account
                    </p>
                </div>
                <Link to='/login' className={styles.loginBtn} >
                    LOGIN
                </Link >
                <Link to='/signup' className={styles.signupBtn} >
                    SIGNUp
                </Link>
            </div>
        </div>
    )
}

export default Home
