import type { Experience, FaqItem, NavItem, Service } from '@/types/content'

export const navigation: NavItem[] = [
  { label: 'INÍCIO', href: '#inicio' }, { label: 'SOBRE MIM', href: '#sobre' },
  { label: 'PRECIOUS BEAUTY', href: '#precious-beauty' }, { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'EXPERIÊNCIAS', href: '#experiencias' }, { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'DÚVIDAS', href: '#duvidas' }, { label: 'AGENDAR', href: '#agendar' },
]

export const differentials = [
  ['Visagismo', 'Cada produção é pensada a partir dos seus traços, proporções, características e identidade. A maquiagem é construída para você — não simplesmente reproduzida.'],
  ['A minha forma de olhar', 'Acredito que a beleza está nos detalhes. Observo cuidadosamente cada elemento da produção, buscando harmonia e equilíbrio no resultado final.'],
  ['Acabamento', 'Uma maquiagem sofisticada começa em uma pele bem preparada e termina em um acabamento cuidadosamente executado.'],
  ['Personalização', 'Referências e tendências podem fazer parte do processo, mas nunca substituem aquilo que torna você única.'],
  ['Experiência de atendimento', 'Você não reserva apenas um horário: reserva um momento para ser cuidada, conversar, desacelerar e se preparar para algo importante.'],
  ['Propósito', 'Minha fé influencia a forma como enxergo meu trabalho e as mulheres que recebo. Meu trabalho é valorizar a beleza e a singularidade de cada uma.'],
].map(([title, text], index) => ({ number: String(index + 1).padStart(2, '0'), title, text }))

export const services: Service[] = [
  {
    id: 'social', title: 'Maquiagem Social', eyebrow: 'Para celebrar, participar e viver momentos especiais.', image: '/images/clientes/IMG_3320.JPG.jpeg',
    description: ['Produção personalizada para convidadas, madrinhas, formandas, aniversariantes, ensaios fotográficos e outros eventos.', 'A maquiagem considera seus traços, estilo, roupa, horário e ocasião, buscando uma imagem harmoniosa e coerente com quem você é.', 'Ideal para convidadas, madrinhas, formandas, aniversários, ensaios e eventos especiais.'],
    message: 'Olá, Emily! Conheci seu trabalho pelo site da Precious Beauty e tenho interesse em Maquiagem Social. Gostaria de consultar disponibilidade e receber mais informações.',
  },
  {
    id: 'noivas', title: 'Maquiagem para Noivas', eyebrow: 'Todos estarão esperando por você. Esse é o seu grande dia.', image: '/images/clientes/IMG_3303.JPG.jpeg',
    description: ['A maquiagem da noiva é planejada com atenção especial aos detalhes: traços, personalidade, vestido, acessórios, horário, local e atmosfera do casamento.', 'Uma produção à altura da ocasião, sem perder aquilo que faz você ser você — para que, ao olhar suas fotografias no futuro, continue reconhecendo a mulher que viveu aquele dia.'],
    message: 'Olá, Emily! Conheci seu trabalho pelo site da Precious Beauty e tenho interesse na Maquiagem para Noivas. Gostaria de conversar sobre meu casamento, disponibilidade e detalhes da experiência.',
  },
  {
    id: 'coletivo', title: 'Atendimento Coletivo', eyebrow: 'Porque algumas ocasiões ficam ainda melhores quando vividas juntas.', image: '/images/clientes/IMG_3321.JPG.jpeg',
    description: ['Para mulheres que desejam se preparar para o mesmo evento no mesmo espaço, ofereço experiências personalizadas para grupos.', 'É possível reunir amigas, madrinhas, familiares e convidadas e transformar a preparação em parte da celebração.'],
    message: 'Olá, Emily! Conheci seu trabalho pelo site da Precious Beauty e tenho interesse em Atendimento Coletivo. Gostaria de conversar sobre a quantidade de pessoas, data, local e detalhes da experiência.',
  },
]

