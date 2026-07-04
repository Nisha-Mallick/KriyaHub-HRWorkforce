import { useState } from 'react';
import { X, Upload, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import { cn } from '../../utils/cn.js';
import { generateLoginId, generateTempPassword } from '../../utils/generateAuthUtils.js';

export default function AuthModal({ isOpen, onClose }) {
  const [view, setView] = useState('signin'); // 'signin' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { login } = useAuth();

  // Sign In State
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up State
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!isOpen) return null;

  const handleSignIn = (e) => {
    e.preventDefault();
    // Dummy login: create a mock user. If we wanted, we could parse loginId to infer name.
    login({
      id: loginId || 'USER1',
      name: loginId || 'Demo Employee',
      role: loginId.toLowerCase().includes('admin') ? 'admin' : 'employee', // HACK for demo
      email: loginId.includes('@') ? loginId : `${loginId}@demo.com`,
      avatarColor: 'bg-blue-500',
    });
    onClose();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Auto-generate ID just to demonstrate the logic. 
    // Usually this ID is shown to the user or sent via email.
    const parts = name.split(' ');
    const first = parts[0] || 'User';
    const last = parts.length > 1 ? parts[parts.length - 1] : 'Name';
    
    const newId = generateLoginId(companyName, first, last, new Date().getFullYear(), 1);
    
    // Simulate successful company registration. 
    // They become an admin of their new workspace.
    login({
      id: newId,
      name: companyName || name, // Fallback to name if company name is not provided
      role: 'admin', // Company creator is admin
      email: email,
      avatarColor: 'bg-indigo-500',
      avatarUrl: companyLogo, // Pass the uploaded logo URL
      companyName: companyName
    });
    onClose();
    // Optionally alert them of their new ID
    alert(`Registration Successful!\nYour system-generated Login ID is: ${newId}\nPlease use this for future logins.`);
  };

  const toggleView = () => {
    setView(view === 'signin' ? 'signup' : 'signin');
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className={cn(
          "relative w-full overflow-hidden rounded-2xl bg-card shadow-2xl transition-all duration-300",
          view === 'signin' ? "max-w-md" : "max-w-lg"
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-colors focus-ring"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-auto max-w-[200px] items-center justify-center rounded-xl bg-gray-100 px-6 py-2">
              <span className="font-bold text-gray-700">App/Web Logo</span>
            </div>
            <h2 className="text-2xl font-semibold text-text-primary">
              {view === 'signin' ? 'Welcome Back' : 'Create an Account'}
            </h2>
          </div>

          {view === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Login Id/Email :-</label>
                <input
                  type="text"
                  required
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Password :-</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-400 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/40 active:scale-[0.98]"
              >
                SIGN IN
              </button>

              <p className="mt-6 text-center text-sm text-text-secondary">
                Don't have an Account?{' '}
                <button type="button" onClick={toggleView} className="font-medium text-primary hover:underline">
                  Sign Up
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <label className="mb-1.5 block text-sm font-medium text-text-secondary">Company Name :-</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    title="Upload Company Logo"
                  />
                  <button type="button" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-colors relative overflow-hidden">
                    {companyLogo ? (
                      <img src={companyLogo} alt="Logo" className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <Upload className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Name :-</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Email :-</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Phone :-</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div className="relative">
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Password :-</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-4 pr-10 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-2 right-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                </button>
              </div>

              <div className="relative">
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Confirm Password :-</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-4 pr-10 py-2 text-sm outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute bottom-2 right-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                </button>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-400 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/40 active:scale-[0.98]"
              >
                Sign Up
              </button>

              <p className="mt-4 text-center text-sm text-text-secondary">
                Already have an account?{' '}
                <button type="button" onClick={toggleView} className="font-medium text-primary hover:underline">
                  Sign In
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
