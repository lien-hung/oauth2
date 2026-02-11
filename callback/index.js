const currentUrl = new URL(window.location.href);

const currentParams = currentUrl.searchParams;
const newUrl = new URL("vscode://undefined_publisher.api-tester");

for (const [key, value] of currentParams.entries()) {
  newUrl.searchParams.append(key, value);
}

window.location.replace(newUrl);