import React, { useEffect, useState } from 'react'
import { AppBar, Hourglass, Toolbar } from 'react95'
import * as styles from './ItemDetailsStyles.module.css'
import { useParams } from 'react-router-dom';
import { mockItem } from './mock';

const mockReq = async (): Promise<any> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mockItem)
        }, 500)
    })
}

export const ItemDetails = () => {
    let { id } = useParams();

    const [data, setData] = useState<any>()

    const getItemInfo = async (inputValue: string) => {
        const res = await mockReq()
        setData(res)
    }

    useEffect(() => {
        getItemInfo(id)
    }, [])

    return (
        <div className={styles.container} style={{alignItems: `${!data ? 'center' : 'unset'}`}}>
            {!data && <Hourglass size={54}  />}
            {!!data && <>{id}</>}
        </div>
    )
}
