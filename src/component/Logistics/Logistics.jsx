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
            </div>
        </div>
    )
}

export default Logistics
