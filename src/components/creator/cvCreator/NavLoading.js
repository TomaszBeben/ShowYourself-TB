import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const NavLoading = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div>
                <Skeleton variant="text" width={210} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                </div>
                <Skeleton variant="rectangular" width={210} height={60} />
            </div>
            <div>
                <Skeleton variant="text" width={210} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                </div>
                <Skeleton variant="rectangular" width={210} height={60} />
            </div>
            <div>
                <Skeleton variant="text" width={210} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                </div>
                <Skeleton variant="rectangular" width={210} height={60} />
            </div>
        </div>
    )
}

export default NavLoading
