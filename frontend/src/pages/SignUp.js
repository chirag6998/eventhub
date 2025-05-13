import ButtonComponent from '../components/button';
import InputComponent from '../components/input';
import { useState } from 'react';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        reEnterPassword: '',
        accountType: 'user'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    };

    const fieldLabels = {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        username: 'Username',
        password: 'Password',
        reEnterPassword: 'Re-enter Password'
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <nav className="bg-blue-600 p-4 w-full">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">Event Hub</h1>
                </div>
            </nav>

            <div className="flex items-center justify-center w-full flex-grow pt-12">
                <form
                    className="w-full max-w-sm md:max-w-md bg-white px-6 py-8 rounded-2xl shadow-lg space-y-6"
                    onSubmit={handleSubmit} autoComplete="off"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-800">Register Yourself</h2>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="http://localhost:3000" className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out">
                            Login here
                        </a>
                    </p>

                    {Object.keys(formData).map((field) => (
                        field !== 'accountType' && (
                            <div key={field}>
                                <InputComponent
                                    type={field.includes('password') ? 'password' : 'text'}
                                    placeholder={fieldLabels[field]}
                                    width="50%"
                                    value={formData[field]}
                                    onChange={handleChange}
                                    name={field}
                                    id={field}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    autoComplete='off'
                                />
                            </div>
                        )
                    ))}

                    <div className="flex justify-center gap-4">
                        <label className="flex items-center cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="accountType"
                                value="user"
                                checked={formData.accountType === 'user'}
                                onChange={handleChange}
                                className="w-5 h-5 border border-gray-400 rounded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                                autoComplete='off'
                            />
                            <span className="text-gray-800 font-medium">As a user</span>
                        </label>

                        <label className="flex items-center cursor-pointer gap-2">
                            <input
                                type="radio"
                                name="accountType"
                                value="company"
                                checked={formData.accountType === 'company'}
                                onChange={handleChange}
                                className="w-5 h-5 border border-gray-400 rounded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                                autoComplete='off'
                            />
                            <span className="text-gray-800 font-medium">As a company</span>
                        </label>
                    </div>


                    <ButtonComponent
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
                    >
                        Sign Up
                    </ButtonComponent>
                </form>
            </div>
        </div>
    );
}

export default SignUp;