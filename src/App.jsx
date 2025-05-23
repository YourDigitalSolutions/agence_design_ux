
import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Layers, 
  Smartphone, 
  Monitor, 
  PenTool, 
  Users, 
  Code, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook 
} from "lucide-react";

const App = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Nous vous contacterons bientôt.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      {/* Header */}
      <header className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
            <Layers className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">DesignFusion</span>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">À propos</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </motion.nav>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button>Demander un devis</Button>
        </motion.div>
      </header>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
        <div className="absolute top-0 right-0 -z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            className="hero-blob w-96 h-96 rounded-full bg-primary"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-blob w-80 h-80 rounded-full bg-secondary"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Nous créons des <span className="text-primary">expériences</span> qui <span className="text-secondary">inspirent</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Notre agence de design UX/UI transforme vos idées en interfaces intuitives et esthétiques qui captiveront vos utilisateurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Voir notre portfolio
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img  className="w-full h-auto rounded-lg shadow-xl" alt="Interface design moderne avec éléments UX/UI" src="https://images.unsplash.com/photo-1540612597331-63c67ea382fc" />
            
            <motion.div 
              initial={{ x: -20, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium">UX Design</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">UI Design</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous proposons une gamme complète de services de design pour créer des expériences utilisateur exceptionnelles.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <PenTool className="h-10 w-10 text-primary" />,
              title: "UI Design",
              description: "Création d'interfaces visuellement attrayantes et cohérentes qui reflètent l'identité de votre marque."
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "UX Design",
              description: "Conception d'expériences utilisateur intuitives et fluides basées sur la recherche et les tests utilisateurs."
            },
            {
              icon: <Smartphone className="h-10 w-10 text-primary" />,
              title: "Design Mobile",
              description: "Création d'interfaces mobiles optimisées pour offrir une expérience utilisateur exceptionnelle sur tous les appareils."
            },
            {
              icon: <Monitor className="h-10 w-10 text-primary" />,
              title: "Design Web",
              description: "Conception de sites web modernes, réactifs et accessibles qui convertissent les visiteurs en clients."
            },
            {
              icon: <Layers className="h-10 w-10 text-primary" />,
              title: "Design System",
              description: "Création de systèmes de design cohérents et évolutifs pour unifier l'expérience utilisateur de votre marque."
            },
            {
              icon: <Code className="h-10 w-10 text-primary" />,
              title: "Prototypage",
              description: "Développement de prototypes interactifs pour tester et valider vos concepts avant le développement."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="bg-muted py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Refonte UX/UI pour Fintech",
                category: "Finance",
                image: "Application financière moderne avec interface utilisateur épurée"
              },
              {
                title: "Application Mobile E-commerce",
                category: "E-commerce",
                image: "Application mobile e-commerce avec interface utilisateur élégante"
              },
              {
                title: "Dashboard Analytics",
                category: "SaaS",
                image: "Dashboard d'analyse de données avec graphiques et visualisations"
              },
              {
                title: "Site Web Immobilier",
                category: "Immobilier",
                image: "Site web immobilier moderne avec recherche de propriétés"
              },
              {
                title: "Application de Santé",
                category: "Santé",
                image: "Application de santé avec interface utilisateur intuitive et fonctionnalités de suivi"
              },
              {
                title: "Plateforme Éducative",
                category: "Éducation",
                image: "Plateforme d'apprentissage en ligne avec interface utilisateur engageante"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="portfolio-item bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64">
                  <img  className="w-full h-full object-cover" alt={project.title} src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <span className="text-xs font-medium text-primary bg-white px-2 py-1 rounded-full">{project.category}</span>
                      <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Voir tous les projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img  className="w-full h-auto rounded-lg shadow-xl" alt="L'équipe de DesignFusion au travail" src="https://images.unsplash.com/photo-1540612597331-63c67ea382fc" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium">+5 ans d'expérience</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de nous</h2>
            <p className="text-lg text-muted-foreground mb-6">
              DesignFusion est une agence de design UX/UI passionnée par la création d'expériences numériques exceptionnelles. Notre équipe de designers talentueux combine créativité et expertise technique pour transformer vos idées en solutions visuelles impactantes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nous croyons que le bon design doit être à la fois beau et fonctionnel. C'est pourquoi nous mettons l'accent sur la recherche utilisateur et les tests pour créer des interfaces qui non seulement attirent l'attention, mais qui sont également intuitives et agréables à utiliser.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Design centré utilisateur</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Approche collaborative</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Innovation constante</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Souci du détail</span>
              </div>
            </div>
            
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              En savoir plus sur notre équipe
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre vision en réalité?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer une expérience utilisateur exceptionnelle.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Demander un devis gratuit
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête? Nous serions ravis d'en discuter avec vous.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">Envoyer le message</Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@designfusion.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">123 Avenue du Design, 75001 Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Heures d'ouverture</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <Layers className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">DesignFusion</span>
              </div>
              <p className="text-muted-foreground">
                Créons ensemble des expériences numériques exceptionnelles qui transforment votre vision en réalité.
              </p>
            </div>
            
            <div>
              <p className="font-medium mb-4">Services</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">UI Design</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">UX Design</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Design Mobile</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Design Web</a></li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium mb-4">Entreprise</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">À propos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carrières</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium mb-4">Légal</p>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mentions légales</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conditions d'utilisation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 DesignFusion. Tous droits réservés.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
