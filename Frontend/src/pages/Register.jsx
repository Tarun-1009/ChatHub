import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log('Registration attempt', formData);
        // Add registration logic here
    };

    return (
        <AuthLayout>
            <div className="auth-card glass-panel" style={{ animationDelay: '0.1s' }}>
                <div className="auth-header">
                    <h2 className="auth-title">Create <span className="text-gradient">Account</span></h2>
                    <p className="auth-subtitle">Join us to get started</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <User className="input-icon" size={20} />
                    </div>

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

                    <div className="input-group">
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

                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-input"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <Lock className="input-icon" size={20} />
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '16px' }}>
                        <span>Sign Up</span>
                        <UserPlus size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account?{' '}
                    <Link to="/login" className="auth-link">
                        Log in
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Register;
