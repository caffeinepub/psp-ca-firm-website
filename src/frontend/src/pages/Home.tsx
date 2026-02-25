import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Receipt, 
  Building2, 
  Calculator, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Award,
  Target
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Audit & Assurance",
    description: "Comprehensive audit services ensuring compliance and financial accuracy for your business.",
    href: "/services#audit"
  },
  {
    icon: Receipt,
    title: "Income Tax Services",
    description: "Expert tax planning, filing, and advisory services for individuals and businesses.",
    href: "/services#income-tax"
  },
  {
    icon: Calculator,
    title: "GST Compliance",
    description: "Complete GST registration, filing, and advisory services to keep you compliant.",
    href: "/services#gst"
  },
  {
    icon: Building2,
    title: "Corporate Tax",
    description: "Strategic corporate tax planning and compliance for businesses of all sizes.",
    href: "/services#corporate-tax"
  },
  {
    icon: Users,
    title: "Accounting & Bookkeeping",
    description: "Professional bookkeeping and accounting services to maintain accurate financial records.",
    href: "/services#accounting"
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Expert financial planning and advisory to help you achieve your business goals.",
    href: "/services#advisory"
  }
];

const features = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "Qualified chartered accountants with extensive experience in Indian taxation and compliance."
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Committed to maintaining the highest standards of professional ethics and confidentiality."
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Personalized solutions tailored to meet your unique financial and business requirements."
  }
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/uploads/1133960_OQECWT0-1.jpg)',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Light Overlay for Text Readability with Black Text */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-black">
              Your Trusted Financial
              <span className="block text-black mt-2">Partner in India</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black max-w-2xl mx-auto text-balance">
              Expert chartered accountant services for businesses and individuals across India
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="group shadow-xl">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 shadow-lg">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-1 w-16 bg-secondary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial and compliance solutions for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-secondary"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-1 w-16 bg-secondary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Parameswaran P S & Associates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence in every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center space-y-4">
                  <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-black">
              Ready to get started?
            </h2>
            <p className="text-xl text-black text-balance">
              Contact us today to discuss how we can help you achieve your financial goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-black/20 hover:bg-black/10 text-black">
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
