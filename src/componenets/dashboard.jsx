import './dashboard.css'

export default function Dashboard({ userData }) {
    return (
        <div id="dashboard">
            <h3>Dashboard</h3>
            <div id="dashArea">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exam Type</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.dashboard.map((data, index) => (
                            <tr key={index}>
                                <td>{data.date}</td>
                                <td>{data.examCategory}</td>
                                <td>{data.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
