import { StyledCard } from "./styles";
import cardImage from "../../assets/img/image 7.jpg";

export interface ICardProps {
  title: string;
  description: string;
}

export const CardComponent = ({ title, description }: ICardProps) => {
  return (
    <StyledCard>
      <img src={cardImage} alt="imagem ilustrativa" />
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
};
