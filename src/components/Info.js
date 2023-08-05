import profileimg from '../images/profile1.jpg'
export default function Info() {
    return(
    <div className='profile'>
        <img style={{width:'300px',height:'300px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='profile' src={profileimg}/>
        <h3>Farshad Momtaz</h3>
        <p className='job'>Front-end developer</p>
        <p className='desc'>FarshadMomtaz's website</p>
        <div className='btncontainer'>
            <button></button>
            <button></button>
        </div>
    </div>
    )
}
