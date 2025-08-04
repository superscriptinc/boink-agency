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
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/model-3.jpg"
                  alt="Growth Marketing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Growth Marketing
                  </h3>
                </div>
                <p className="text-gray-600">
                  Strategic marketing campaigns across social media platforms to
                  drive subscriber growth and engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/model-4.jpg"
                  alt="Account Management"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Account Management
                  </h3>
                </div>
                <p className="text-gray-600">
                  Professional account management to optimize your profile,
                  content, and fan interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/model-5.jpg"
                  alt="Content Strategy"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Content Strategy
                  </h3>
                </div>
                <p className="text-gray-600">
                  Data-driven content strategies that maximize engagement and
                  conversion rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/model-6.jpg"
                  alt="Brand Protection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Brand Protection
                  </h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive brand protection services to safeguard your
                  content and reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/model-7.jpg"
                  alt="Premium Support"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Premium Support
                  </h3>
                </div>
                <p className="text-gray-600">
                  24/7 dedicated support from our team of OnlyFans marketing
                  experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/model-8.jpg"
                  alt="Revenue Optimization"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Revenue Optimization
                  </h3>
                </div>
                <p className="text-gray-600">
                  Advanced strategies to maximize your revenue through pricing
                  optimization and upselling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
