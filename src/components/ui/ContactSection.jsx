import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        e.target.reset();
      } else {
        toast({
          title: "Error",
          description: "Message failed to send. Try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Server Error",
        description: "Backend not reachable. Start backend server first.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kumariaditi0406@gmail.com"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    kumariaditi0406@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91 8825183667"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    +91 8825183667
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Kolkata, India
                  </span>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="pt-8 text-center md:text-left">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://www.linkedin.com/in/aditi-kumari-99789024b"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition duration-300 hover:scale-110"
                >
                  <Linkedin size={26} />
                </a>

              

                <a
                  href="https://www.instagram.com/_.aditikumari?igsh=MTl0bnZ6MGF3bmd3cw=="
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition duration-300 hover:scale-110"
                >
                  <Instagram size={26} />
                </a>

                <a
                  href="https://www.facebook.com/share/1As6qzjEQp/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition duration-300 hover:scale-110"
                >
                  <Facebook size={26} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Aditi Kumari..."
                  className="
                    w-full px-4 py-3 rounded-md
                    border border-input bg-background
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="aditi0406@gmail.com"
                  className="
                    w-full px-4 py-3 rounded-md
                    border border-input bg-background
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Hello, I'd like to talk about..."
                  className="
                    w-full px-4 py-3 rounded-md
                    border border-input bg-background resize-none
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full flex items-center justify-center gap-2
                  px-6 py-2 rounded-full
                  bg-[hsl(var(--primary))]
                  text-[hsl(var(--primary-foreground))]
                  font-medium
                  transition-all duration-300
                  hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]
                  hover:scale-105
                  disabled:opacity-60
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
