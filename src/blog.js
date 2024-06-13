import './blog.css'
import bababoe from './bababoe.jpg'

export default function Blog(){
    return(
        <div className='main-secound-blog'>
            <div className='main-secound-blog-title'>
                <img src={bababoe} className='pfp'></img>
                <div className='block'>
                    <div><a href="" className='name'><b>John Doe</b></a></div>
                    <div><a href="" className='age'>4 years ago</a></div>
                </div>
            </div>
            <div className='main-secound-blog-main'>
                Video Uploads are now possible with PeepSo. 
                This is an example of an uploaded video. Video Uploads are controlled by a cron job that runs every 5 minutes. After uploading your video to this demo site, wait up to 5 minutes. Refresh the page and you’ll see it on the stream.<br/><br/>
                Users are notified by email when their video becomes available.<br/><br/>
                Please note: the file upload limit, just like many other aspects of this feature are completely configurable by the admin. We set a limit on the demo just for a few mb, but it can easily handle huge files.
                <br/><br/>
                <a>#VideoUploads</a> <a>#Video</a> <a>#Awesome </a> <a>#travel </a>
            </div>
            <div className='main-secound-blog-bottom'>
                <div className='flex'>
                    <div className='react button'>
                        2 people
                    </div>
                    <div className='react button'>
                        Share
                    </div>
                </div>
                <div>
                    <div className='coment'>
                        <div className='flex'>
                            <img src={bababoe} className='pfp'></img>
                            <div className='block'>
                                <div><a href="" className='name'><b>John Doe</b></a> aboba</div>
                                <div><a href="" className='age'>4 years ago</a></div>
                            </div>
                        </div>
                        <div>
                            asdaaqwe
                        </div>
                    </div>
                    <div className='coment'>
                        <div className='flex'>
                            <img src={bababoe} className='pfp'></img>
                            <div className='block'>
                                <div><a href="" className='name'><b>John Doe</b></a> aboba</div>
                                <div><a href="" className='age'>4 years ago</a></div>
                            </div>
                        </div>
                        <div>
                            rqyfgh
                        </div>
                    </div>
                    <div className='coment'>
                        <div className='flex'>
                            <img src={bababoe} className='pfp'></img>
                            <div className='block'>
                                <div><a href="" className='name'><b>John Doe</b></a> aboba</div>
                                <div><a href="" className='age'>4 years ago</a></div>
                            </div>
                        </div>
                        <div>
                            qweysdf
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='button'>
                    Share
                </div>
                <div className='not-auth'>
                    <div className='zamok'>P</div>
                    <div><a>Register</a> or <a>Login</a> to react or comment on this post.</div>
                </div>
                <div className='load-more-block'>
                    <button className='loadMore'>Load more</button>
                </div>
            </div>
        </div>
    )
}