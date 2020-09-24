import React from 'react'

function MemoComp({name}) {
    console.log('Rebdering Memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)