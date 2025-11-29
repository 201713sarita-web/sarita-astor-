import { Card } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada pastel es elaborado con dedicación y los mejores ingredientes",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Productos artesanales de la más alta calidad para tu satisfacción",
  },
  {
    icon: Users,
    title: "Para Ti",
    description: "Diseños personalizados para hacer tus celebraciones únicas",
  },
  {
    icon: Clock,
    title: "Entregas Puntuales",
    description: "Comprometidos con la puntualidad en cada pedido",
  },
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-secondary/30" id="nosotros">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              ¿Por qué <span className="text-transparent bg-clip-text bg-[var(--gradient-primary)]">Elegirnos?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos más que una pastelería, somos parte de tus momentos más dulces
            </p>
          </div>

          {/* Grid de características */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-4 card-hover border-0 shadow-[var(--shadow-card)] bg-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--gradient-primary)] flex items-center justify-center shadow-lg relative">
                    <Icon className="w-8 h-8 text-white" />
                    {feature.title === 'Hecho con Amor' && (
                      <span className="absolute inset-0 flex items-center justify-center text-2xl">❤️</span>
                    )}
                    {feature.title === 'Calidad Premium' && (
                      <span className="absolute inset-0 flex items-center justify-center text-2xl">💎</span>
                    )}
                    {feature.title === 'Para Ti' && (
                      <span className="absolute inset-0 flex items-center justify-center text-2xl">📦</span>
                    )}
                    {feature.title === 'Entregas Puntuales' && (
                      <span className="absolute inset-0 flex items-center justify-center text-2xl">🚲</span>
                    )}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Descripción decorada */}
          <div className="relative bg-gradient-to-br from-pink-100 via-yellow-50 to-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-glow)] border-4 border-primary/30 overflow-hidden">
            {/* Icono decorativo pastel encima del título */}
            <div className="relative flex flex-col items-center">
              <span className="text-7xl drop-shadow-lg mb-2" style={{marginTop: '-20px'}}>🎂</span>
              <h3 className="text-6xl md:text-7xl font-display font-extrabold text-primary drop-shadow-lg tracking-wide mb-4 bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Nuestra Historia
              </h3>
            </div>
            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-20">
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed bg-white/60 rounded-xl px-4 py-2 shadow-sm">
                Desde hace años, nos dedicamos a crear experiencias dulces que perduran en la memoria.<br/>
                Cada pastel, cada postre es elaborado con ingredientes de primera calidad y mucho cariño.<br/>
                Nuestro equipo de pasteleros artesanos trabaja para hacer realidad tus sueños más dulces.
              </p>
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed bg-white/60 rounded-xl px-4 py-2 shadow-sm">
                Ya sea para cumpleaños, bodas, o cualquier ocasión especial, estamos aquí para <br/>
                endulzar tus momentos más importantes.
              </p>
            </div>
            {/* Decoración alrededor */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <span className="absolute top-4 left-8 text-4xl opacity-70">🍰</span>
              <span className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl opacity-70">🧁</span>
              <span className="absolute bottom-4 left-12 text-4xl opacity-70">🍮</span>
              <span className="absolute top-4 right-8 text-4xl opacity-70">🧁</span>
              <span className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl opacity-70">🍮</span>
              <span className="absolute bottom-4 right-12 text-4xl opacity-70">🍰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
