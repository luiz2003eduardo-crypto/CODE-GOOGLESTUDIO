
import React from 'react';
import { 
  Sparkles, 
  Stethoscope, 
  Activity, 
  ShieldCheck, 
  Heart, 
  Clock, 
  Target, 
  UserRound,
  Shield,
  Zap
} from 'lucide-react';
import { Service, Differential, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'clareamento',
    name: 'Clareamento Dental',
    description: 'Técnicas seguras para devolver a luminosidade natural do seu sorriso.',
    benefit: 'Melhora a autoestima com um sorriso mais brilhante e saudável.',
    icon: Sparkles
  },
  {
    id: 'limpeza',
    name: 'Profilaxia (Limpeza)',
    description: 'Remoção de placa e tártaro para prevenir doenças gengivais.',
    benefit: 'Mantém o hálito fresco e previne cáries e inflamações.',
    icon: Stethoscope
  },
  {
    id: 'sisos',
    name: 'Extração de Sisos',
    description: 'Procedimento cirúrgico cuidadoso para dentes inclusos ou mal posicionados.',
    benefit: 'Elimina dores e evita o desalinhamento de outros dentes.',
    icon: Activity
  },
  {
    id: 'restauracoes',
    name: 'Restaurações Estéticas',
    description: 'Uso de resinas de alta qualidade para reconstruir dentes com naturalidade.',
    benefit: 'Recupera a função mastigatória e a estética dental.',
    icon: Target
  },
  {
    id: 'avaliacao',
    name: 'Avaliação Completa',
    description: 'Exame detalhado da saúde bucal, dentes e tecidos moles.',
    benefit: 'Diagnóstico precoce e planejamento assertivo do tratamento.',
    icon: ShieldCheck
  },
  {
    id: 'cirurgias',
    name: 'Cirurgias Simples',
    description: 'Pequenas intervenções realizadas em consultório com total segurança.',
    benefit: 'Soluções rápidas para problemas pontuais de saúde bucal.',
    icon: Activity
  },
  {
    id: 'prevencao',
    name: 'Prevenção e Saúde',
    description: 'Orientações personalizadas para manter seu sorriso saudável por anos.',
    benefit: 'Menor necessidade de tratamentos complexos no futuro.',
    icon: Heart
  },
  {
    id: 'urgencias',
    name: 'Urgências Odontológicas',
    description: 'Atendimento prioritário para casos de dor aguda ou traumas.',
    benefit: 'Alívio imediato e resolução rápida de problemas críticos.',
    icon: Zap
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Atendimento Humanizado',
    description: 'Tratamos pessoas, não apenas dentes. Cada paciente é único.',
    icon: UserRound
  },
  {
    title: 'Planejamento Individual',
    description: 'Soluções pensadas especificamente para sua necessidade e biotipo.',
    icon: Target
  },
  {
    title: 'Ambiente Seguro',
    description: 'Rigorosos protocolos de biossegurança e conforto absoluto.',
    icon: Shield
  },
  {
    title: 'Foco em Estética e Função',
    description: 'O equilíbrio perfeito entre um sorriso bonito e uma mastigação correta.',
    icon: Sparkles
  },
  {
    title: 'Ética Profissional',
    description: 'Transparência total em cada etapa do seu tratamento.',
    icon: ShieldCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Silva',
    text: 'Fiquei muito satisfeita com a atenção e o cuidado. O ambiente é muito tranquilo e me senti segura do início ao fim.'
  },
  {
    name: 'Ricardo Oliveira',
    text: 'Excelente profissional. Explica tudo com muita clareza, sem pressa. A restauração ficou perfeita e muito natural.'
  },
  {
    name: 'Carla Mendes',
    text: 'Atendimento pontual e equipe muito educada. É difícil encontrar um consultório que passe tanta confiança hoje em dia.'
  }
];
