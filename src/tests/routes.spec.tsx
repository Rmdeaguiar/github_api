import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"
import '@testing-library/jest-dom/';

describe("Tests the component Main routes", () => {
    test("Should render the Home page", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('Digite um usuário:')).toBeInTheDocument();
    })

    test("Should render the Repos page", async () => {
        render(
            <MemoryRouter initialEntries={["/repos/username"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('Repositórios mais recentes:')).toBeInTheDocument();
    })

    test("Should render the Error page", async () => {
        render(
            <MemoryRouter initialEntries={["/qualquer-rota"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
    })
})

export {}