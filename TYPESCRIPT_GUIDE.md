# Guia do TypeScript - CNP Mídia

Este projeto foi configurado com TypeScript para melhorar a qualidade do código e a experiência de desenvolvimento.

## 📋 O que foi configurado

- ✅ TypeScript instalado e configurado
- ✅ Arquivo `tsconfig.json` com configurações otimizadas para Next.js
- ✅ Tipos globais definidos em `types/index.ts`
- ✅ Script de conversão automática de JSX para TSX
- ✅ Script de verificação de tipos

## 🚀 Como usar

### 1. Verificar tipos
```bash
npm run type-check
```

### 2. Converter arquivos JSX para TSX
```bash
npm run convert-to-tsx
```

### 3. Desenvolvimento
```bash
npm run dev
```

## 📁 Estrutura de tipos

### Tipos globais (`types/index.ts`)
- `MenuItem` - Para itens de menu
- `Home1Props` - Props do componente Home1
- `HeaderProps` - Props do header
- `FooterProps` - Props do footer
- `PortfolioItem` - Para itens de portfólio
- `BlogPost` - Para posts do blog
- `Service` - Para serviços
- `TeamMember` - Para membros da equipe
- `Testimonial` - Para depoimentos

### Como usar os tipos

```tsx
import { Home1Props } from '@/types';

export default function Home1({ onePage = false, dark = false }: Home1Props) {
  return (
    // seu componente aqui
  );
}
```

## 🔄 Migração gradual

O projeto suporta migração gradual:

1. **Arquivos existentes**: Podem continuar como `.jsx` ou `.js`
2. **Novos arquivos**: Use `.tsx` para componentes React e `.ts` para utilitários
3. **Conversão automática**: Use `npm run convert-to-tsx` para converter todos os arquivos

## 📝 Boas práticas

### 1. Tipagem de props
```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  // componente aqui
}
```

### 2. Tipagem de eventos
```tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // handler aqui
};
```

### 3. Tipagem de dados
```tsx
interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [
  { id: '1', name: 'João', email: 'joao@email.com' }
];
```

## 🛠️ Configurações do TypeScript

O `tsconfig.json` está configurado com:

- **Strict mode**: Ativado para melhor qualidade do código
- **JSX preserve**: Mantém JSX para o Next.js processar
- **Path mapping**: `@/*` aponta para o diretório raiz
- **Allow JS**: Permite arquivos JavaScript durante a migração

## 🔍 Verificação de tipos

Execute regularmente:
```bash
npm run type-check
```

Isso ajudará a identificar problemas de tipos antes da compilação.

## 📚 Recursos úteis

- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript com Next.js](https://nextjs.org/docs/basic-features/typescript)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 🆘 Solução de problemas

### Erro: "Cannot find namespace 'JSX'"
Adicione `import React from "react";` no topo do arquivo.

### Erro: "Module not found"
Verifique se o caminho do import está correto e se o arquivo existe.

### Erro: "Property does not exist on type"
Defina a interface correta para as props do componente.

## 📈 Próximos passos

1. Converter arquivos críticos primeiro
2. Adicionar tipagem aos componentes principais
3. Configurar ESLint com regras de TypeScript
4. Adicionar testes com TypeScript 