import { useEffect} from 'react';
import '../css/ProjectsDisplay.css'
import {work} from '../Data/Projects'

let defin = {
  root: null,
  rootMargin: "20px",
  threshold: [0.1,1.0],
};

export default function progressComponent()
{
  //Array 
  const listWork = work.map((works, index) => 
    <section key={works.id = 'works'+index} id={works.id} className='container'>

      <div className='left-panel'>
        <h2 style={{textDecoration: 'underline'}}>{works.title}</h2>
        <h3>{works.company}</h3>
        <p>{works.description}</p>
      </div>

      <div className='center-panel' style={{ padding: "0px"}}>
        <div className="progress-bar ">  
          <div className='progress'/>
        </div>
      </div>

      <div className='right-panel'>
        <h2>{works.location}</h2>
        <h3>{works.year}</h3>
      </div>

    </section>
  );

  useOnScreen();

  return(
    <div style={{padding: '2rem'}} >
      <div className="code-loader">
        {autoFill()}
      </div>
      {listWork}
    </div>
  )
}
//Generate all letters in {WORK} so i dont have to do it manually lol
function autoFill(){
  let str : string = '{work}'
  var result = [];
  for(let i = 0; i < str.length; i++)
  {
    result.push(<span>{str[i]}</span>)
  }
  //debugger;
  return result;
}

function useOnScreen() {

  useEffect(() => {

    const objToChange = document.querySelectorAll<Element>('section');

    const observer = new IntersectionObserver( entries => {
      
      entries.forEach((entry) =>{
        //debugger;
        //Here's all the what happens once target is 100% seen
        
        if(entry.intersectionRatio >= 1 && entry.isIntersecting)
        {   
          //Jesus, hope no one sees
          entry.target.classList.add('animationIn');
          entry.target.children[1].children[0].children[0].classList.add('animationOpacity');
        }
        /*if(!entry.isIntersecting){
          entry.target.children[2].children[0].children[0].style.animation = "out 1s forwards";
          entry.target.style.animation = 'opacityOut 4s forwards';
        }*/
      });
    }, defin);

    objToChange.forEach((section) => {
      observer.observe(section);
    })
  
  });
}