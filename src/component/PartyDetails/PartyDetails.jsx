import './PartyDetails.css'
const PartyDetails = () => {
    return (
        <div className='partyDetails'>
            <div className="name">
                <div className="box">
                    <label htmlFor="fname">Firm Name</label>
                    <select name="fname" id="fname" className='boxInput'>
                        <option value="input">Input</option>
                    </select>
                </div>
                <div className="box">
                    <label htmlFor="bcn">Booking Contact Name</label>
                    <input type="text" id='bcn' className='boxInput' placeholder='Type here' />
                </div>
                <div className="box">
                    <label htmlFor="pn">Phone Number (No Spaces)</label>
                    <input type="text" id='pno' className='boxInput' placeholder='Type here' />
                </div>
            </div>

            <div className="name">
                <div className="box">
                    <label htmlFor="ba">Billing Address</label>
                    <input type="text" id='ba' className='boxInput' placeholder='Type here' />
                </div>
                <div className="box">
                    <label htmlFor="zp">ZIP/Postal Code</label>
                    <input type="text" id='zp' className='boxInput' placeholder='Type here' />
                </div>
                <div className="box">
                    <label htmlFor="cc">Country/City</label>
                    <input type="text" id='cc' className='boxInput' placeholder='Type here' />
                </div>
            </div>
            <div className="name roleinfo">
                <div className="box">
                    <label htmlFor="fname">Role</label>
                    <select name="fname" id="fname" className='boxInput'>
                        <option value="input">Input</option>
                    </select>
                </div>
                <div className="box">
                    <label >Name of Represented Client</label>
                    <input type="text" className='boxInput' />
                </div>
            </div>

            <div className="name roleinfo">
                <div className="box">
                    <label >Lead counsel(s)information</label>
                    <input type="text" className='boxInput' placeholder='Name' />
                </div>
                <div className="dots"><i class="fa-solid fa-ellipsis"></i></div>
                <div className="box">
                    <input type="text" className='email boxInput' placeholder='Email' />
                </div>
            </div>

            <div className="name roleinfo">
                <div className="box" id="box2">
                    <div className="add">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <input type="text" className='email boxInput' placeholder='Add additional counsel' />
                </div>
                <div className="dots"><i class="fa-solid fa-ellipsis"></i></div>
                <div className="box">
                    <input type="text" className='email boxInput' />
                </div>
            </div>
        </div>
    )
}

export default PartyDetails
