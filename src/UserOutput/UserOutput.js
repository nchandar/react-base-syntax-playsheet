import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className='UserOpt'>
            <p>{props.username}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis istud possit, inquit, negare? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Non est ista, inquam, Piso, magna dissensio. Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur.</p>
        </div>
    )
}

export default UserOutput;