import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, Eye, Server, RefreshCw } from 'lucide-react';
import Sparkle from './Sparkle';

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-[#1A1026] text-white selection:bg-ja-purple/30 selection:text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ja-purple/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#4F327C]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-[#1A1026]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#home" onClick={onBack} className="flex items-center gap-3 group">
            <img src="/logo.png" alt="JA Events Logo" className="h-10 w-auto" />
            <span className="font-serif text-lg font-bold text-white tracking-wide">JA Events</span>
          </a>

          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-ja-purple text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-ja-purple"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ja-purple/20 border border-ja-purple/40 text-ja-purple text-xs font-bold tracking-widest uppercase mb-6"
        >
          <Shield className="w-3.5 h-3.5" />
          Legal & Transparency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-white font-semibold leading-tight mb-4"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-base md:text-lg max-w-2xl mx-auto"
        >
          JA Events is committed to protecting your personal information and ensuring a safe, transparent experience when you use our website or participate in our events.
        </motion.p>
      </section>

      {/* Content Container */}
      <main className="container mx-auto px-6 pb-24 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-10"
        >
          {/* 1. Introduction */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">1. Introduction</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              JA Events (“we”, “our”, “us”) is committed to protecting your personal information and ensuring a safe, transparent experience when you use our website or participate in our events. This Privacy Policy explains how we collect, use, store, and protect your data.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">2. Information We Collect</h2>
            </div>
            <p className="text-white/70 mb-4">We may collect the following information:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple shrink-0 mt-0.5" />
                <span><strong>Personal Details:</strong> Name, email address, phone number, age (if applicable), and other information provided during event registration.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple shrink-0 mt-0.5" />
                <span><strong>Payment Information:</strong> Processed securely through third-party payment gateways. JA Events does not store or access your card details.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple shrink-0 mt-0.5" />
                <span><strong>Event-Related Data:</strong> Attendance records, competition entries, and performance details.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple shrink-0 mt-0.5" />
                <span><strong>Technical Data:</strong> IP address, browser type, device information, and website usage analytics.</span>
              </li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">3. How We Use Your Information & Purpose</h2>
            </div>
            <p className="text-white/70 mb-4">Your information is collected and may be used to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <span className="w-2 h-2 rounded-full bg-ja-purple shrink-0 mt-2" />
                <span>Register participants for events and competitions smoothly.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="w-2 h-2 rounded-full bg-ja-purple shrink-0 mt-2" />
                <span>Process registrations and manage event participation, including essential event updates, reminders, and announcements.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="w-2 h-2 rounded-full bg-ja-purple shrink-0 mt-2" />
                <span>Improve our website, services, overall event quality, and customer experience.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="w-2 h-2 rounded-full bg-ja-purple shrink-0 mt-2" />
                <span>Ensure safety, compliance, fair participation, and share promotional photos or videos from events.</span>
              </li>
            </ul>
          </div>

          {/* 4. Media & Promotional Use */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <Sparkle size={20} className="text-ja-purple" absolute={false} />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">4. Media & Promotional Use</h2>
            </div>
            <p className="text-white/80 leading-relaxed mb-3">
              Attendance at any JA Events activity implies consent to the use of photos, videos, and event footage captured during events.
            </p>
            <p className="text-white/80 leading-relaxed">
              Such content may be used for marketing, promotional, and social media purposes to celebrate participant achievements and inspire future gatherings.
            </p>
          </div>

          {/* 5. Data Protection, Security & Storage */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">5. Data Protection, Security & Storage</h2>
            </div>
            <p className="text-white/80 leading-relaxed mb-3">
              We use industry-standard security measures and encrypted systems to protect your data from unauthorized access, misuse, or disclosure.
            </p>
            <p className="text-white/80 leading-relaxed mb-3">
              All stored information is restricted and accessible only to authorized team members and personnel who need it to fulfill event operations.
            </p>
            <p className="text-white/80 leading-relaxed">
              <strong>Data Retention:</strong> We retain data only as long as necessary for event management, legal compliance, customer support, and marketing or promotional use.
            </p>
          </div>

          {/* 6. Third-Party Sharing */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">6. Third-Party Sharing</h2>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              We do not sell or trade your personal information. We may share limited information strictly with trusted partners necessary for event execution:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                <span className="text-sm font-semibold text-white">Payment Processors</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                <span className="text-sm font-semibold text-white">Venue Partners</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                <span className="text-sm font-semibold text-white">Technology Service Providers</span>
              </div>
            </div>
          </div>

          {/* 7. Your Rights */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">7. Your Rights</h2>
            </div>
            <p className="text-white/70 mb-4">You have the right to request:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple" />
                <span>Access to your personal data held by us.</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple" />
                <span>Correction of inaccurate or incomplete information.</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-ja-purple" />
                <span>Deletion of your data (where legally permissible).</span>
              </li>
            </ul>
            <p className="text-white/70 text-sm">
              Requests can be submitted directly through our website’s contact form or by emailing us at{' '}
              <a href="mailto:Angelbiztalks@gmail.com" className="text-ja-purple underline hover:text-white">
                Angelbiztalks@gmail.com
              </a>.
            </p>
          </div>

          {/* 8. Policy Updates */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-ja-purple/30 border border-ja-purple/40 flex items-center justify-center text-ja-purple">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif text-white font-semibold">8. Policy Updates</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy periodically. Continued use of our website or participation in our events indicates your acceptance of the updated terms.
            </p>
          </div>
        </motion.div>

        {/* Back Button Bottom */}
        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ja-purple hover:bg-ja-purple/80 text-white font-medium text-sm transition-all shadow-lg hover:shadow-ja-purple/30"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to JA Events Home
          </button>
        </div>
      </main>
    </div>
  );
}
