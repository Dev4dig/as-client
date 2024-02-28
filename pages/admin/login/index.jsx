import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async e => {
        e.preventDefault();

        // Perform authentication logic, e.g., call an API endpoint
        try {
            const userData = await yourAuthenticationFunction(
                username,
                password
            );
            login(userData);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border bg-white w-80 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-2">
                    <label className="block mb-2 font-normal font-sans text-gray-700">
                        Username / Email:
                        <input
                            className="w-full p-2 border border-gray-300 rounded-sm"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label className="block mb-2 font-normal text-gray-700 font-sans">
                        Password:
                        <input
                            className="w-full p-2 border border-gray-300 rounded-sm"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button
                        className="w-full bg-[#CC0909] text-white py-2 rounded-sm hover:bg-[#ee090c]"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
