import { TrendingUp } from "lucide-react";
import Lottie from "lottie-react";

interface Metric {
  value: string;
  label: string;
}

interface ProjectCardProps {
  image: string | any;
  company: string;
  year: string;
  title: string;
  metrics: Metric[];
}

const ProjectCard = ({ image, company, year, title, metrics }: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] bg-secondary overflow-hidden flex items-center justify-center">
        {typeof image === 'object' ? (
          <Lottie 
            animationData={image}
            loop={true}
            className="w-full h-full"
          />
        ) : (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{company}</span>
          <span>•</span>
          <span>{year}</span>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-card-foreground">{title}</h3>
        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="font-semibold text-accent">{metric.value}</span>
              <span className="text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
