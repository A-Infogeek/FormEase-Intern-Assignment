import './Timeline.css';
const Timeline = () => {
    return (
        <div className="timelineBody">
            <div className='container'>
                <div className="circle">
                    1
                </div>
                <div class="text"><div class="text-wrapper">Initial Information</div></div>
            </div>
            <hr className="line" />
            <div className='container'>
                <div className="circle">
                    2
                </div>
                <div className='text'><div class="text-wrapper">Party Information</div></div>
            </div>
            <hr className="line" />
            <div className='container'>
                <div className="circle">
                    3
                </div>
                <div className='text'><div class="text-wrapper">Logistics</div></div>
            </div>
            <hr className="line" />
            <div className='container'>
                <div className="circle">
                    4
                </div>
                <div className='text'><div class="text-wrapper">Additional Services</div></div>
            </div>
        </div>
    )
}

export default Timeline
