import React from 'react'
import Skeleton from '@mui/material/Skeleton';

let loop = []
for (let index = 0; index < 3; index++) {
    loop.push(
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Skeleton variant="rectangular" width={100} height={110} />
                <div>
                    <Skeleton variant="text" width={80} />
                    <Skeleton variant="text" width={80} />
                    <div>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const NavLoading = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {loop.map((elem, index) => (
                <div key={index}>{elem}</div>
            ))}
        </div>
    )
}

export default NavLoading