import PartyDetails from '../PartyDetails/PartyDetails'
import './AddParty.css'
const AddParty = () => {
    return (
        <div>
        <div className='partyContainer'>
            <div class="label">
            <i class="fa-solid fa-chevron-up"></i>
                <div class="text1">Booking Party Information</div>
                <div className="text2">(Enter as much as possible)</div>
            </div>
            <div className="label2">
                <div className="text3">Use information on account?</div>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round">Yes No</span>
                </label>
            </div>
        </div>
        <PartyDetails/>
        <div className="partyContainer">
        <div class="label labelmt">
            <i class="fa-solid fa-chevron-up"></i>
                <div class="text1">Opposite Party Information</div>
            </div>
        </div>
        <PartyDetails/>
        <button type='submit' className='addparty'>
            <i class="fa-solid fa-plus"></i>
            <span id='additional'>ADDITIONAL PARTIES</span>
            </button>
        </div>
    )
}

export default AddParty