export const experiences: Experience[] = [
  {
    title: 'Precious Bride Experience', subtitle: 'O dia da noiva, vivido por inteiro.', image: '/images/clientes/IMG_3302.JPG.jpeg',
    description: ['O casamento começa muito antes do altar. Esta experiência transforma as horas antes do “sim” em uma lembrança especial ao lado das mulheres que a noiva escolheu.', 'Noiva, madrinhas, mãe e sogra são recebidas em ambiente reservado e confortável para conversar, rir, se emocionar, compartilhar uma refeição e brindar.', 'Não é sobre protocolos. É sobre criar um dia com significado — um momento que passe devagar o suficiente para ser aproveitado.'],
    highlights: ['Maquiagem personalizada da noiva', 'Maquiagem das acompanhantes', 'Lanches naturais e bebidas', 'Bolo e brinde', 'Cabeleireira de confiança, mediante organização prévia'],
    message: 'Olá, Emily! Conheci a Precious Bride Experience pelo site e gostaria de conversar sobre meu casamento, a quantidade de acompanhantes, disponibilidade e detalhes da experiência.',
  },
  {
    title: 'Precious Moments', subtitle: 'Um momento especial antes de um momento inesquecível.', image: '/images/clientes/IMG_3304.JPG.jpeg',
    description: ['Criado para madrinhas, amigas, familiares e convidadas que desejam transformar as horas antes de uma celebração em uma experiência compartilhada.', 'Válido também para festas, formaturas, aniversários, desfiles e outras ocasiões em que várias mulheres desejam se reunir durante a produção.', 'Há ainda auxílio para se vestir e colocar acessórios sem danificar a maquiagem; fotógrafos e storymakers podem ser alinhados previamente.'],
    highlights: ['Maquiagens personalizadas', 'Conversa e celebração', 'Lanches, bebidas e brinde', 'Auxílio com roupa e acessórios', 'Memórias ao lado de pessoas especiais'],
    message: 'Olá, Emily! Conheci o Precious Moments pelo site e gostaria de conversar sobre a data, a ocasião, a quantidade de pessoas e os detalhes da experiência.',
  },
]

export const journey = [
  ['Conversa e agendamento', 'Conte pelo WhatsApp a data, horário, local e o serviço que procura. Emily verifica a disponibilidade e envia os detalhes.'],
  ['Reserva', 'Após a confirmação da disponibilidade, o horário é reservado mediante o pagamento da taxa de agendamento.'],
  ['Preparação', 'Você recebe as orientações necessárias e o horário é alinhado para que esteja pronta com tranquilidade.'],
  ['Análise e conversa', 'No início, vocês conversam sobre preferências e sensações, enquanto Emily observa traços e características.'],
  ['Construção da maquiagem', 'Pele, cores, intensidade, formas e acabamento são escolhidos com técnica, visagismo e intenção.'],
  ['Finalização', 'Todos os detalhes são conferidos e, se necessário, ajustados para que você saia segura e pronta para viver o momento.'],
].map(([title, text], index) => ({ number: String(index + 1).padStart(2, '0'), title, text }))

export const preparation = [
  ['Pele', 'Venha com a pele limpa e sem maquiagem. Mantenha sua rotina habitual de skincare, evite produtos novos e procedimentos que sensibilizem a pele. Se usa ácidos ou faz tratamento dermatológico, siga seu profissional.'],
  ['No dia', 'Faça uma refeição leve, beba água, venha sem maquiagem, evite procedimentos faciais próximos ao evento, separe referências e organize acessórios e itens da produção.'],
  ['Roupa', 'Prefira roupa fácil de retirar sem passar pelo rosto ou venha já vestida. Uma foto do look ajuda a criar uma beleza coerente com a cor e o formato da roupa.'],
  ['Cabelo', 'Se também fará o cabelo no local, alinhe o cronograma previamente. Emily não realiza penteados; na Precious Bride Experience, você pode levar sua cabeleireira.'],
  ['Referências', 'Você pode mostrar maquiagens que gosta. Elas ajudam a compreender preferências e serão adaptadas aos seus próprios traços.'],
  ['Horário', 'Pontualidade é essencial. Chegar no horário permite que a produção aconteça com calma e respeite o cronograma do evento.'],
].map(([title, text]) => ({ title, text }))

export const bookingSteps = [
  ['Você entra em contato', 'Envia data, horário, local e serviço desejado.'],
  ['Consulto a disponibilidade', 'Verifico a data e o horário necessários.'],
  ['Você recebe as informações', 'Envio os detalhes do atendimento e da reserva.'],
  ['Pagamento da taxa', 'Após o pagamento, seu horário é oficialmente reservado.'],
  ['Atendimento confirmado', 'Sua produção fica registrada na agenda.'],
].map(([title, text], index) => ({ number: String(index + 1).padStart(2, '0'), title, text }))

