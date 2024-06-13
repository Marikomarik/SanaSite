import './Main.css'
import bababoe from './bababoe.jpg'
import negr from './negr.jpg'
import Blog from './blog.js'

export default function Main(){
    return(
        <div className='main'>
            <div className='main-first'>
                <div className='auth'>
                    <div>
                        <input placeholder="Username" type="text" className='Us-Pa-inp'></input>
                    </div>
                    <div>
                        <input placeholder="Password" type="text" className='Us-Pa-inp'></input>
                    </div>
                    <a href="" className='remember'>
                        Remember Me
                    </a>
                    <div className='auth-block'>
                        <div>
                            <button href="" className='login-button'>Login</button>
                        </div>
                        <div className='auth-block-forgot'>
                            <a href="">Register</a>
                            <a href="">Forgot</a>
                            <a href="">Password</a>
                        </div>
                    </div>
                </div>
                <div className='latest-members'>
                    <div className='latest-members-text'>
                        <b>Latest Members</b>
                    </div>
                    <div className='latest-members-ph'>
                        <img src={bababoe} className='pfp'></img>
                        <img src={bababoe} className='pfp'></img>
                        <img src={bababoe} className='pfp'></img>
                        <img src={bababoe} className='pfp'></img>
                        <img src={bababoe} className='pfp'></img>
                    </div>
                </div>
            </div>
            <div className='main-secound'>
                <img src={negr} className='main-secound-img'></img>
                <div className='main-secound-auth'>
                    <div className='main-secound-auth-1'>
                        <input placeholder="Username" type="text" className='Us-Pa-inp'></input>
                        <input placeholder="Password" type="text" className='Us-Pa-inp'></input>
                        <div>
                            <button href="" className='login-button'>Login</button>
                        </div>
                    </div>
                    <div className='main-secound-auth-2'>
                        <a href="" className='remember'>
                            Remember Me
                        </a>
                        <div className='auth-block-forgot'>
                            <a href="">Register</a>
                            <a href="">Forgot</a>
                            <a href="">Password</a>
                        </div>
                    </div>     
                </div>
                <Blog/>
            </div>
            <div className='main-third'>
                <div className='demo-login'>
                    <b>Login to our demo</b>
                    <br/><br/><br/>
                    <b>Dear Customers, login below to see all the features:</b>
                    <p>
                    If you’d like to see a regular community member account,
                     please login with:
                    </p>
                    <p>
                        Login: <strong>joker</strong>
                        <br/>
                        Password: <strong>pass</strong>
                    </p>
                </div>    
                <div className='hastag-block'>
                    <p>
                        <strong>Community Hashtags</strong>
                    </p>
                    <div className='Hast'>
                        <a className='Hastag'>#60bin</a>
                        <a className='Hastag'>#ananas</a>
                        <a className='Hastag'>#aboba</a>
                        <a className='Hastag'>#cool</a>
                        <a className='Hastag'>#deb</a>
                        <a className='Hastag'>#sw3y</a>
                        <a className='Hastag'>#s1wy</a>
                        <a className='Hastag'>#swasy</a>
                        <a className='Hastag'>#sw2y</a>
                        <a className='Hastag'>#swdy</a>
                        <a className='Hastag'>#sywey</a>
                        <a className='Hastag'>#sw</a>
                        <a className='Hastag'>#sw5qwesy</a>
                        <a className='Hastag'>#swy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
