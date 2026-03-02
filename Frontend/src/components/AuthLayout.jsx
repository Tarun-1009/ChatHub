import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="app-container">
            {/* Dynamic Background */}
            <div className="bg-shapes">
                <div className="shape-1 animate-blob"></div>
                <div className="shape-2 animate-blob animation-delay-2000"></div>
                <div className="shape-3 animate-blob animation-delay-4000"></div>
            </div>

            {children}
        </div>
    );
};

export default AuthLayout;
