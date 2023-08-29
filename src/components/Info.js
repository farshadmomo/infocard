// import profileimg from '../../public/images/profile1.jpg'
export default function Info() {
    return(
    <div className='profile'>
        <img style={{width:'300px',height:'300px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='profile' src='/images/profile1.jpg'/>
        <h3>Farshad Momtaz</h3>
        <p className='job'>Front-end developer</p>
        <p className='desc'>FarshadMomtaz's website</p>
        <div className='btncontainer'>
            <button className='mailbtn'><i className="gg-mail"></i>Email</button>
            <button className='linkbtn'><i className="gg-link"></i>Linkedin</button>
        </div>
    </div>
    )
}
