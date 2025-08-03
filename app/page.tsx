import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, TrendingUp, Shield, Zap, Star, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BoinkAgency() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BOINK AGENCY</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#results" className="text-gray-600 hover:text-gray-900 transition-colors">
              Results
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex bg-transparent">
              Book Call
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">#1 OnlyFans Marketing Agency</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Scale Your OnlyFans Revenue to <span className="text-pink-500">6-Figures</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We help content creators maximize their earning potential through proven marketing strategies,
                  professional management, and data-driven growth tactics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                  Start Growing Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Creators Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$50M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">300%</div>
                  <div className="text-sm text-gray-600">Avg Growth Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Marketing Dashboard"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-pink-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Our Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content strategy to fan engagement, we provide comprehensive solutions to maximize your OnlyFans
              potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Strategic marketing campaigns across social media platforms to drive subscriber growth and engagement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Social media management</li>
                  <li>• Influencer partnerships</li>
                  <li>• Paid advertising campaigns</li>
                  <li>• SEO optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Account Management</h3>
                <p className="text-gray-600 mb-6">
                  Professional account management to optimize your profile, content, and fan interactions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Profile optimization</li>
                  <li>• Content scheduling</li>
                  <li>• Fan messaging</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Strategy</h3>
                <p className="text-gray-600 mb-6">
                  Data-driven content strategies that maximize engagement and conversion rates.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content planning</li>
                  <li>• Trend analysis</li>
                  <li>• A/B testing</li>
                  <li>• Creative direction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Protection</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive brand protection services to safeguard your content and reputation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• DMCA takedowns</li>
                  <li>• Content monitoring</li>
                  <li>• Legal support</li>
                  <li>• Privacy protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Support</h3>
                <p className="text-gray-600 mb-6">
                  24/7 dedicated support from our team of OnlyFans marketing experts.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dedicated account manager</li>
                  <li>• Weekly strategy calls</li>
                  <li>• Performance reports</li>
                  <li>• Priority support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Optimization</h3>
                <p className="text-gray-600 mb-6">
                  Advanced strategies to maximize your revenue through pricing optimization and upselling.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pricing strategy</li>
                  <li>• Upselling techniques</li>
                  <li>• Revenue analytics</li>
                  <li>• Conversion optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Proven Results</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Success Stories That Speak Volumes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach has helped hundreds of creators achieve financial freedom.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$50M+</div>
                  <div className="text-gray-600">Total Revenue Generated</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Creators Managed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
                  <div className="text-gray-600">Average Growth Rate</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Why Creators Choose Boink Agency</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Industry-leading expertise with 5+ years of experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Transparent reporting and real-time analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Dedicated account managers and 24/7 support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Proven strategies that deliver consistent results</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Success Metrics"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">About Boink Agency</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">The Premier OnlyFans Marketing Agency</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded by industry veterans with deep expertise in digital marketing and content monetization, Boink
                  Agency has become the go-to partner for serious OnlyFans creators.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Our team combines cutting-edge marketing strategies with intimate knowledge of the OnlyFans platform
                  to deliver exceptional results. We've helped creators from all backgrounds achieve financial
                  independence through strategic growth and optimization.
                </p>
                <p className="text-gray-600">
                  What sets us apart is our commitment to transparency, ethical practices, and long-term partnerships.
                  We don't just manage accounts – we build sustainable businesses that thrive in the competitive content
                  creator economy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                  Partner With Us
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Get Started</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Ready to Scale Your Revenue?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful creators who trust Boink Agency to maximize their OnlyFans potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Strategy Call</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Revenue</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                      <option>Select revenue range</option>
                      <option>$0 - $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your goals</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="What are you looking to achieve?"
                    ></textarea>
                  </div>
                  <Button size="lg" className="w-full bg-pink-500 hover:bg-pink-600">
                    Book Free Strategy Call
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                <p className="text-gray-600">
                  Ready to take your OnlyFans business to the next level? Our team is here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@boinkagency.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600">Los Angeles, CA</p>
                    <p className="text-sm text-gray-500">Remote team worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose Boink Agency?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 5+ years of OnlyFans marketing expertise</li>
                  <li>✓ $50M+ in revenue generated for clients</li>
                  <li>✓ 24/7 dedicated support team</li>
                  <li>✓ Transparent reporting and analytics</li>
                  <li>✓ Ethical and sustainable growth strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">BOINK AGENCY</span>
              </div>
              <p className="text-gray-400">
                The premier OnlyFans marketing agency helping creators achieve financial freedom through strategic
                growth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Account Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Content Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Brand Protection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Boink Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
