import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { CharacterList } from "./CharacterList";
import { getCharacters } from "../utils/api";

// Mock de personajes para la prueba
const mockCharacters = [
  {
    id: '1',
    name: "Harry Potter",
    image: "https://img.freepik.com/vector-premium/personajes-harry-potter-ilustracion_423075-15.jpg",
    species: "Human",
    gender: "Male",
  },
  {
    id: '2',
    name: "Hermione Granger",
    image: "https://img.freepik.com/vector-premium/personajes-harry-potter-ilustracion_423075-15.jpg",
    species: "Human",
    gender: "Female",
  }
];
// 🔹 Mockeamos la API para que devuelva los personajes falsos
vi.mock("../utils/api", () => ({
  getCharacters: vi.fn(),

}));

describe("CharacterList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Limpia los mocks antes de cada test
  });

  it("debe mostrar 'Loading...' mientras carga los personajes", () => {
    vi.mocked(getCharacters).mockResolvedValueOnce(mockCharacters);
    render(<CharacterList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });


  it("debe manejar errores mostrando un mensaje si la API falla", async () => {
    vi.mocked(getCharacters).mockRejectedValueOnce(new Error("Error al obtener personajes"))
    render(<CharacterList />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
