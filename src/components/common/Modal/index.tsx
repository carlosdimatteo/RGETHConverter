import { Container } from './Modal.styles';
import { ModalProps } from './types';

export function Modal({ children, show }: ModalProps) {
	return <>{show && <Container>{children}</Container>}</>;
}
