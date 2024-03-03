import React, { useState } from "react";

const ContactForm = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_HOST;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Replace with your API endpoint
            const response = await fetch(apiUrl + "/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully!");
                // Reset form fields if needed
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                console.error("Form submission failed.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col gap-5  w-full "
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-white text-2xl font-normal mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-[4.875rem] p-2 border rounded-sm bg-transparent text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block  font-normal mb-2  text-white text-2xl"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email addres"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-[4.875rem] p-2 border rounded-sm  bg-transparent text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-white font-normal mb-2 text-2xl"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message here"
                        rows="4"
                        className="w-full p-2 border rounded-sm  bg-transparent text-white"
                        required
                    ></textarea>
                </div>

                <div className="submit flex justify-between">
                    <p className="text-white">
                        We will get back to you within <br /> one business day
                    </p>
                    <button
                        type="submit"
                        className="bg-[#ccaf40] text-white py-2 px-4 rounded-md hover:bg-[#bda33b] transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
