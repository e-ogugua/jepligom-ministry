import { motion } from 'framer-motion'
import { 
  Cross, 
  Globe, 
  Users, 
  Heart, 
  BookOpen, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Crown,
  Flame
} from 'lucide-react'

function App() {


  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <motion.header 
        className="bg-black/20 backdrop-blur-sm border-b border-white/10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Cross className="w-8 h-8 text-gold-400" />
              <div>
                <h1 className="text-2xl font-bold font-serif">JEPLIGOM</h1>
                <p className="text-sm text-gold-300">Jesus Power Liberation Gospel Global Ministry</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-gold-300 transition-colors">About</a>
              <a href="#pastor" className="hover:text-gold-300 transition-colors">Pastor</a>
              <a href="#global" className="hover:text-gold-300 transition-colors">Global Reach</a>
              <a href="#contact" className="hover:text-gold-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="py-20 px-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Crown className="w-16 h-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-7xl font-bold font-serif mb-6 bg-gradient-to-r from-gold-300 to-yellow-200 bg-clip-text text-transparent">
              JEPLIGOM
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Jesus Power Liberation Gospel Global Ministry
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              A legacy Christian Liberation/Gospel ministry with global reach, 
              spreading the transformative power of Jesus Christ across nations
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <Globe className="w-5 h-5 inline mr-2 text-gold-400" />
              <span>Global Ministry</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <Flame className="w-5 h-5 inline mr-2 text-gold-400" />
              <span>Liberation Gospel</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <Heart className="w-5 h-5 inline mr-2 text-gold-400" />
              <span>Legacy Ministry</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-16 px-6 bg-black/20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-serif mb-4 text-gold-300">Our Legacy</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Founded by the Late Apostle Ogugua Humphry Ikejehova, JEPLIGOM continues 
              to be a beacon of hope and liberation through the Gospel of Jesus Christ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen className="w-12 h-12 text-gold-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Gospel Foundation</h4>
              <p className="text-blue-100">
                Built on the solid foundation of Christ's teachings, 
                spreading liberation through the power of the Gospel
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="w-12 h-12 text-gold-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Global Community</h4>
              <p className="text-blue-100">
                Members across various areas of the globe, united in faith 
                and committed to spreading Christ's love worldwide
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Flame className="w-12 h-12 text-gold-400 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Liberation Ministry</h4>
              <p className="text-blue-100">
                Dedicated to setting people free through the transformative 
                power of Jesus Christ and His liberating Gospel
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pastor Section */}
      <motion.section 
        id="pastor" 
        className="py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold font-serif mb-4 text-gold-300">Senior Pastor</h3>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gold-400 to-yellow-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Cross className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-3xl font-bold font-serif mb-2 text-gold-300">
                Pastor Joshua O. Ogugua
              </h4>
              <p className="text-xl text-blue-100 mb-6">Senior Pastor & Spiritual Leader</p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h5 className="text-lg font-semibold mb-3 text-gold-300">Leadership</h5>
                  <p className="text-blue-100 mb-4">
                    Currently leading JEPLIGOM with passion, dedication, and unwavering 
                    commitment to the Gospel of Jesus Christ. Continuing the legacy 
                    established by Late Apostle Ogugua Humphry Ikejehova.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-3 text-gold-300">Vision</h5>
                  <p className="text-blue-100 mb-4">
                    Expanding the ministry's global reach while maintaining the core 
                    values of liberation, transformation, and spiritual growth through 
                    the power of the Gospel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Global Reach Section */}
      <motion.section 
        id="global" 
        className="py-16 px-6 bg-black/20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold font-serif mb-4 text-gold-300">Global Presence</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              JEPLIGOM has members and ministry presence across various regions of the world, 
              spreading the Gospel and building communities of faith
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: "Africa", description: "Strong foundation and growing communities" },
              { region: "Europe", description: "Expanding ministry presence" },
              { region: "Americas", description: "Active fellowship groups" },
              { region: "Asia-Pacific", description: "Emerging ministry opportunities" }
            ].map((area, index) => (
              <motion.div
                key={area.region}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <MapPin className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold mb-2 text-gold-300">{area.region}</h4>
                <p className="text-blue-100 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-serif mb-4 text-gold-300">Connect With Us</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our global community and experience the liberating power of the Gospel
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-gold-400" />
                  <span>ministry@jepligom.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-gold-400" />
                  <span>+1 (555) JEPLIGOM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-gold-400" />
                  <span>Sunday Services: 10:00 AM</span>
                </div>
              </div>
              <div className="space-y-4">
                <motion.button 
                  className="w-full bg-gradient-to-r from-gold-500 to-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:from-gold-400 hover:to-yellow-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Community
                </motion.button>
                <motion.button 
                  className="w-full border border-gold-400 text-gold-300 font-semibold py-3 px-6 rounded-lg hover:bg-gold-400 hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Prayer Requests
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-8 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Cross className="w-6 h-6 text-gold-400" />
            <span className="text-lg font-semibold">JEPLIGOM</span>
          </div>
          <p className="text-blue-200 mb-2">
            Jesus Power Liberation Gospel Global Ministry
          </p>
          <p className="text-blue-300 text-sm">
            Founded by Late Apostle Ogugua Humphry Ikejehova | Led by Pastor Joshua O. Ogugua
          </p>
          <p className="text-blue-400 text-xs mt-4">
            © 2024 JEPLIGOM. Spreading the Gospel worldwide with love and liberation.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
