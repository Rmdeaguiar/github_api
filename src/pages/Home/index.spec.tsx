import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/';
import Home from ".";

describe("Test the Home page", () => {

    test("Should have a title 'Digite um usuário'", async () => {
        render(<Home />);

        const title = await screen.findByRole("heading", {
            name: "Digite um usuário:"
        });
        expect(title).toBeInTheDocument();
    })

    test("Should have an input to type an User", async () => {
        render(<Home />);

        const inputUser = await screen.findByPlaceholderText("Nome do usuário");
        expect(inputUser).toBeInTheDocument();
    });

    test("Should have a button to go search an User, and returns a text error when not find an user", async () => {
        render(<Home />);

        const button = await screen.findByRole("button");   
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        const text = await screen.findByText("Usuário não encontrado")
        expect(text).toBeInTheDocument();
    })
})

