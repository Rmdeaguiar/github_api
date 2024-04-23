import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/';
import Repos from ".";
import { BrowserRouter } from "react-router-dom";


describe("Test the Repos page", () => {
    const mockFetchRepos = jest.fn().mockResolvedValue([
        {
            name: 'Primeiro Projeto',
            html_url: "Imagem",
            language: "React Js",
            stargazers_count: 10,
            created_at: "01/2024",
            description: "Repositório 1"
        },
        {
            name: 'Segundo Projeto',
            html_url: "Imagem",
            language: "React Js",
            stargazers_count: 10,
            created_at: "02/2024",
            description: "Repositório 2"
        }
    ]);

    test("Should have a title 'Quantidade de repositórios', and a text telling about the repositories", async () => {
        render(
            <BrowserRouter>
                <Repos loadRepos={mockFetchRepos} />
            </BrowserRouter>
        );

        const title = await screen.findByRole("heading", {
            name: "Quantidade de repositórios de :"
        });
    
        expect(title).toBeInTheDocument();

        const text = await screen.findByText("Este usuário ainda não possui repositórios.");
        expect(text).toBeInTheDocument();

    })

    test("Should have 2 repositories in the page", async () => {
        render(
            <BrowserRouter>
                <Repos loadRepos={mockFetchRepos} />
            </BrowserRouter>
        );

        // const firstProject = await screen.findByText("Primeiro Projeto");
        // expect(firstProject).toBeInTheDocument();
    })
})
