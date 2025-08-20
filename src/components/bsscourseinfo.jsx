
export default function BssCourseInfo({ course }) {
    return (

        <div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p><strong>Course Code:</strong> {course.courseCode}</p>
            <p><strong>Qualification:</strong> {course.education}</p>
            <p><strong>Duration:</strong> {course.duration}</p>

            {course.subjects?.length > 0 && (
                <table className="mt-6 w-full border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">SNo</th>
                            <th className="p-2 border">Subject Code</th>
                            <th className="p-2 border">Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {course.subjects.map(sub => (
                            <tr key={sub.sno}>
                                <td className="p-2 border">{sub.sno}</td>
                                <td className="p-2 border">{sub.code}</td>
                                <td className="p-2 border">{sub.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
