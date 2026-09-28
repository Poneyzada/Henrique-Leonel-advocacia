export const CONTACT_CONFIG = {
  lawyerName: 'Dr. Henrique Leonel',
  firmName: 'Henrique Leonel Advocacia & Consultoria',
  oabNumber: 'OAB/BA 60.205',
  whatsappNumber: '5571999999999', // Altere apenas este número quando tiver o número oficial do Dr. Henrique
  whatsappDisplay: '(71) 99999-9999',
  email: 'contato@henriqueleonel.adv.br',
  address: 'Av. Tancredo Neves, 2227 - Condomínio Edifício Salvador Shopping Business / Mundo Plaza, Salvador - BA',
};

export const INTAKE_SERVICES = {
  bloqueio: {
    id: 'bloqueio',
    alias: ['desbloqueio', 'uber', 'ifood', 'banco'],
    label: 'Desbloqueio de Conta & Apps',
    badge: 'DIREITO BANCÁRIO & APPS',
    icon: '🔓',
    subOptions: [
      {
        id: 'conta_bancaria',
        title: 'Conta Bancária Bloqueada',
        desc: 'Nubank, Inter, Bradesco, Itaú, CEF, BB, etc. Saldo bloqueado sem justificativa.',
        icon: '🏦'
      },
      {
        id: 'conta_app',
        title: 'Conta de Aplicativo (Uber, 99, iFood, Mercado Pago)',
        desc: 'Conta de motorista, entregador ou comerciante desativada com valores retidos.',
        icon: '🚗'
      }
    ]
  },
  'plano-saude': {
    id: 'plano-saude',
    alias: ['plano', 'revisao-plano', 'saude'],
    label: 'Revisão de Plano de Saúde',
    badge: 'DIREITO À SAÚDE & REVISÃO',
    icon: '🏥',
    subOptions: [
      {
        id: 'reajuste_abusivo',
        title: 'Reajuste Abusivo de Mensalidade',
        desc: 'Aumento por faixa etária (59 anos) ou reajuste anual muito acima da inflação.',
        icon: '📈'
      },
      {
        id: 'cancelamento_indevido',
        title: 'Cancelamento Indevido ou Unilateral',
        desc: 'Operadora cancelou seu plano de surpresa mesmo com pagamentos em dia.',
        icon: '🚫'
      },
      {
        id: 'revisao_contratual',
        title: 'Revisão Geral do Contrato / Cobranças Indevidas',
        desc: 'Dúvidas em cláusulas abusivas, coparticipação excessiva ou negativa de cobertura.',
        icon: '⚖️'
      }
    ]
  },
  medicamento: {
    id: 'medicamento',
    alias: ['tratamento', 'cirurgia', 'negativa', 'remedio'],
    label: 'Negativa de Tratamento/Medicamento',
    badge: 'URGÊNCIA MÉDICA & LIMINARES',
    icon: '💉',
    subOptions: [
      {
        id: 'medicamento_alto_custo',
        title: 'Medicamento de Alto Custo Negado',
        desc: 'Remédio prescrito recusado pelo plano sob alegação de "fora do rol da ANS".',
        icon: '💊'
      },
      {
        id: 'cirurgia_urgencia',
        title: 'Cirurgia ou Procedimento de Urgência Recusado',
        desc: 'Intervenção cirúrgica, prótese ou internação negada com risco à saúde.',
        icon: '🏥'
      },
      {
        id: 'exame_terapia_homecare',
        title: 'Exames, Terapias (TEA/Autismo) ou Home Care',
        desc: 'Tratamento contínuo essencial ou internação domiciliar recusada pela operadora.',
        icon: '🩺'
      }
    ]
  }
};

/**
 * Salva o lead no localStorage para histórico e monta a URL do WhatsApp
 */
export const openWhatsAppLead = ({
  name = '',
  email = '',
  service = 'bloqueio',
  subOption = '',
  details = '',
  origin = 'Site Principal'
} = {}) => {
  const serviceConfig = INTAKE_SERVICES[service] || INTAKE_SERVICES.bloqueio;
  const serviceLabel = serviceConfig.label;

  // Registrar localmente para segurança e histórico do cliente
  try {
    const existing = JSON.parse(localStorage.getItem('hl_leads') || '[]');
    existing.unshift({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      name: name.trim() || 'Não informado',
      email: email.trim() || 'Não informado',
      service: serviceLabel,
      subOption: subOption || 'Não especificado',
      details: details.trim() || '',
      origin: origin || 'Site Geral'
    });
    localStorage.setItem('hl_leads', JSON.stringify(existing.slice(0, 100)));
  } catch (err) {
    console.warn('Erro ao salvar lead no localStorage:', err);
  }

  const lines = [
    '⚖️ *CONSULTA JURÍDICA — HENRIQUE LEONEL ADVOCACIA*',
    '🏛️ *OAB/BA 60.205 | Atendimento Nacional 100% Online*',
    '',
    `📍 *Origem:* ${origin || 'Site Institucional'}`,
    name.trim() ? `👤 *Nome:* ${name.trim()}` : null,
    email.trim() ? `📧 *E-mail:* ${email.trim()}` : null,
    `📂 *Área de Atuação:* ${serviceLabel}`,
    subOption ? `⚠️ *Situação Específica:* ${subOption}` : null,
    details.trim() ? `💬 *Detalhes Adicionais:* ${details.trim()}` : null,
    '',
    'Olá Dr. Henrique Leonel! Preenchi essas informações no site e gostaria de uma avaliação jurídica gratuita do meu caso.'
  ].filter(Boolean);

  const text = lines.join('\n');
  const url = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};
