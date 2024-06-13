import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='flex-justify-bettwen'>
                <div className='about'>
                <p><strong>About</strong></p>
                Aenean auctor wisi et urna. 
                Aliquam erat volutpat. 
                Duis ac turpis. Donec sit amet eros. 
                Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit.<br/><br/>
                Mauris fermentum dictum magna. 
                Sed laoreet aliquam leo. 
                Ut tellus dolor, dapibus eget, 
                elementum vel, cursus eleifend, elit. 
                Aenean auctor wisi et urna.
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
            <div className='copy-right'>
            Copyright  <strong>Matebook</strong>  © 2020. All Rights Reserved.
            </div>
        </footer>
    )
}