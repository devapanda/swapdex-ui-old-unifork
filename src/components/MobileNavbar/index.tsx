import React from 'react'
import styled from "styled-components";

import AnalyticsIcon from '../../assets/svg/analytics-icon.svg'
import SwapIcon from '../../assets/svg/swap-icon.svg'
import MyWalletIcon from '../../assets/svg/my-wallet-icon.svg'
import LoanIcon from '../../assets/svg/loan-icon.svg'

export default function MobileNavbar() {
    const MobileNavbarFrame = styled.div`
      bottom: 0;
      position: fixed;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;  
      height: 4em;
      padding: 0 20px;
      background-color: #483d8b;
      ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        width: calc(100%);
      `};
    `

    const MobileNavbarElement = styled.div`
      color: #fff;
      font-size: 14px;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        img {
            width: 25px;
        }
      }
    `

    return (
        <MobileNavbarFrame>
            <MobileNavbarElement>
                <a><img src={AnalyticsIcon}></img>Analytics</a>
            </MobileNavbarElement>
            <MobileNavbarElement>
                <a><img src={MyWalletIcon}></img>My Wallet</a>
            </MobileNavbarElement>
            <MobileNavbarElement>
                <a><img src={SwapIcon}></img>Swap</a>
            </MobileNavbarElement>
            <MobileNavbarElement>
                <a><img src={LoanIcon}></img>Fiat</a>
            </MobileNavbarElement>
        </MobileNavbarFrame>
    )
}
