import self from './avatar.jpg';
import './style.css';
export default function Home(){
    return(<div>
    <h1>Home Page</h1>
    <center>
    <div>
    <img src={self} alt="me" style={{height:"400px",width:""}}/>
        </div></center>
        <div>
            <p>Hello! I'm Siddhi B Kadam, a dedicated student currently pursuing my bachelor's degree at VIT. My passion lies in web development, and I'm enthusiastic about exploring and mastering the latest technologies in this field. I'm on a continuous journey to create innovative and powerful web solutions. Whether it's designing beautiful and responsive user interfaces, building efficient back-end systems, or crafting engaging user experiences, web development is where my heart lies.</p>
            <p>Welcome to my portfolio, where you'll discover the fusion of my academic pursuits and creative endeavors. Explore and enjoy the diverse dimensions of my technological odyssey.</p>
        </div>
    </div>
    )
}