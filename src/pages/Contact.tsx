import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pl-56">
      <div className="max-w-4xl mx-auto p-12">
        <h2 className="text-sm font-semibold text-muted-foreground mb-8 tracking-wide">
          CONTACT
        </h2>
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h1 className="text-4xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss 
            how we can work together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:hello@reza.com"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">hello@reza.com</p>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </div>
            </a>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
