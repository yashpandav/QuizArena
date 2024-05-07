import { useEffect, useState } from 'react';
import data from '../data/data.js';
import './exam.css';
import { Link, useNavigate } from 'react-router-dom';
import TimeCounter from './TimeCounter.jsx';
export default function Exam({ isLogin, setNavigation , setUser}) {
    const [examCategory, setCategory] = useState('');
    const [startExam, setstartExam] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = data.filter(item => {
            if (examCategory === 'All') return true;
            return item.category === examCategory;
        });
        setFilteredData(filtered);
    }, [examCategory]);

    if (!startExam) {
        setNavigation(true);
    }

    function startExamHandler() {
        let date = new Date();
        let month = date.getMonth();
        month = month + 1;
        setNavigation(false);
        setstartExam(true);
    }

    return isLogin ? (
        <div id='exam'>
            {startExam ? (
                <>
                    <TimeCounter setUser = {setUser} startExam={startExam} setstartExam={setstartExam} examCategory={examCategory} filteredData={filteredData}></TimeCounter>
                </>
            ) : <div id='exam-btns'>
                <button className='quiz-btn' onClick={() => { setCategory('DSA'); startExamHandler(); }}>Take DSA Quiz</button>
                <button className='quiz-btn' onClick={() => { setCategory('Programming'); startExamHandler(); }}>Take Programming Quiz</button>
                <button className='quiz-btn' onClick={() => { setCategory('All'); startExamHandler(); }}>Take Mix Quiz</button>
            </div>}
        </div>
    ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginTop: '13px' }}>
            <Link id='links' to='/login'>
                <p><sub>Please Log In to give exam</sub></p>
            </Link>
        </div>
    );
}
