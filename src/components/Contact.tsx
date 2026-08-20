import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, PhoneCall, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Config (သင့် Credentials များဖြင့် အစားထိုးပါ)
    const SERVICE_ID = "service_2bq5r86";
    const TEMPLATE_ID = "template_vau5b3t";
    const PUBLIC_KEY = "MP6Nb4q-7CkOjfKEd";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,      // Map name -> from_name
          from_email: formData.email,    // Map email -> from_email
          reply_to: formData.email,      // Optional: Allows direct reply
          message: formData.message,     // Map message -> message
          to_email: "winhlainghtun.wht@gmail.com",
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Message Sent Successfully! 🎉",
            description: "Thank you for reaching out. I will get back to you as soon as possible.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          toast({
            variant: "destructive",
            title: "Failed to Send Message",
            description: "Something went wrong. Please try again or email me directly.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss web applications & offshore development? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your Name"
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Feel free to reach out through any of these channels. I'm always open to discussing
                new projects, creative ideas, or web development opportunities.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:winhlainghtun.wht@gmail.com"
                  className="flex items-center text-sm sm:text-base hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  winhlainghtun.wht@gmail.com
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                {/* Facebook Button */}
                <a
                  href="https://www.facebook.com/winhlaing.htun.9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-lg flex items-center justify-center border hover:border-primary hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Viber Button */}
                <a
                  href="viber://chat?number=%2B959969630514"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Viber"
                  className="h-10 w-10 rounded-lg flex items-center justify-center border hover:border-primary hover:text-primary transition-colors"
                >
                  <PhoneCall className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
