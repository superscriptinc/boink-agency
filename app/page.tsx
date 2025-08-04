"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BoinkAgency() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      revenue: formData.get("revenue"),
      socials: formData.get("socials"),
      goals: formData.get("goals"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Thank you! We'll be in touch soon.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              BOINK AGENCY
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="#results"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Results
            </Link>
            <Link
              href="#faqs"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden sm:inline-flex bg-transparent"
                >
                  <span>English</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Português</DropdownMenuItem>
                <DropdownMenuItem>Auto-detect</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-pink-400 hover:bg-pink-300 text-white">
              <Link href="#contact">Apply Today</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/office-1.jpg"
            alt="Office Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#FFC8DD] text-[#8B5A8B] hover:bg-[#FFC8DD]">
                  #1 OnlyFans Marketing Agency
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Scale Your OnlyFans Revenue to{" "}
                  <span className="text-purple-500">6-Figures</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  We help content creators maximize their earning potential
                  through proven marketing strategies, professional management,
                  and data-driven growth tactics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-400 text-white text-lg px-8 py-4 h-14"
                >
                  <Link href="#contact">Apply Today →</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">Creators Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$50M+</div>
                  <div className="text-sm text-gray-300">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">300%</div>
                  <div className="text-sm text-gray-300">Avg Growth Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Abstract Gradient Shape */}
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-500/30 -translate-y-48 translate-x-48"
        ></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#BDE0FE] text-[#2E5A88] hover:bg-[#BDE0FE]">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content strategy to fan engagement, we provide comprehensive
              solutions to maximize your OnlyFans potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-3.jpg"
                alt="Growth Marketing"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Growth Marketing
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Strategic marketing campaigns across social media platforms to
                  drive subscriber growth and engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-4.jpg"
                alt="Account Management"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Account Management
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Professional account management to optimize your profile,
                  content, and fan interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-5.jpg"
                alt="Content Strategy"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Content Strategy
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Data-driven content strategies that maximize engagement and
                  conversion rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-6.jpg"
                alt="Brand Protection"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Brand Protection
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Comprehensive brand protection services to safeguard your
                  content and reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-7.jpg"
                alt="Premium Support"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Premium Support
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  24/7 dedicated support from our team of OnlyFans marketing
                  experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-8.jpg"
                alt="Revenue Optimization"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Revenue Optimization
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Advanced strategies to maximize your revenue through pricing
                  optimization and upselling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              Proven Results
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Success Stories That Speak Volumes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach has helped hundreds of creators achieve
              financial freedom.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    $50M+
                  </div>
                  <div className="text-gray-600">Total Revenue Generated</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Creators Managed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    300%
                  </div>
                  <div className="text-gray-600">Average Growth Rate</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Creators Choose Boink Agency
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#CDB4DB] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Industry-leading expertise with 5+ years of experience
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#CDB4DB] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Transparent reporting and real-time analytics
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#CDB4DB] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Dedicated account managers and 24/7 support
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#CDB4DB] rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Proven strategies that deliver consistent results
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/model-1.jpg"
                alt="Success Metrics"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Abstract Gradient Shape */}
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 -translate-y-48 -translate-x-48"
        ></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/model-2.jpg"
                alt="Our Team"
                fill
                className="object-scale-down rounded-2xl"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-[#BDE0FE] text-[#2E5A88] hover:bg-[#BDE0FE]">
                  About Boink Agency
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                  The Premier OnlyFans Marketing Agency
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded by industry veterans with deep expertise in digital
                  marketing and content monetization, Boink Agency has become
                  the go-to partner for serious OnlyFans creators.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Our team combines cutting-edge marketing strategies with
                  intimate knowledge of the OnlyFans platform to deliver
                  exceptional results. We've helped creators from all
                  backgrounds achieve financial independence through strategic
                  growth and optimization.
                </p>
                <p className="text-gray-600">
                  What sets us apart is our commitment to transparency, ethical
                  practices, and long-term partnerships. We don't just manage
                  accounts – we build sustainable businesses that thrive in the
                  competitive content creator economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Abstract Gradient Shape */}
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-500/20 -translate-y-48 translate-x-48"
        ></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-[#BDE0FE] text-[#2E5A88] hover:bg-[#BDE0FE]">
              FAQs
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about working with Boink Agency to
              scale your OnlyFans business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  How long does it take to see results?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Most creators see significant improvements within 30-60 days
                  of working with us. We focus on sustainable growth strategies
                  that deliver consistent, long-term results rather than quick
                  spikes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  What services are included in your packages?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Our comprehensive packages include growth marketing, account
                  management, content strategy, brand protection, premium
                  support, and revenue optimization. Each package is customized
                  to your specific needs and goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  Do you work with creators outside the US?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes! We work with creators worldwide. Our team operates in
                  multiple time zones and we have offices in New York City and
                  São Paulo to serve our global client base effectively.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  How do you protect my content and brand?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We provide comprehensive brand protection including DMCA
                  takedowns, content monitoring, legal support, and privacy
                  protection. Our team actively monitors for unauthorized use of
                  your content across platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  What makes Boink Agency different from other agencies?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Our 5+ years of specialized OnlyFans experience, $50M+ in
                  client revenue generated, 24/7 dedicated support, and
                  transparent reporting set us apart. We build sustainable
                  businesses, not just manage accounts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Get Started
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Ready to Scale Your Revenue?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful creators who trust Boink Agency to
              maximize their OnlyFans potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Your Free Strategy Call
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Revenue
                    </label>
                    <select
                      name="revenue"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select revenue range</option>
                      <option value="$0 - $1,000">$0 - $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      List any socials
                    </label>
                    <textarea
                      name="socials"
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Instagram, TikTok, Twitter, etc."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your goals
                    </label>
                    <textarea
                      name="goals"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="What are you looking to achieve?"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-pink-400 hover:bg-pink-600"
                  >
                    Book Free Strategy Call
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h3>
                <p className="text-gray-600">
                  Ready to take your OnlyFans business to the next level? Our
                  team is here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telegram</h4>
                    <p className="text-gray-700">@boink_agency</p>
                    <p className="text-sm text-gray-600">
                      Available 24/7 for urgent matters
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700">hello@boinkagency.com</p>
                    <p className="text-sm text-gray-600">
                      We'll respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Offices</h4>
                    <p className="text-gray-700">New York City & São Paulo</p>
                    <p className="text-sm text-gray-600">
                      Remote team worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-6 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Why Choose Boink Agency?
                </h4>
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">BOINK AGENCY</span>
              </div>
              <p className="text-gray-400">
                The premier OnlyFans marketing agency helping creators achieve
                financial freedom through strategic growth.
              </p>
            </div>

            <div className="text-right">
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

            <div className="text-right">
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
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Boink Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </Link>
              <Link
                href="https://instagram.com/boink_agency"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
