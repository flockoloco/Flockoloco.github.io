import { ReactTyped } from 'react-typed';
import '../css/Header.css'
import {media} from '../Data/Media'
import {introduction} from '../Data/Media'

export default function headerIcon()
{
    const openLink = (url : string) => {
        window.open(url, "_blank", "noreferrer")
    }

    const listButtons = media.map((button,index) => 
        <div>  
            <button key={button.id = 'button'+index} id={button.id} className="button" onClick={ () =>
                {if(button.nome == 'email')
                    {
                        navigator.clipboard.writeText(button.src);
                        alert('Gmail copied to clipboard!');
                    }
                else{
                    openLink(button.src);
                }}
            }>
                <img src={button.icon} alt="Logo" />
            </button>
        </div>
    );
    
    return(
        <div style={{padding: '2rem'}} >
            <h1><ReactTyped
                strings={["My name is Arthur", "I'm a Developer", "This is my Portfolio"]}
                typeSpeed={80}
                loop
                backSpeed={40}
                cursorChar='|'
                showCursor
                />
            </h1>

            <>
                {introduction}
            </>
            
            <div className='buttonContainer'>
                {listButtons}
            </div>
            
        
        </div>
        
    )
}