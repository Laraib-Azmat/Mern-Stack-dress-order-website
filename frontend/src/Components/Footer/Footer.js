import React from 'react'
import styles from './Footer.module.css'
import footerLogo from '../../Assets/logo_big.png'
import instagramIcon from '../../Assets/instagram_icon.png'
import pintesterIcon from '../../Assets/pintester_icon.png'
import whatsappIcon from '../../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles['footer-logo']}>
            <img src={footerLogo} alt='footer-logo'/>
            <p>SHOPPER</p>
        </div>
        <ul className={styles['footer-links']}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className={styles['footer-social-icons']}>
                <div className={styles['footer-icon-container']}>
                    <img src={instagramIcon} alt='instagram'/>
                </div>
                <div className={styles['footer-icon-container']}>
                    <img src={pintesterIcon} alt='pintester'/>
                </div>
                <div className={styles['footer-icon-container']}>
                    <img src={whatsappIcon} alt='whatsapp'/>
                </div>

        </div>
        <div className={styles['footer-copyright']}>
            <hr/>
            <p>Copyright @ 2024 -All Right Reserved</p>
        </div>
    </div>
  )
}
