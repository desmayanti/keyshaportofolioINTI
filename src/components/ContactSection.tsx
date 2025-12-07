import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, MessageCircle, Mail, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "keyshadesmaaa@gmail.com",
      href: "mailto:keyshadesmaaa@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 838-2904-4379",
      href: "https://wa.me/6283829044379",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@_ecaaaxline",
      href: "https://www.instagram.com/_ecaaaxline",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ciomas, Indonesia",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-primary text-glow-red">Me!</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full box-glow-red" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, projects, or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's <span className="text-accent text-glow-gold">Connect</span>
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:box-glow-red transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-muted-foreground mb-4">Follow me on social media:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/_ecaaaxline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:box-glow-red transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/6283829044379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:box-glow-gold transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:keyshadesmaaa@gmail.com"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:box-glow-red transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary focus:ring-primary/20"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary focus:ring-primary/20"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-card border-border focus:border-primary focus:ring-primary/20"
              />
              <Input
                name="subject"
                placeholder="Email Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary focus:ring-primary/20"
              />
            </div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-card border-border focus:border-primary focus:ring-primary/20 resize-none"
            />
            <Button type="submit" variant="glow" size="xl" className="w-full md:w-auto">
              <Send size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
