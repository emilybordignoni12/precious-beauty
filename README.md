# Precious Beauty

Site institucional de Emily Bordignoni, desenvolvido com Next.js, React, TypeScript e Bootstrap 5. A saída é totalmente estática e compatível com GitHub Pages.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Verificação

```bash
npm test
npm run lint
npm run build
```

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` calcula automaticamente o caminho do repositório. No repositório da Emily, abra **Settings → Pages** e escolha **GitHub Actions** como fonte. Um push na branch `main` executará testes, exportará a pasta `out` e publicará o site.

Para domínio próprio ou metadados definitivos, defina `NEXT_PUBLIC_SITE_URL`. Para testar localmente como um repositório chamado `precious-beauty`, use `NEXT_PUBLIC_BASE_PATH=/precious-beauty` antes do build.

O projeto não contém credenciais, tokens ou conexão com contas do GitHub.
