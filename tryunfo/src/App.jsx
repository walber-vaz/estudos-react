import { useState } from 'react';
import Layout from './Layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [cardname, setCardname] = useState('');
  const [carddescription, setCarddescription] = useState('');
  const [cardattr1, setCardattr1] = useState(0);
  const [cardattr2, setCardattr2] = useState(0);
  const [cardattr3, setCardattr3] = useState(0);
  const [cardimage, setCardimage] = useState('');
  const [cardrare, setCardrare] = useState('normal');
  const [cardtrunfo, setCardtrunfo] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  function onInputChange(event) {
    const { name, value, type } = event.target;

    const isName = name === 'cardName';
    const isDescription = name === 'cardDescription';
    const isAttr1 = name === 'cardAttr1';
    const isAttr2 = name === 'cardAttr2';
    const isAttr3 = name === 'cardAttr3';
    const isImage = name === 'cardImage';
    const isRare = name === 'cardRare';
    const isTrunfo = name === 'cardTrunfo';
    const isHasTrunfo = name === 'hasTrunfo';

    if (isName) setCardname(value);
    if (isDescription) setCarddescription(value);
    if (isAttr1) setCardattr1(value);
    if (isAttr2) setCardattr2(value);
    if (isAttr3) setCardattr3(value);
    if (isImage) setCardimage(value);
    if (isRare) setCardrare(value);
    if (isTrunfo) setCardtrunfo(value);
    if (isSaveButtonDisabled) setIsSaveButtonDisabled(false);
    if (isHasTrunfo) {
      value === 'true' ? setHasTrunfo(true) : setHasTrunfo(false);
    }
  }

  return (
    <>
      <Layout
        cardName={cardname}
        cardDescription={carddescription}
        cardAttr1={cardattr1}
        cardAttr2={cardattr2}
        cardAttr3={cardattr3}
        cardImage={cardimage}
        cardRare={cardrare}
        cardTrunfo={cardtrunfo}
        hasTrunfo={hasTrunfo}
        isSaveButtonDisabled={isSaveButtonDisabled}
        onInputChange={onInputChange}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
