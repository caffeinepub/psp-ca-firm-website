import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  FileCheck,
  FileText,
  Receipt,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    id: "audit",
    icon: FileText,
    title: "Audit & Assurance",
    description:
      "We provide comprehensive audit and assurance services to help organizations maintain transparency, comply with regulations, and build stakeholder confidence. Our audit services include statutory audits, internal audits, tax audits, and special purpose audits tailored to your specific requirements.",
    features: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit under Section 44AB",
      "Stock & Inventory Audit",
      "Due Diligence Services",
    ],
  },
  {
    id: "income-tax",
    icon: Receipt,
    title: "Income Tax Services",
    description:
      "Our income tax services cover all aspects of tax planning, preparation, and filing for individuals, businesses, and trusts. We help minimize your tax liability through strategic planning while ensuring complete compliance with Indian income tax laws.",
    features: [
      "Individual Tax Return Filing",
      "Business Tax Planning",
      "TDS Compliance & Returns",
      "Tax Assessments & Appeals",
      "Advance Tax Calculations",
    ],
  },
  {
    id: "gst",
    icon: Calculator,
    title: "GST Compliance & Advisory",
    description:
      "Navigate the complexities of GST with our expert compliance and advisory services. We assist with GST registration, regular return filing, input tax credit optimization, and representation before GST authorities for businesses across India.",
    features: [
      "GST Registration",
      "Monthly/Quarterly GST Returns",
      "Input Tax Credit Reconciliation",
      "GST Audit & Assessment",
      "GST Advisory & Litigation",
    ],
  },
  {
    id: "corporate-tax",
    icon: Building2,
    title: "Corporate Tax",
    description:
      "We provide strategic corporate tax planning and compliance services for companies, helping optimize tax structures while ensuring adherence to corporate tax laws. Our services include tax planning, transfer pricing, and corporate restructuring advisory.",
    features: [
      "Corporate Tax Planning",
      "Transfer Pricing Documentation",
      "Tax Due Diligence for M&A",
      "Corporate Restructuring Advisory",
      "International Taxation",
    ],
  },
  {
    id: "accounting",
    icon: Users,
    title: "Accounting & Bookkeeping",
    description:
      "Maintain accurate and up-to-date financial records with our professional accounting and bookkeeping services. We handle day-to-day bookkeeping, financial statement preparation, and management reporting to keep your finances organized.",
    features: [
      "Bookkeeping Services",
      "Financial Statement Preparation",
      "Management Reporting",
      "Accounts Payable/Receivable",
      "Bank Reconciliation",
    ],
  },
  {
    id: "company-registration",
    icon: FileCheck,
    title: "Company Registration & Compliance",
    description:
      "Start and maintain your business with ease through our company incorporation and compliance services. We handle company registration, ROC filings, annual compliances, and board meeting documentation for private limited companies, LLPs, and other business entities.",
    features: [
      "Company Incorporation",
      "LLP Registration",
      "ROC Annual Filings",
      "Board Meeting Documentation",
      "Compliance Management",
    ],
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Financial Planning & Advisory",
    description:
      "Make informed financial decisions with our strategic advisory services. We provide business valuations, financial planning, budgeting and forecasting, and strategic advisory to help you achieve your long-term financial objectives.",
    features: [
      "Business Valuation",
      "Financial Planning & Analysis",
      "Budgeting & Forecasting",
      "Cash Flow Management",
      "Strategic Financial Advisory",
    ],
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Transform your business with our comprehensive consulting services. We offer business planning, process improvement, risk management advisory, and startup consulting to help businesses grow efficiently and sustainably.",
    features: [
      "Business Planning & Strategy",
      "Process Improvement",
      "Risk Management Advisory",
      "Startup Consulting",
      "MSME Advisory Services",
    ],
  },
];

export function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-3xl">
            <div className="h-1 w-20 bg-secondary mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive chartered accountant services designed to meet all
              your financial, tax, and compliance needs in India
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-20 border-t-4 border-t-transparent hover:border-t-secondary transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div
                        className={`shrink-0 h-16 w-16 rounded-xl bg-secondary/10 flex items-center justify-center ${isEven ? "md:order-1" : "md:order-2"}`}
                      >
                        <Icon className="h-8 w-8 text-secondary" />
                      </div>
                      <div
                        className={`flex-1 ${isEven ? "md:order-2" : "md:order-1"}`}
                      >
                        <CardTitle className="text-3xl mb-3">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary to-primary/90 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl text-black">
                  Need a Custom Solution?
                </CardTitle>
                <CardDescription className="text-black text-base">
                  We offer tailored services to meet your specific business
                  requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
