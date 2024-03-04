import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(null); // Updated state name
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_HOST;
    const router = useRouter();

    const handleLogin = async e => {
        e.preventDefault();

        // Start the loading state
        setLoading(true);
        setMsg(null); // Updated state name

        // Perform authentication logic, e.g., call an API endpoint
        try {
            const userData = await yourAuthenticationFunction(
                username,
                password
            );

            if (userData.success) {
                // Set the authentication flag to true
                setIsAuthenticated(true);

                // Set the authentication status in local storage
                localStorage.setItem("authenticated", "true");
                // Set a cookie with an authentication token
                document.cookie = `token=${userData.token}; path=/`;

                // Reset loading state
                setLoading(false);
                // Clear any previous message
                setMsg({ type: "success", text: "Success! Redirecting..." });
                router.push("dashboard");
            } else {
                setLoading(false);
                // Clear any previous message
                setMsg({ type: "failure", text: "Wrong Credentials" });
            }

            // Redirect or perform any action on successful login
            // e.g., use router.push('/dashboard') for Next.js routing
        } catch (error) {
            // Set the message state
            setMsg({ type: "failure", text: "Login failed! Some error" });
            // Reset loading state
            setLoading(false);
        }
    };

    const delay = async milliseconds => {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    };

    const yourAuthenticationFunction = async (username, password) => {
        console.log("checking login ...");
        const response = await fetch(apiUrl + "/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const responseBody = await response.json();
            console.log("Login successful");
            console.log(responseBody);
            if (responseBody.success) {
                return responseBody;
            } else {
                return { success: false };
            }
        } else {
            // Failed login
            console.error("Login failed");
            return { success: false };
        }

        await delay(1000);
        return { success: false };
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border w-80 p-8 rounded-lg shadow-lg bg-black">
                <img src="/images/logo2.png" alt="Logo" />
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-2">
                    <label className="block mb-2 font-normal font-sans text-gray-400">
                        Username / Email:
                        <input
                            className="w-full p-2 border border-gray-300 rounded-sm"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label className="block mb-2 font-normal text-gray-400 font-sans">
                        Password:
                        <input
                            className="w-full p-2 border border-gray-300 rounded-sm"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button
                        className={`w-full ${
                            msg?.type === "success"
                                ? "bg-green-500"
                                : "bg-[#CC0909]"
                        } text-white py-2 rounded-sm hover:bg-[#ee090c]`}
                        type="submit"
                        disabled={loading} // Disable the button during loading
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    {msg && (
                        <p
                            className={`mt-2 ${
                                msg.type === "success"
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {msg.text}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
