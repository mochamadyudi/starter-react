import Container from "@components/atoms/container/Container.tsx";
import StatCards from "@views/dashboard/common/StatCard.tsx";
import ContainerFluid from "@components/atoms/container/ContainerFluid.tsx";
import {Button} from "@heroui/button";

export default function Dashboard() {
  // const theme = useTheme();

  return (
    <div className="relative">
      <ContainerFluid className="bg-white h-40 w-full border-b">
        <Button color="primary">Button</Button>
      </ContainerFluid>
      <Container>
        <StatCards />
      </Container>
    </div>
  );
}
