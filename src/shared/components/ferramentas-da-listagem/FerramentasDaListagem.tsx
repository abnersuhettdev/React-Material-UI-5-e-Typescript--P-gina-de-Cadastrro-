import { Box, TextField, Button, Paper, useTheme, Icon } from "@mui/material";

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  aoClicarEmNovo,
  mostrarBotaoNovo = true,
  textoBotaoNovo = "Novo",
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      justifyContent="space-between"
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
      )}
      {mostrarBotaoNovo && (
        <Button
          color="primary"
          variant="contained"
          disableElevation
          onClick={aoClicarEmNovo}
          endIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}
    </Box>
  );
};
