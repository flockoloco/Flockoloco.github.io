import '../css/AchievementStyle.css'
import {education} from '../Data/AchievementsData'
import {certificate} from '../Data/AchievementsData'


export default function Achievements()
{

    const educationMap = education.map( (educ, _index) => 
        <div className='card'>
            <img src={educ.Image}></img>
            <div style={{flexDirection: 'column', width: '100%'}}>
                <h3>{educ.Title}</h3>
                <p>{educ.Type}</p>
                <p>{educ.Description}</p>
            </div>
            <legend>{educ.DateOfConclusion}</legend>
        </div>
    )
    const certificationMap = certificate.map( (cert, _index) => 
        <div className='card'>
            <img src={cert.Image}></img>
            <div style={{flexDirection: 'column' , width: '100%'}}>
                <h3>{cert.Title}</h3>
                <p>{cert.Type}</p>
                <p>{cert.Description}</p>
            </div>
            <legend>{cert.DateOfConclusion}</legend>
        </div>
    )



    return(
        <div style={{backgroundColor: "#222222", padding: '2rem'}}>
            <div className='containerCards'>
                <>
                    {educationMap}
                </>
            </div>
            <div className='containerCards'>
                <>
                    {certificationMap}
                </>
            </div>
        </div>
    )
}