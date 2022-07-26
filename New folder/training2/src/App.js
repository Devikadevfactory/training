import logo from './image/logo.svg'

export default function App() {
    return <>
        <div className='home_row1'>
            <div className='home_r1_c1'>
                <div className='home_r1_c1_img'>
                    <img src={logo} />
                </div>
                <div className='home_r1_c1_txt'>
                    <label className='home_r1_c1_txt1'>Christian Matrimony.com</label>
                    <label className='home_r1_c1_txt1'>From Matrimony.com group</label>
                </div>
            </div>
            <div className='home_r1_c2'>
                <label className='home_r1_c2'>Already a member</label>
                <div>
                  <button>login</button>
                </div>
            </div>
        </div>
    </>
}   