export const faq: FaqItem[] = [
  ['E se eu não souber qual maquiagem combina comigo?', ['Você não precisa chegar sabendo exatamente o que quer. Conversamos sobre preferências, ocasião e imagem desejada; então uso meu olhar técnico e o visagismo para construir uma maquiagem adequada a você.', 'Você não precisa ser especialista em maquiagem. Esse é o meu trabalho.']],
  ['E se eu mostrar uma referência e ficar diferente em mim?', ['A referência mostra o que você gosta — não deve ser copiada exatamente. Adapto a inspiração às suas características para que faça sentido em você.']],
  ['Tenho medo de não me reconhecer depois da maquiagem.', ['Minha proposta não é apagar sua identidade. O embelezamento com propósito destaca características e aumenta sua presença sem deixar de pertencer a você.']],
  ['Tenho medo de a maquiagem ficar bonita, mas não combinar comigo.', ['Considero seus traços, personalidade, estilo, ocasião e a imagem que deseja transmitir. O objetivo não é fazer uma maquiagem bonita em você, mas uma maquiagem bonita para você.']],
  ['E se eu não gostar de maquiagem muito forte?', ['A intensidade não vem de uma fórmula. Entendemos seus limites e preferências para criar presença, sofisticação e definição na medida certa.']],
  ['E se minha pele tiver textura, manchas ou alguma característica que me incomoda?', ['A preparação considera as características da sua pele e busca acabamento bonito e adequado, sem deixar de respeitar sua individualidade.']],
  ['Tenho medo de a maquiadora atrasar meu cronograma.', ['O horário é planejado a partir do momento em que você precisa estar pronta. Você não precisa passar o dia olhando para o relógio.']],
  ['E se eu precisar me maquiar junto com várias pessoas?', ['Para noivas e madrinhas existe a Precious Bride Experience. Para convidadas e outras mulheres do evento, existe a Precious Moments. Quantidade e cronograma são planejados antes.']],
  ['Não sou madrinha, mas também não quero me arrumar sozinha.', ['O Precious Moments foi criado justamente para convidadas, amigas e familiares que desejam se preparar juntas.']],
  ['Minha cabeleireira é outra profissional. Posso levar?', ['Sim. Na Precious Bride Experience, a noiva pode levar sua cabeleireira de confiança, mediante alinhamento prévio.']],
  ['Moro em outra cidade. Preciso ir até Fernandópolis?', ['Não necessariamente. Também realizo atendimentos a domicílio e em outras cidades, conforme disponibilidade e logística.']],
  ['Por que preciso pagar uma taxa para reservar?', ['Quando você escolhe um horário, esse período sai da agenda e fica exclusivamente destinado à sua produção. A taxa confirma essa reserva e não é um valor adicional ao serviço.']],
  ['E se eu ainda estiver decidindo e quiser deixar o horário reservado?', ['Como existe uma quantidade limitada de atendimentos por dia, horários só ficam bloqueados após a confirmação da reserva.']],
  ['Por que preciso reservar tão cedo?', ['Casamentos e eventos exigem organizar cerimônia, deslocamento, quantidade de pessoas, cabelo, maquiagem e tempo de preparação. Quanto antes planejarmos, mais tranquila será a experiência.']],
  ['E se eu chegar atrasada?', ['O atraso pode reduzir o tempo da sua produção ou comprometer os próximos horários. Pontualidade faz parte da experiência.']],
  ['Eu não quero apenas uma maquiagem. Quero ser bem atendida.', ['Então você está procurando a experiência certa. Excelência está no resultado, na forma como você é recebida, na atenção aos detalhes e em como se sente quando sai daqui.']],
].map(([question, answer]) => ({ question: question as string, answer: answer as string[] }))

export const generalMessage = 'Olá, Emily! Conheci seu trabalho pelo site da Precious Beauty e gostaria de solicitar um atendimento. Meu nome é: ___. A data do evento é: ___. Preciso estar pronta às: ___. O evento será: ___. Local: ___. Tenho interesse em: ___. Gostaria de consultar disponibilidade e receber mais informações.'
