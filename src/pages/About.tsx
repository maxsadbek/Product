import React from 'react'
import { Link } from 'react-router'

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="About hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl text-balance">
            Crafting exceptional products since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe in creating products that enhance everyday life. Our commitment to quality, sustainability, and innovation drives everything we do. We're not just selling products – we're building a community of conscious consumers who value craftsmanship and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-leaf-line text-2xl text-[var(--color-primary)]"></i>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Sustainability</h3>
            <p className="text-gray-600">We prioritize eco-friendly materials and ethical manufacturing processes to minimize our environmental impact.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line text-2xl text-[var(--color-primary)]"></i>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Quality First</h3>
            <p className="text-gray-600">Every product undergoes rigorous testing to ensure it meets our high standards of durability and performance.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-line text-2xl text-[var(--color-primary)]"></i>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Customer Focus</h3>
            <p className="text-gray-600">Our customers are at the heart of everything we do. We listen, adapt, and continuously improve based on your feedback.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A passionate group of individuals dedicated to bringing you the best products and experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop' },
              { name: 'Michael Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop' },
              { name: 'Emily Davis', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop' },
              { name: 'David Wilson', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square bg-gray-200 rounded-full overflow-hidden mb-4 mx-auto w-48 h-48">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-[var(--color-primary)]">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[var(--color-primary)] rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Join Our Journey</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Be part of our growing community. Subscribe to our newsletter for exclusive updates, early access to new products, and special offers.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-[var(--color-primary)] px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-colors hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
