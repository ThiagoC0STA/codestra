#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Função para converter um arquivo JSX para TSX
function convertJsxToTsx(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const tsxPath = filePath.replace(".jsx", ".tsx");

    // Adicionar import do React se não existir
    let newContent = content;
    if (
      !content.includes("import React") &&
      !content.includes("import * as React")
    ) {
      newContent = `import React from "react";\n${content}`;
    }

    fs.writeFileSync(tsxPath, newContent);
    fs.unlinkSync(filePath); // Remove o arquivo JSX original

    console.log(`✅ Convertido: ${filePath} → ${tsxPath}`);
  } catch (error) {
    console.error(`❌ Erro ao converter ${filePath}:`, error.message);
  }
}

// Função para converter arquivos JS para TS (apenas para arquivos de dados)
function convertJsToTs(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const tsPath = filePath.replace(".js", ".ts");

    fs.writeFileSync(tsPath, content);
    fs.unlinkSync(filePath); // Remove o arquivo JS original

    console.log(`✅ Convertido: ${filePath} → ${tsPath}`);
  } catch (error) {
    console.error(`❌ Erro ao converter ${filePath}:`, error.message);
  }
}

// Função principal
function main() {
  console.log("🔄 Iniciando conversão de arquivos JSX para TSX...\n");

  // Converter arquivos JSX para TSX
  const jsxFiles = glob.sync("**/*.jsx", {
    ignore: ["node_modules/**", ".next/**"],
  });
  jsxFiles.forEach(convertJsxToTsx);

  // Converter arquivos JS de dados para TS
  const dataJsFiles = glob.sync("data/**/*.js", {
    ignore: ["node_modules/**", ".next/**"],
  });
  dataJsFiles.forEach(convertJsToTs);

  console.log("\n✅ Conversão concluída!");
  console.log("\n📝 Próximos passos:");
  console.log(
    "1. Verifique se todos os arquivos foram convertidos corretamente"
  );
  console.log(
    '2. Execute "npm run dev" para verificar se não há erros de TypeScript'
  );
  console.log("3. Adicione tipagem aos componentes conforme necessário");
}

if (require.main === module) {
  main();
}

module.exports = { convertJsxToTsx, convertJsToTs };
