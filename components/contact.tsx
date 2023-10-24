"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", { name, email, message });
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", 
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            width: "100%",
            backgroundColor: "#d32f2f",
            boxShadow: "0px 10px 20px rgba(5, 0, 0, 0.2)",
            border: "1px solid rgba(7, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box textAlign="center">
              <h1>Contact</h1>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Nombre"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Mensaje"
                  variant="filled"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                  Enviar
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
