export const StudentProfile = () => {
    return (
        <>
            <div className='content'>
                <h2>Profil Kursanta</h2>
                <form>
                    <label>Imie:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Nazwisko:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>długi text</label>
                    <textarea
                        required
                    ></textarea>
                    <label>Wybór:</label>
                    <select>
                        <option value="jeden">jeden</option>
                        <option value="dwa">dwa</option>
                    </select>
                </form>
            </div>
        </>
    )
}