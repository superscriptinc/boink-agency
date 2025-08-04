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
import { useRouter, usePathname } from "next/navigation";
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
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FlagIcon } from "@/components/flag-icons";
import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect, useState } from "react";
import { getOptions } from "../../next-i18next.config.js";

function BoinkAgencyContent() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLanguageChange = (locale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");
    router.push(`/${locale}${pathWithoutLocale}`);
  };

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
        alert(t("form.success"));
        form.reset();
      } else {
        alert(t("form.error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("form.error"));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link
            href={`/${currentLocale}`}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900">
              {t("header.brand")}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("header.nav.benefits")}
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("header.nav.about")}
            </Link>
            <Link
              href="#results"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("header.nav.impact")}
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t("header.nav.contact")}
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="inline-flex bg-transparent"
                >
                  <FlagIcon locale={currentLocale} className="" />
                  <span className="hidden sm:inline">
                    {currentLocale === "en" && t("header.language.english")}
                    {currentLocale === "es" && t("header.language.spanish")}
                    {currentLocale === "pt" && t("header.language.portuguese")}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  <FlagIcon locale="en" className="" />
                  {t("header.language.english")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
                  <FlagIcon locale="es" className="" />
                  {t("header.language.spanish")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>
                  <FlagIcon locale="pt" className="" />
                  {t("header.language.portuguese")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-pink-400 hover:bg-pink-300 text-white">
              <Link href="#contact">{t("header.applyButton")}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office-1.jpg"
            alt="Office Background"
            fill
            className="object-cover w-full h-full"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#FFC8DD] text-[#8B5A8B] hover:bg-[#FFC8DD]">
                  {t("hero.badge")}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {t("hero.title")}
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  {t("hero.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-400 text-white text-lg px-8 py-4 h-14"
                >
                  <Link href="#contact">{t("hero.applyButton")}</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">7+</div>
                  <div className="text-sm text-gray-300">
                    {t("hero.stats.creatorsManaged")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-300">
                    {t("hero.stats.minimumSalary")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25 Months</div>
                  <div className="text-sm text-gray-300">
                    {t("hero.stats.averageTenure")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="services"
        className="py-20 bg-white relative overflow-hidden"
      >
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
              {t("benefits.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              {t("benefits.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("benefits.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-3.jpg"
                alt="Guaranteed Income"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("benefits.cards.guaranteedIncome.title")}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  {t("benefits.cards.guaranteedIncome.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-4.jpg"
                alt="Creative Freedom"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("benefits.cards.creativeFreedom.title")}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  {t("benefits.cards.creativeFreedom.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-5.jpg"
                alt="Amplify Your Audience"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("benefits.cards.amplifyAudience.title")}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  {t("benefits.cards.amplifyAudience.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-6.jpg"
                alt="Professional Support"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("benefits.cards.professionalSupport.title")}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  {t("benefits.cards.professionalSupport.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-7.jpg"
                alt="Brand Protection"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("benefits.cards.brandProtection.title")}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  {t("benefits.cards.brandProtection.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative h-96">
              <Image
                src="/model-8.jpg"
                alt="Thrive in Adult Entertainment"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              <CardContent className="p-6 relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("benefits.cards.thriveInAdultEntertainment.title")}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4">
                  {t("benefits.cards.thriveInAdultEntertainment.description")}
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
              {t("results.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              {t("results.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("results.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">
                    {t("results.stats.minimumSalary")}
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    7+
                  </div>
                  <div className="text-gray-600">
                    {t("results.stats.creatorsManaged")}
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    25 Months
                  </div>
                  <div className="text-gray-600">
                    {t("results.stats.averageTenure")}
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">
                    {t("results.stats.creatorSatisfaction")}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("results.whyChoose.title")}
                </h3>
                <ul className="space-y-3">
                  {(
                    t("results.whyChoose.points", {
                      returnObjects: true,
                    }) as string[]
                  ).map((point: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#CDB4DB] rounded-full mt-2"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/model-1.jpg"
                alt="Success Metrics"
                fill
                className="object-contain rounded-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 -translate-y-48 -translate-x-48"
        ></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-[#BDE0FE] text-[#2E5A88] hover:bg-[#BDE0FE]">
                  {t("about.badge")}
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                  {t("about.title")}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t("about.description")}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{t("about.paragraph1")}</p>
                <p className="text-gray-600">{t("about.paragraph2")}</p>
              </div>
            </div>

            <div className="relative h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/model-2.jpg"
                alt="Our Team"
                fill
                className="object-scale-down rounded-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              {t("contact.badge")}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("contact.form.title")}
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.income")}
                    </label>
                    <select
                      name="income"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">
                        {t("contact.form.incomePlaceholder")}
                      </option>
                      <option value="$0 - $1,000">
                        {t("contact.form.incomeOptions.option1")}
                      </option>
                      <option value="$1,000 - $5,000">
                        {t("contact.form.incomeOptions.option2")}
                      </option>
                      <option value="$5,000 - $10,000">
                        {t("contact.form.incomeOptions.option3")}
                      </option>
                      <option value="$10,000+">
                        {t("contact.form.incomeOptions.option4")}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.socials")}
                    </label>
                    <textarea
                      name="socials"
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder={t("contact.form.socialsPlaceholder")}
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.goals")}
                    </label>
                    <textarea
                      name="goals"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder={t("contact.form.goalsPlaceholder")}
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-pink-400 hover:bg-pink-600"
                  >
                    {t("contact.form.submitButton")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("contact.getInTouch.title")}
                </h3>
                <p className="text-gray-600">
                  {t("contact.getInTouch.description")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("contact.getInTouch.telegram.title")}
                    </h4>
                    <p className="text-gray-700">
                      {t("contact.getInTouch.telegram.handle")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("contact.getInTouch.telegram.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("contact.getInTouch.email.title")}
                    </h4>
                    <p className="text-gray-700">
                      {t("contact.getInTouch.email.address")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("contact.getInTouch.email.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("contact.getInTouch.offices.title")}
                    </h4>
                    <p className="text-gray-700">
                      {t("contact.getInTouch.offices.locations")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("contact.getInTouch.offices.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-6 rounded-2xl">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t("contact.whyChoose.title")}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {(
                    t("contact.whyChoose.points", {
                      returnObjects: true,
                    }) as string[]
                  ).map((point: string, index: number) => (
                    <li key={index}>✓ {point}</li>
                  ))}
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
                <span className="text-xl font-bold">{t("header.brand")}</span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>

            <div className="text-right">
              <h4 className="font-semibold mb-4">
                {t("footer.benefits.title")}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.benefits.guaranteedIncome")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.benefits.creativeFreedom")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.benefits.amplifyAudience")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.benefits.brandProtection")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-right">
              <h4 className="font-semibold mb-4">
                {t("footer.company.title")}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.company.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.company.caseStudies")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.company.careers")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t("footer.company.contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("footer.links.privacy")}
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("footer.links.terms")}
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t("footer.links.support")}
              </Link>
              <Link
                href="https://instagram.com/boink_agency"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Instagram className="h-4 w-4" />
                <span>{t("footer.links.instagram")}</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function BoinkAgency() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const [i18n, setI18n] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const initI18next = async () => {
      const i18nInstance = createInstance();
      await i18nInstance.use(initReactI18next).init({
        ...getOptions(currentLocale),
        resources: {
          [currentLocale]: {
            common: await import(
              `../../public/locales/${currentLocale}/common.json`
            ).then((m) => m.default),
          },
        },
      });
      setI18n(i18nInstance);
    };

    initI18next();
  }, [currentLocale]);

  if (!isClient || !i18n) {
    return <div>Loading...</div>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <BoinkAgencyContent />
    </I18nextProvider>
  );
}
