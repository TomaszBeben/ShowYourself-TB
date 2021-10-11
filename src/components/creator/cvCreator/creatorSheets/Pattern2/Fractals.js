import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'

const Fractals = () => {
    const { color } = useAuth();

    let elem = []
    for (let i = 0; i < 8; i++) {
        elem.push(i)
    }
    return (
        <>
            <div className='fractal--top__container'>
                {elem.map((fractal) => (
                    <div
                        style={{
                            top: `calc(-25mm - (68mm * ${fractal}))`,
                            left: `calc(-60mm + (36mm * ${fractal}))`,
                            transform: `rotate(calc(5deg + (2deg * ${fractal})))`,
                            backgroundColor: `${color}`
                        }}
                        key={fractal}
                        className={`fractals`}>
                    </div>
                ))}
            </div>
            <div className='fractal--bottom__container'>
            {elem.map((fractal) => (
                    <div
                        style={{
                            top: `calc(80mm - (68mm * ${fractal}))`,
                            left: `calc(-60mm + (36mm * ${fractal}))`,
                            transform: `rotate(calc(5deg + (2deg * ${fractal})))`,
                            backgroundColor: `${color}`
                        }}
                        key={fractal}
                        className={`fractals`}>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Fractals
