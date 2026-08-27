import type { MediaItem } from '@/types/content'

export const media: { owner: MediaItem[]; clients: MediaItem[] } = {
  owner: [
    ['IMG_3308.JPG.jpeg', 'Emily Bordignoni em retrato editorial com camisa branca'],
    ['IMG_3309.JPG.jpeg', 'Retrato próximo de Emily Bordignoni'],
    ['IMG_3311.JPG.jpeg', 'Emily Bordignoni trabalhando com sua paleta de maquiagem'],
    ['IMG_3312.JPG.jpeg', 'Emily Bordignoni sorrindo em retrato profissional'],
    ['IMG_3313.JPG.jpeg', 'Emily Bordignoni em retrato luminoso'],
    ['IMG_3314.JPG.jpeg', 'Emily Bordignoni em composição editorial de corpo inteiro'],
    ['IMG_3315.JPG.jpeg', 'Emily Bordignoni em retrato profissional com blazer claro'],
    ['IMG_3316.JPG.jpeg', 'Emily Bordignoni em retrato com blazer preto'],
    ['IMG_3317.JPG.jpeg', 'Emily Bordignoni em retrato sobre fundo marrom profundo'],
  ].map(([file, alt]) => ({ src: `/images/emily/${file}`, alt, width: 1365, height: 2048 })),
  clients: [
    ['IMG_3302.JPG.jpeg', 'Noiva maquiada por Emily, segurando buquê branco'],
    ['IMG_3303.JPG.jpeg', 'Noiva com maquiagem personalizada no dia do casamento'],
    ['IMG_3304.JPG.jpeg', 'Produção de noiva com pele refinada e batom vermelho'],
    ['IMG_3320.JPG.jpeg', 'Cliente sorrindo após produção social'],
    ['IMG_3321.JPG.jpeg', 'Cliente com maquiagem de acabamento sofisticado'],
  ].map(([file, alt]) => ({ src: `/images/clientes/${file}`, alt, width: 1365, height: 2048 })),
}
