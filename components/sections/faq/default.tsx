import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Dúvidas frequentes",
  items = [
    {
      question: "Em quanto tempo entregam um MVP?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Em geral, falamos de semanas (não meses), conforme escopo definido no
          Blueprint. Um MVP típico fica pronto entre 4 e 8 semanas após a fase
          de descoberta.
        </p>
      ),
    },
    {
      question: "Como garantem que o sistema não vira 'mais um Frankenstein'?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Priorizamos arquitetura modular, código limpo e padrões de
            engenharia comprovados. Cada entrega passa por revisão técnica
            rigorosa antes de avançar.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Trabalhamos com critérios de aceitação objetivos e testes
            automatizados, evitando que débito técnico se acumule. A evolução
            acontece em ciclos curtos e controlados.
          </p>
        </>
      ),
    },
    {
      question: "Vocês substituem ou integram com o que já existe?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Depende do caso: quando possível, integramos para preservar o que
          funciona e acelerar valor. Avaliamos cada sistema existente na fase
          de descoberta.
        </p>
      ),
    },
    {
      question: "Qual é o custo típico?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Orçamos por etapas. O MVP é fatiado para entregar o 80/20 que gera
          resultado rápido. Após a descoberta inicial, apresentamos uma proposta
          detalhada com investimento e retorno esperado.
        </p>
      ),
    },
    {
      question: "Como medem sucesso?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Definimos métricas logo no início (tempo, custo, erros, receita),
          acompanhadas a cada ciclo. O sucesso é mensurável desde o primeiro
          MVP.
        </p>
      ),
    },
    {
      question: "Preciso ter time interno de tecnologia?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Não é obrigatório. Atuamos como parceiro consultivo e técnico, com
          transferência de conhecimento. Se você tiver time, trabalhamos em
          conjunto; se não, assumimos a execução.
        </p>
      ),
    },
    {
      question:
        "Por que não usar IA generativa ou no-code para criar o sistema?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Ferramentas de IA podem gerar código rapidamente, mas sistemas de
            produção exigem arquitetura sólida, segurança, escalabilidade e
            manutenibilidade — áreas onde prompts e no-code ficam limitados.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Um sistema "promptado" por não-desenvolvedores pode funcionar
            inicialmente, mas tende a colapsar sob carga real, mudanças de
            requisitos ou necessidade de integrações complexas.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Nossa equipe domina as tecnologias modernas (incluindo IA como
            ferramenta auxiliar) para construir sistemas que escalam, se adaptam
            e sobrevivem ao tempo.
          </p>
        </>
      ),
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Escolhemos a stack conforme o contexto do projeto. Trabalhamos com
            tecnologias modernas e maduras: React, Next.js, Node.js, Python,
            TypeScript, bancos SQL e NoSQL, cloud (AWS, GCP, Azure).
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Também integramos IA onde faz sentido: automação, análise de dados,
            assistentes inteligentes — sempre com foco em valor real, não em
            hype.
          </p>
        </>
      ),
    },
    {
      question: "E depois do MVP? Vocês fazem manutenção e evolução?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Sim. Após o MVP, você pode optar por evoluções incrementais,
          manutenção contínua ou apenas suporte pontual. Trabalhamos em modelo
          de parceria de longo prazo ou entregas por demanda.
        </p>
      ),
    },
    {
      question: "Como funciona a comunicação durante o projeto?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Transparência total. Você recebe atualizações regulares (semanal ou
            quinzenal), acesso ao backlog, demos das entregas e contato direto
            com a equipe técnica.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Evitamos surpresas: problemas são escalados imediatamente, e você
            participa das decisões importantes sobre arquitetura e prioridades.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
