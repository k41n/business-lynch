import React from 'react';

import { Container } from './styles';

export interface DiagramT {
  url: string;
  imageUrl: string;
  diagramId: string;
  title: string;
  description: string;
}

interface Props {
  diagram: DiagramT;
  onClick: (diagramId: string) => void;
}

export const Diagram: React.FC<Props> = ({ diagram, onClick }) => {
  return (
    <Container onClick={() => onClick(diagram.diagramId)}>
      <img src={diagram.imageUrl} />
      {diagram.title}
    </Container>
  )
}