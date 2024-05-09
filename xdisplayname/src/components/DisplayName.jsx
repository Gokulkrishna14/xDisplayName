import { useState } from "react";

const DisplayName = () => {
    const [user, setUser] = useState({firstName: "", lastName: ""});
    const [displayName, setDisplayName] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        setUser({firstName, lastName}); 
        setDisplayName(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" required />
            <br />
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" required />
            <br />
            <button type="submit">Submit</button>
            </form>
            {displayName && (
                <div>
                    Full Name: {user.firstName} {user.lastName}
                </div>
            )}

        </div>
    )
}

export default DisplayName;