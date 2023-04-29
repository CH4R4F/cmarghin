"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import * as Icon from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

    setErrors("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setErrors("Name is required");
      return;
    } else if (!email || !email.match(/.+@.+\..+/)) {
      setErrors("Email is required");
      return;
    } else if (!message) {
      setErrors("Message is required");
      return;
    }

    setErrors("");
    setLoading(true);

    const data = {
      name,
      email,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    } else {
      setErrors("Something went wrong");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="max-w-2xl mt-20 px-4 md:px-8 space-y-4">
        <div className="flex items-center justify-center">
          <Icon.FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        <h2 className="text-2xl font-bold text-center dark:text-gray-100">
          Thank you for your message!
        </h2>
        <p className="text-center dark:text-gray-100">
          I will get back to you as soon as possible ^_^
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl px-4 md:px-8 mt-10 space-y-7"
    >
      <div>
        <label
          htmlFor="UserName"
          className="dark:text-gray-100 block font-medium text-gray-700"
        >
          Name
        </label>

        <input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          id="UserName"
          placeholder="John Doe"
          className="p-4 mt-1 w-full rounded-md border-2 border-gray-400 dark:border-gray-400/10 focus:border-gray-800 dark:focus:border-gray-400/30 focus:outline-none focus:ring-0 shadow-sm sm:text-sm dark:bg-gray-400/10 dark:text-white"
        />
      </div>
      <div>
        <label
          htmlFor="UserEmail"
          className="dark:text-gray-100 block font-medium text-gray-700"
        >
          Email
        </label>

        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          id="UserEmail"
          placeholder="john@rhcp.com"
          className="p-4 mt-1 w-full rounded-md border-2 border-gray-400 dark:border-gray-400/10 focus:border-gray-800 dark:focus:border-gray-400/30 focus:outline-none focus:ring-0 shadow-sm sm:text-sm dark:bg-gray-400/10 dark:text-white"
        />
      </div>
      <div>
        <label
          htmlFor="UserMessage"
          className="dark:text-gray-100 block font-medium text-gray-700"
        >
          Message
        </label>

        <textarea
          value={message}
          onChange={handleChange}
          name="message"
          id="UserMessage"
          rows={7}
          placeholder="Hello, I'm John Doe"
          className="p-4 mt-1 w-full rounded-md border-2 border-gray-400 dark:border-gray-400/10 focus:border-gray-800 dark:focus:border-gray-400/30 focus:outline-none focus:ring-0 shadow-sm sm:text-sm dark:bg-gray-400/10 dark:text-white resize-none"
        />
      </div>

      <div className="flex items-center space-x-5">
        <button className="relative px-10 py-5 text-sm text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700 focus:outline-none transition-all duration-200">
          {loading ? <div className="loader text-white"></div> : "Send"}
        </button>

        {errors && <p className="text-red-500 text-sm font-medium">{errors}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
