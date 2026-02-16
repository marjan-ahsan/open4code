import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="border-t border-border bg-bg">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand */}
                    <div>
                        <button onClick={() => navigate('/')} className="font-heading text-lg font-black tracking-tight text-text-primary hover:text-primary transition-colors">
                            Open4Code
                        </button>
                        <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
                            A free, open-source learning platform built for the next generation of developers.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-4">Platform</h4>
                        <div className="flex flex-col gap-2">
                            <button onClick={() => navigate('/explorer')} className="text-sm text-text-secondary hover:text-text-primary transition-colors text-left">Courses</button>
                            <button onClick={() => navigate('/about')} className="text-sm text-text-secondary hover:text-text-primary transition-colors text-left">About</button>
                            <button onClick={() => navigate('/changelog')} className="text-sm text-text-secondary hover:text-text-primary transition-colors text-left">Changelog</button>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-4">Connect</h4>
                        <div className="flex flex-col gap-2">
                            <a href="mailto:atlanticweb000@gmail.com" className="text-sm text-text-secondary hover:text-text-primary transition-colors">atlanticweb000@gmail.com</a>
                            <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                    <p className="text-xs text-text-tertiary">&copy; {new Date().getFullYear()} Open4Code. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;