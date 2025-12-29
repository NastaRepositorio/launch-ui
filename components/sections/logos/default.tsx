import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import { CoinsIcon, ClockIcon, RocketIcon } from "lucide-react";

interface LogosProps {
  title?: string | ReactNode;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = (<>
    Foco em <span className="text-brand underline">Eficiência</span> e <span className="text-brand underline">Valor Tangível</span>, não promessas vazias
  </>),
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Consultoria e desenvolvimento ágil
    </Badge>
  ),
  logos = [
    <Logo key="mvp" image={CoinsIcon} name="MVP em semanas" />,
    <Logo key="efficiency" image={ClockIcon} name="Foco em eficiência" />,
    <Logo key="real" image={RocketIcon} name="Ativos reais e customizados" />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-2xl font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
