import { React, useState } from 'react'
import styles from 'components/FooComponent/fooComponent.module.scss'

export default function FooComponent({initialClicks, thing}) {
    const [clicks, setClicks] = useState(initialClicks)

    return (
        <div>
            This is a test component.
            So echo  
            <span 
                onClick={() => setClicks(prevCount => prevCount + 1)}
                className={styles.yo}> {clicks} {thing}
            </span>
        </div>
    )
}
