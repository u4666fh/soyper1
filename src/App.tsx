/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Bus, 
  Home, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Smartphone, 
  ArrowLeft, 
  Navigation,
  Globe,
  Star,
  Users,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Shield,
  Activity
} from 'lucide-react';
import { useState, useEffect } from 'react';

const cities = [
  {
    name: 'مكة المكرمة',
    title: 'سكينة العلم والروح',
    description: 'نمهد الطريق لطلبة العلم في أطهر بقاع الأرض، بتجربة نقل آمنة وسكن يرتقي لروحانية المكان ويسهل رحلة الإنجاز.'
  },
  {
    name: 'جدة',
    title: 'واجهة الإبداع الساحلية',
    description: 'حيث تلتقي الحيوية بالذكاء؛ حلول لوجستية متطورة تخدم جيل المستقبل في جامعات عروس البحر الأحمر ومعالمها الحديثة.'
  },
  {
    name: 'الرياض',
    title: 'قلب الطموح والريادة',
    description: 'منظومة متكاملة تليق بتطلعات طلاب عاصمة الرؤية، تدمج بين الرفاهية السكنية المطلقة وسرعة التنقل الرقمي الذكي.'
  }
];

const navLinks = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'عن سويبر', href: '#about' },
  { name: 'الخدمات', href: '#services' },
  { name: 'المدن', href: '#cities' },
  { name: 'تواصل', href: '#contact' },
];

