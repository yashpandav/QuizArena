import './home.css'
import { Link } from 'react-router-dom';

export default function Home({isLogin}){
    return(
        <div className="home">
            <div className='text'>
                <h1>Welcome to QuizArena</h1>
                {!isLogin ? 
                            (
                                <div style={{display : "flex", justifyContent : 'space-between' , alignItems : "center" , flexWrap : "wrap" , marginTop : "13px"}}>
                                <Link id='links' to = '/signin'>
                                    <p><sub>Create a new account</sub></p>
                                </Link>
                                <Link id='links'to = '/login'>
                                    <p><sub>Already have an account ? Click to login</sub></p>
                                </Link>
                                </div>
                            ):
                            (
                                <div style={{display : "flex", justifyContent : 'center' , alignItems : "center" , flexWrap : "wrap" , marginTop : "13px"}}>
                                    <Link id = 'links' to='/exam'>
                                        <p><sub>Give your test now</sub></p>
                                    </Link> 
                                </div>
                            )
                }

            </div>
        </div>
    );
}