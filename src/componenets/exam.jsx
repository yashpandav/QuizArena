import './exam.css'

export default function Exam(){
    return(
        <div id='exam'>
            <div id='exam-btns'>
                <button className='quiz-btn'>Take DSA Quiz</button>
                <button className='quiz-btn'>Take Programming Quiz</button>
                <button className='quiz-btn'>Take Mix Quiz</button>
            </div>
        </div>
    );
}