export default function App() {
  return (
    <div className="bg-white text-soyper-dark font-sans selection:bg-soyper-blue selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-40" />
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-soyper-blue/5 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-soyper-purple/5 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <main className="relative z-10">
        
        {/* Modern Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 text-center pt-20 md:pt-32 pb-20 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 flex flex-col items-center gap-2"
            >
              <div className="w-12 h-1 bg-soyper-blue rounded-full mb-4" />
              <span className="text-2xl md:text-4xl font-black tracking-tighter text-soyper-dark">سويبر — <span className="text-soyper-blue font-bold">Soyper</span></span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[90px] font-black leading-[1.15] md:leading-[1.1] mb-8 tracking-tight text-soyper-dark">
              استقرارك الدراسي، <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-soyper-blue via-soyper-purple to-soyper-blue bg-[length:200%] animate-[gradient_8s_linear_infinite]">نقـل مرن وسكن جامعي ملهم</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-soyper-dark/50 mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              في سويبر، نختصر عليك المسافات ونرتقي بمعايير إقامتك؛ نقدم لك المنصة الأولى في المملكة التي تدمج خدمات النقل الذكي بالسكن الطلابي الفاخر، لنضمن لك رحلة تعليمية خالية من الهموم وتليق بطموحك.
            </p>
          </motion.div>

          {/* New Animated Bus Experience */}
          <div className="w-full max-w-6xl relative mt-4 md:mt-10 overflow-hidden md:overflow-visible">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-soyper-blue/30 to-transparent" />
            <motion.div 
              className="relative flex justify-center py-12 md:py-20"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative z-10">
                 <motion.div 
                  className="bg-white p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,85,255,0.2)] border border-black/[0.02]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Bus size={40} className="text-soyper-blue md:w-16 md:h-16" />
                </motion.div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 md:w-32 h-3 md:h-4 bg-soyper-blue/10 blur-xl rounded-full" />
              </div>

              {/* Waypoints */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-soyper-blue/20"
                  style={{ left: `${i * 25}%` }}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Global Stats - Apple Style */}
        <section className="py-16 md:py-24 border-y border-black/5 bg-soyper-light/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { val: '+10,000', label: 'طالب وطالبة' },
              { val: '98%', label: 'رضا العملاء' },
              { val: '24/7', label: 'دعم فني ذكي' },
              { val: '+500', label: 'حافلة حديثة' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl md:text-5xl font-black text-soyper-blue mb-1 md:mb-2">{stat.val}</div>
                <div className="text-soyper-dark/40 font-bold uppercase tracking-wider text-[10px] md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Mission Section */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="flex-1 space-y-6 md:space-y-10 text-center md:text-right">
              <span className="text-soyper-purple font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">هويتنا وأهدافنا</span>
              <h2 className="text-4xl md:text-7xl font-black leading-tight text-soyper-dark">نعيد صياغة مفهوم <br/> الانتقال والعيش الجامعي</h2>
              <p className="text-lg md:text-2xl text-soyper-dark/50 leading-relaxed font-medium">
                في سويبر، لا نبيع اشتراكات، نحن نمنحك الوقت والراحة. نستخدم أحدث خوارزميات الذكاء الاصطناعي لتنظيم رحلات النقل، وننتقي أرقى المجمعات السكنية لنبني لك بيئة دراسية مثالية.
              </p>
              <div className="flex justify-center md:justify-start gap-8">
                <ShieldCheck size={32} className="text-soyper-blue md:w-10 md:h-10" />
                <Globe size={32} className="text-soyper-purple md:w-10 md:h-10" />
                <Users size={32} className="text-soyper-dark md:w-10 md:h-10" />
              </div>
            </div>
            <div className="flex-1 w-full relative group">
              <div className="absolute inset-0 bg-soyper-blue/10 blur-[80px] rounded-full" />
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student Community" 
                  className="w-full h-full object-cover aspect-square md:aspect-[4/5]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* High-Tech Services Grid */}
        <section id="services" className="py-24 md:py-40 px-6 md:px-8 bg-soyper-light/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 md:mb-32 space-y-4">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter">خدمات بلا حدود</h2>
              <p className="text-lg md:text-2xl text-soyper-dark/40 max-w-2xl mx-auto font-medium">تكامل تقني يرافقك من باب السكن إلى قاعة المحاضرات</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Transport Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="glossy-card p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-soyper-blue opacity-20" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-soyper-blue/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-soyper-blue group-hover:text-white transition-all duration-500">
                  <Bus className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-8 italic">النقل الجامعي الذكي</h3>
                <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                  {[
                    { icon: Navigation, text: 'تتبع مباشر لحظي' },
                    { icon: Clock, text: 'جدولة دقة الثواني' },
                    { icon: Shield, text: 'سائقين معتمدين' },
                    { icon: CreditCard, text: 'دفع رقمي كامل' },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg md:text-xl font-bold text-soyper-dark/70 border-r-2 border-soyper-blue/10 pr-4">
                      <feat.icon size={22} className="text-soyper-blue" />
                      {feat.text}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Housing Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="glossy-card p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-soyper-purple opacity-20" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-soyper-purple/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-soyper-purple group-hover:text-white transition-all duration-500">
                  <Home className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-8 italic">السكن الجامعي الفاخر</h3>
                <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                  {[
                    { icon: Star, text: 'تصاميم فندقية مدروسة' },
                    { icon: Users, text: 'أجواء دراسية هادئة' },
                    { icon: MapPin, text: 'مواقع استراتيجية' },
                    { icon: Zap, text: 'خدمات شاملة متكاملة' },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg md:text-xl font-bold text-soyper-dark/70 border-r-2 border-soyper-purple/10 pr-4">
                      <feat.icon size={22} className="text-soyper-purple" />
                      {feat.text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cities - Cinematic Grid */}
        <section id="cities" className="py-24 md:py-40 px-0 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-0 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-soyper-blue font-black text-sm uppercase tracking-[0.3em] mb-6 block"
            >
              خارطة التوسع
            </motion.span>
            <h2 className="text-5xl md:text-[100px] font-black mb-10 md:mb-16 tracking-tighter text-soyper-dark leading-none">
              وين تنطلق <br className="md:hidden" />
              سويبر قريباً؟
            </h2>
          </div>
          
          {/* Mobile Scroll Container */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible px-6 md:px-0 pb-10 scrollbar-hide snap-x snap-mandatory">
            {cities.map((city, i) => (
              <motion.div 
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[450px] md:h-[700px] min-w-[320px] md:min-w-0 flex-shrink-0 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-soyper-dark snap-center border border-white/10 hover:border-soyper-blue transition-colors"
              >
                <div className="absolute inset-0 tech-grid opacity-10" />
                
                <div className="absolute bottom-10 md:bottom-20 inset-x-8 md:inset-x-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-soyper-blue animate-pulse" />
                    المناطق التشغيلية قريباً
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-4xl md:text-5xl font-black text-white flex items-center gap-4">
                      {city.name}
                      <MapPin size={28} className="text-soyper-blue" />
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-bold text-soyper-blue italic">{city.title}</h4>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3 font-medium">
                      {city.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="flex justify-center gap-2 md:hidden">
            {cities.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-soyper-blue/20 last:bg-soyper-blue animate-pulse" />
            ))}
          </div>
        </section>

        {/* Global CTA - Stripe/Apple Style */}
        <section id="contact" className="py-24 md:py-40 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-soyper-blue to-soyper-purple rounded-[3rem] md:rounded-[4rem] p-10 md:p-32 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-3xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter">سجل اهتمامك الآن</h2>
                <p className="text-lg md:text-3xl text-white/80 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed font-bold px-4">
                  سجل اهتمامك الآن عبر النموذج الرسمي، وسيكون لك الأولوية في باقات الإطلاق التجريبي فور توفر الخدمة في مدينتك.
                </p>
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSepciXRzEWXFQ_QLeBmXGMxhSY5Rsw7fU-WQXwo8f-f6oy_Aw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-4 md:gap-6 px-8 md:px-14 py-5 md:py-8 bg-white text-soyper-blue rounded-2xl md:rounded-[2rem] text-xl md:text-3xl font-black hover:shadow-2xl transition-all"
                >
                  تقديم طلب الانضمام
                  <ArrowLeft className="w-6 h-6 md:w-10 md:h-10 group-hover:-translate-x-2 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Copyright Line */}
      <div className="py-10 md:py-12 px-6 md:px-8 border-t border-black/5 flex justify-center items-center bg-white relative z-10">
        <p className="text-soyper-dark/30 font-bold text-xs md:text-sm tracking-widest text-center leading-loose">
          © {new Date().getFullYear()} سويبر. جميع الحقوق محفوظة. <br className="md:hidden" />
          <span className="hidden md:inline mx-4 opacity-20">|</span>
          عصر جديد من النقل والسكن الجامعي
        </p>
      </div>
    </div>
  );
}
