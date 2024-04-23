import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/';
import Repos from ".";
import { BrowserRouter } from "react-router-dom";
import { loadRepos } from "../../services/ReposService";

const mockFn = jest.fn(loadRepos)
const mockFetchReposFn = mockFn.mockImplementation(async () => {
    return [
        {
            name: "Primeiro Projeto",
            html_url: "Imagem",
            language: "React Js",
            stargazers_count: 10,
            created_at: "2024-04-08T20:09:13Z",
            description: "Repositório 1"
        },
        {
            name: 'Segundo Projeto',
            html_url: "Imagem",
            language: "React Js",
            stargazers_count: 10,
            created_at: "2024-04-08T20:09:13Z",
            description: "Repositório 2"
        }
    ]
});


describe("Test the Repos page", () => {
    jest.mock("react-router-dom", () => {
        return {
            useParams: () => ({
                username: 'username'
            })
        }
    })

    test("Should have a title 'Quantidade de repositórios'", async () => {
        render(
            <BrowserRouter>
                <Repos loadRepos={mockFetchReposFn} />
            </BrowserRouter>
        );

        const title = await screen.findByRole("heading", {
            name: "Quantidade de repositórios de :"
        });

        expect(title).toBeInTheDocument();
    })

    test("Should have two texts about repositories (recent and quantity) in the page", async () => {
        render(
            <BrowserRouter>
                <Repos loadRepos={mockFetchReposFn} />
            </BrowserRouter>
        );

        const recentRepositories = await screen.findByText("Repositórios mais recentes:");
        expect(recentRepositories).toBeInTheDocument();

        const infoRepositories = await screen.findByText("Este usuário ainda não possui repositórios.");
        expect(infoRepositories).toBeInTheDocument();

    });
})
