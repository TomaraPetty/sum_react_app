import React, { useState, useEffect } from 'react';
import FileInput from './components/FileInput';
import Header from './components/Header';
import Text from './components/Text';
import Page from './components/Page';
import PageSplit from './components/PageSplit';
import Wrapper from './components/Wrapper';
import './styles/index.css'

const App = () => {
    const [sum, setSum] = useState<number | undefined>(undefined);
    
    useEffect(() => {
    }, [sum])

  return (
    <>
      <Page>
        <PageSplit side='left'>
          <Wrapper>
            <Header title={'Sum The Values'} />
            <Text
              message={
                "Select a CSV file to upload. We'll calculate the sum of all the values in your csv."
              }
            />
            <FileInput setSum={setSum} />
          </Wrapper>
        </PageSplit>
        <PageSplit side='right'>
            <Wrapper>
                {sum !== undefined && (
                    <>
                    <Text message='Total of all values in your csv file:' />
                    <Header className='sum-container' sum={sum}/>
                    {/* <h1 className='h1 sum-container'>{sum}</h1> */}
                    </>
                )}
            </Wrapper>
        </PageSplit>
      </Page>
    </>
  );
};

export default App;
