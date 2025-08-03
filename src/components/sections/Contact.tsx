'use client'

import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-100 text-center">
      <h2 className="text-4xl font-semibold text-indigo-700 mb-6">Contact Us</h2>
      <p className="text-slate-600 mb-8">
        We'd love to hear from you. Email us at <strong>hello@novabiotech.com</strong> or fill out the form below.
      </p>

      <form className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          className="border border-slate-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  )
}
