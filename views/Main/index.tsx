import { CopyOutlined } from '@ant-design/icons';
import { useDiagrams } from 'cacoo/useDiagrams';
import { MainLayout } from 'components/MainLayout';
import React from 'react';
import { handleReviewSubmit } from './actions';
import { Diagram } from './components/Diagram';
import copy from 'copy-to-clipboard';

import { Container, CopyButton, Diagrams, Label } from './styles';
import { message } from 'antd';

export const Main: React.FC = () => {
  const [result, setResult] = React.useState(undefined);

  const onSubmit = async (diagramId: string) =>
    setResult(await handleReviewSubmit(diagramId));

  const handleCopy = () => {
    copy(result);
    message.info('Copied!');
  }

  const { diagrams } = useDiagrams();

  return (
    <>
      <MainLayout authOnly>
        {() => ({
          content: (
            <Container>
              {result ? (
                <Label>
                  Send this URL to your reviewer: {result}
                  <CopyButton onClick={handleCopy}><CopyOutlined /></CopyButton> 
                </Label>
              ) : (
                <>
                  <Label>Click diagram to get sharing URL.</Label>
                  <Diagrams>
                    {diagrams.map((diagram) => (
                      <Diagram
                        key={diagram.diagramId}
                        diagram={diagram}
                        onClick={onSubmit}
                      />
                    ))}
                  </Diagrams>
                </>
              )}
            </Container>
          ),
        })}
      </MainLayout>
    </>
  );
};
