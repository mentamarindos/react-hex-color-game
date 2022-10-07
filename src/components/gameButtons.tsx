import { tw } from 'twind';
import { useHexaColors } from '@/hooks/useHexaColors'
import { useEffect } from 'react';
import { useState } from 'react';

function GameButtons () {

    const [first, setFirst] = useState( useHexaColors() )
    const [second, setSecond] = useState( useHexaColors() )
    const [third, setThird] = useState( useHexaColors() )

    return (
        <div className={ tw`flex border-1 rounded bg-blue-200` }>
            <button className={tw``}>{ first }</button>
            <button className={tw``}>{ second }</button>
            <button className={tw``}>{ third }</button>
        </div>
    )
}

export default GameButtons 