// withAuth.js
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = WrappedComponent => {
    return props => {
        const router = useRouter();

        useEffect(() => {
            // Check authentication status
            // If not authenticated, redirect to login page
            // Example: if (!authenticated) router.push('/login');
            // router.push("login");
        }, []);

        // Render the protected component if authenticated
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
