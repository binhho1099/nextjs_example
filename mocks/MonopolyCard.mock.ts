import { IMonopolyCard } from '@components/shared/cards';

const base: IMonopolyCard = {
  imageSrc: './assets/test.jpg',
  imageSeoTag: 'image seo test',
  title: 'monopoly card title',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  authorImage: './assets/test.jpg',
  authorName: 'author name',
};

export const mockBaseTemplateProps = {
  base,
};
