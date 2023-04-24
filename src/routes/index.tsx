import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react'

import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

useEffect(() =>{
  setDrawerOptions([
    {
      label: 'Página inicial',
      icon: 'home',
      path: '/pagina-inicial'
    },
    {
      label: 'Cidades',
      icon: 'star',
      path: '/cidades'
    }
  ]);
}, [])

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Toggle Drawer
          </Button>
        }
      />

      {/* <Route path="*" element={<Navigate to="/pagina-inicial" />} /> */}
    </Routes>
  );
};
