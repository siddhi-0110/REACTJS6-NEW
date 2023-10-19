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
            <p>Hello! I'm Nndiki Neha, a dedicated student currently pursuing my bachelor's degree at VIT. My insatiable curiosity drives me to explore and master emerging technologies. While my foundation lies in web development, my horizons extend to the captivating realms of data science and deep learning. With a passion for learning and a thirst for innovation, I'm on a journey to transform complex concepts into powerful solutions. </p>
            <p>Welcome to my portfolio, where you'll discover the fusion of my academic pursuits and creative endeavors. Explore and enjoy the diverse dimensions of my technological odyssey.</p>
        </div>
    </div>
    )
}