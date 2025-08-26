"use client"
import React, { FormEvent, useState } from 'react'
import { Send, Mail, User, MessageSquare, Plane } from "lucide-react"

function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log({ fullname, email, subject, message });
    alert("Message sent! We'll get back to you soon.");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg backdrop-blur-lg bg-white/20 dark:bg-black/30 shadow-2xl rounded-2xl p-10 flex flex-col text-gray-800 dark:text-gray-100 animate-fadeIn"
      >
        <div className="flex items-center justify-center mb-6">
          <Plane className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-3xl font-extrabold tracking-wide">
            Contact Us
          </h1>
        </div>

        <label className="font-medium mt-4 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-400" /> Full Name
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="bg-transparent border-b-2 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md transition-all duration-200"
          required
        />

        <label className="font-medium mt-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-400" /> Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b-2 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md transition-all duration-200"
          required
        />

        <label className="font-medium mt-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-400" /> Subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-transparent border-b-2 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md transition-all duration-200"
          required
        />

        <label className="font-medium mt-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-400" /> Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-transparent border-2 py-3 px-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md transition-all duration-200 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" /> Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUs;
