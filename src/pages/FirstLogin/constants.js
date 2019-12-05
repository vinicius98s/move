import React from 'react';
import Credit from '../../assets/Illustrations/Credit';
import Location from '../../assets/Illustrations/Location';
import Unlock from '../../assets/Illustrations/Unlock';
import Buttons from '../../assets/Illustrations/Buttons';
import Accelerometer from '../../assets/Illustrations/Accelerometer';
import GiveBack from '../../assets/Illustrations/GiveBack';

export const carouselItems = [
  {
    title: 'Créditos',
    description:
      'A compra de créditos é feita diretamente pelo app Move. Na sua Carteira você pode adicioná-los através de cartões ou boleto bancário',
    illustration: <Credit />,
  },
  {
    title: 'Localização',
    description:
      'Os capacetes estão espalhados pela cidade, na Home você pode ver onde está o capacete mais próximo de você',
    illustration: <Location />,
  },
  {
    title: 'Desbloqueio',
    description:
      'Para desbloquear o capacete basta ler o QR Code na etiqueta ou inserir o código manualmente.',
    illustration: <Unlock />,
  },
  {
    title: 'Botões',
    description:
      'No guidão existem dois botões para dar seta, na qual está localizada na parte de trás do capacete. O botão da direita é para a seta da direita e vice-versa.',
    illustration: <Buttons />,
  },
  {
    title: 'Acelerômetro',
    description:
      'O dispositivo ainda possui um acelerômetro para movimentos de freada, aceleração, parado e setas. Apenas com o seu movimento.',
    illustration: <Accelerometer />,
  },
  {
    title: 'Devolver o capacete',
    description:
      'Após terminar a corrida basta colocar o capacete de volta à trava e fecha-lá. Pronto sua corrida foi encerrada.',
    illustration: <GiveBack />,
  },
];
