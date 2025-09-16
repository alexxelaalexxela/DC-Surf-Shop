import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with DC surf shop — rentals, lessons, and boards in Kuta, Lombok.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Visit Our Shop</h3>
                  <p className="text-muted-foreground">
                    DC surf shop<br />
                    Jl. Raya Kuta, Kuta, Kec. Pujut<br />
                    Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
                  <Button asChild variant="outline" className="mb-2">
                    <a href="https://wa.me/6287862300023">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      087862300023
                    </a>
                  </Button>
                </div>
              </div>

              

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                  <div className="text-muted-foreground">
                    <div>Monday - Saturday: 8:00 AM - 6:00 PM</div>
                    <div>Sunday: 9:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-sand-light rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">Find Us at DC surf shop</h3>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
                  title="DC surf shop Kuta Lombok Location"
                  src="https://www.google.com/maps?q=DC%20surf%20shop%20Kuta%20Lombok&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=DC%20surf%20shop%20Kuta%20Lombok"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;