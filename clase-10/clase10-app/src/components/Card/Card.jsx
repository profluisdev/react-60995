import { Button, Card, CardBody, Image, Text } from "@chakra-ui/react";

export const CardProduct = () => {
  return (
    <Card width={300} m={4}>
      <CardBody>
        <Text fontWeight={800}>Zapatilla</Text>
        <Image width={200} src="https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/aibxyf1a0em6pl7mou5f2lvzm8j4/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5" />
        <Text >Precio $50.000</Text>
        <Button colorScheme="purple">Detalle</Button>
      </CardBody>
    </Card>
  );
};
