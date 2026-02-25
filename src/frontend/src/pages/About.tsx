import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  TrendingUp,
  Shield,
  Heart,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of professional ethics and maintain complete confidentiality in all our engagements."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every service we deliver, continuously updating our knowledge and skills."
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Our clients' success is our priority. We provide personalized attention and tailored solutions to meet unique needs."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We embrace technology and innovative approaches to deliver efficient and effective solutions."
  }
];

const credentials = [
  "Members of the Institute of Chartered Accountants of India (ICAI)",
  "Registered with relevant regulatory authorities",
  "Continuous professional education and training",
  "Adherence to professional standards and code of ethics",
  "Professional indemnity insurance coverage"
];

export function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-3xl">
            <div className="h-1 w-20 bg-secondary mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Parameswaran P S & Associates</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for comprehensive chartered accountant services in India
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Established in 2014, Parameswaran P.S & Associates is an independent chartered accountants firm located in Bengaluru headed by CA Parameswaran P S having clients across sectors in the local community and serving small, medium and large size businesses.
                </p>
                <p>
                  We have built an excellent reputation of providing quality professional service to all clients irrespective of their size or sector. The exciting and passionate team is highly qualified with a wealth of financial, taxation and business experience gained over many years working with business owners of various sizes.
                </p>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/5 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="h-6 w-6 text-secondary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  To empower businesses and individuals with expert financial guidance, ensuring compliance while optimizing their financial performance and achieving sustainable growth.
                </p>
              </CardContent>
              
              <CardHeader className="pt-0">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Eye className="h-6 w-6 text-secondary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  To be the most trusted chartered accountancy firm in India, recognized for our commitment to excellence, integrity, and client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-1 w-16 bg-secondary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center border-t-4 border-t-secondary">
                  <CardHeader>
                    <div className="inline-flex h-14 w-14 rounded-full bg-secondary/10 items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block">
                <div className="h-1 w-16 bg-secondary mx-auto mb-4" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Credentials</h2>
              <p className="text-xl text-muted-foreground">
                Qualified professionals committed to excellence
              </p>
            </div>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {credentials.map((credential) => (
                    <div key={credential} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                      <p className="text-lg">{credential}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="h-1 w-16 bg-secondary mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <Card className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
            <CardHeader>
              <div className="inline-flex h-20 w-20 rounded-full bg-secondary/20 items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Expert Chartered Accountants</CardTitle>
              <CardDescription className="text-lg">
                Our team comprises qualified chartered accountants with diverse expertise in taxation, audit, and financial advisory services
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary to-primary/90 border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-4xl mb-4 text-black">Let's Work Together</CardTitle>
              <CardDescription className="text-black text-lg max-w-2xl mx-auto">
                Partner with us for comprehensive financial and compliance solutions tailored to your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
