import Lottie from "lottie-react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Metric {
  value: string;
  label: string;
}

interface ProjectCardProps {
  client: string;
  date: string;
  title: string;
  metrics: Metric[];
  projectId: string;
  thumbnail: any;
}

const ProjectCard = ({
  client,
  date,
  title,
  metrics,
  projectId,
  thumbnail,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${projectId}`)}
      className="bg-card overflow-hidden shadow-sm border border-[#E8E8E8] hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
    >
      <div className="h-60 bg-secondary overflow-hidden flex items-center justify-center">
        {typeof thumbnail === "object" ? (
          <Lottie
            animationData={thumbnail}
            loop={true}
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{client}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-card-foreground">
          {title}
        </h3>
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
