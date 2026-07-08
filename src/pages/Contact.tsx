import React, { useState } from 'react'
import toast from 'react-hot-toast'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast.success('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl text-balance">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Have questions about our products, orders, or anything else? We're here to help. Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl text-[var(--color-primary)]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Address</h3>
                  <p className="text-gray-600">123 Commerce Street<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-xl text-[var(--color-primary)]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Email</h3>
                  <p className="text-gray-600">support@shop.com<br />sales@shop.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-xl text-[var(--color-primary)]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <h3 className="font-semibold text-[var(--color-primary)] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  <i className="ri-twitter-x-line"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] tracking-tight mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="product">Product Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white py-4 px-6 rounded-lg font-semibold tracking-wide uppercase transition-colors hover:bg-[var(--color-accent)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
