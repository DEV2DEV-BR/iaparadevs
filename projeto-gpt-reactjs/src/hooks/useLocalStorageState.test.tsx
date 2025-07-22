import React, { useEffect } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import useLocalStorageState from "./useLocalStorageState";

// Mock do localStorage para isolar testes
beforeEach(() => {
    localStorage.clear();
});

function TestComponent({ keyName, initialValue }: { keyName: string; initialValue: string }) {
    const [value, setValue] = useLocalStorageState<string>(keyName, initialValue);

    return (
        <div>
            <p data-testid="value">{value}</p>
            <button onClick={() => setValue("novo valor")}>Atualizar</button>
        </div>
    );
}

describe("useLocalStorageState", () => {
    it("usa o valor inicial se localStorage estiver vazio", () => {
        render(<TestComponent keyName="test-key" initialValue="valor padrão" />);
        expect(screen.getByTestId("value").textContent).toBe("valor padrão");
    });

    it("lê valor do localStorage se existir", () => {
        localStorage.setItem("test-key", JSON.stringify("salvo anteriormente"));
        render(<TestComponent keyName="test-key" initialValue="valor padrão" />);
        expect(screen.getByTestId("value").textContent).toBe("salvo anteriormente");
    });

    it("atualiza o estado e salva no localStorage", () => {
        render(<TestComponent keyName="test-key" initialValue="valor inicial" />);
        fireEvent.click(screen.getByText("Atualizar"));
        expect(screen.getByTestId("value").textContent).toBe("novo valor");

        const armazenado = localStorage.getItem("test-key");
        expect(armazenado).toBe(JSON.stringify("novo valor"));
    });

    it("lida com JSON inválido no localStorage", () => {
        localStorage.setItem("test-key", "{ inválido }");
        const warn = vi.spyOn(console, "warn").mockImplementation(() => { });
        render(<TestComponent keyName="test-key" initialValue="fallback" />);
        expect(screen.getByTestId("value").textContent).toBe("fallback");
        expect(warn).toHaveBeenCalled();
        warn.mockRestore();
    });
});
