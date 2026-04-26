const currentUrl = new URL(window.location.href);

const currentParams = currentUrl.searchParams;
const newUrl = new URL("vscode://lien-hung.rest-forge");

for (const [key, value] of currentParams.entries()) {
  newUrl.searchParams.append(key, value);
}

window.location.replace(newUrl);