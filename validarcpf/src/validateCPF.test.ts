import { describe, it, expect } from 'vitest';
import { validar } from './index';

describe('Função ruim de validação de CPF', () => {
    it('valida um CPF verdadeiro', () => {
        expect(validar('529.982.247-25')).toBe(true);
    });

    it('invalida CPF com dígitos errados', () => {
        expect(validar('123.456.789-08')).toBe(false);
    });

    it('invalida CPF com todos os dígitos iguais', () => {
        expect(validar('111.111.111-11')).toBe(false);
    });

    it('valida CPF sem pontuação', () => {
        expect(validar('52998224725')).toBe(true);
    });

    it('invalida CPF vazio', () => {
        expect(validar('')).toBe(false);
    });

    it('invalida CPF com menos de 11 dígitos', () => {
        expect(validar('123')).toBe(false);
    });
});
