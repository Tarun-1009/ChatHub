import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Github } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt', formData);
        // Add authentication logic here
    };

    return (
        <AuthLayout>
            <div className="auth-card glass-panel">
                <div className="auth-header">
                    <h2 className="auth-title text-gradient">Welcome Back</h2>
                    <p className="auth-subtitle">Log in to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Mail className="input-icon" size={20} />
                    </div>

                    <div className="input-group" style={{ marginBottom: '12px' }}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-input"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Lock className="input-icon" size={20} />
                    </div>

                    <Link href="#" className="forgot-password">
                        <span>Forgot Password?</span>
                    </Link>

                    <button type="submit" className="btn-primary">
                        <span>Login</span>
                        <LogIn size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                    </button>
                </form>

                <div className="auth-divider">
                    <span>Or continue with</span>
                </div>

                <div className="social-login">
                    <button className="social-btn" type="button">
                        <Github size={20} />
                        <span>GitHub</span>
                    </button>
                    <button className="social-btn" type="button">
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                        <span>Google</span>
                    </button>
                </div>

                <div className="auth-footer">
                    Don't have an account?{' '}
                    <Link to="/register" className="auth-link">
                        Sign up
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
