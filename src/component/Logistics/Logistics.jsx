import Timeline from '../Timeline'
import './Logistics.css'

const Logistics = () => {
    return (
        <div className='mainLogistics'>
            <Timeline />
            <div className="label lablelogistics">
                <i class="fa-solid fa-chevron-up"></i>
                <div class="text1">Basic Logistics</div>
            </div>
            <div className="logisticsBody">
                <div className="logisticsheader">
                    <p>Upload Cover Page (optional)</p>
                    <div className='fileUpload'><p>Choose file here</p><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                </div>
                <div className="logisticsInput">
                    {/* first row */}
                    <div className="name ll">
                        <div className="box">
                            <label htmlFor="fname">Style of cause</label>
                            <input type="text" className='boxInput' placeholder='Type here' />
                        </div>
                        <div className="box">
                            <label >Court File#</label>
                            <input type="text" className='boxInput' placeholder='Type here' />
                        </div>
                        <div className="box">
                            <label >Booking Date</label>
                            <select name="fname" id="date" className='boxInput'>
                                <option ><i class="fa-regular fa-calendar"></i>  -----</option>
                            </select>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="name ll">
                        <div className="box box3">
                            <label htmlFor="fname">Start Time</label>
                            <select name="fname" className='boxInput'></select>
                        </div>
                        <div className="box box3">
                            <label >End Time</label>
                            <select name="fname" className='boxInput'></select>
                        </div>
                        <div className="box box3">
                            <label >Time Zone</label>
                            <input type="text" className='boxInput' />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="name ">
                        <div className="box">
                            <label >Arbitrator(s)</label>
                            <input type="text" className='boxInput' placeholder='Name' />
                        </div>
                        <div className="dots"><i class="fa-solid fa-ellipsis"></i></div>
                        <div className="box">
                            <input type="text" className='email boxInput' placeholder='Email' />
                        </div>
                    </div>

                    <div className="name">
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
            </div>
        </div>
    )
}

export default Logistics
