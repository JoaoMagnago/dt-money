import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeBytton } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder='Descrição' required />
          <input type="text" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />

          <TransactionType>
            <TransactionTypeBytton variant={'income'}>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeBytton>

            <TransactionTypeBytton variant={'outcome'}>
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeBytton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}