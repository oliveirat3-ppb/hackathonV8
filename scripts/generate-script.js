function generateSetupCommands({ framework, buildTool, packageManager, projectName }) {
    const commands = [];

    commands.push(
        "#!/bin/bash",
        '',
        'echo "🚀 Starting setup..."',
        `echo "📦 Framework: ${framework} | Build: ${buildTool} | Package Manager: ${packageManager} | Project: ${projectName}"`
    );

    // Ensure latest Node.js
    commands.push(
        '',
        'echo "🟢 Checking Node.js version..."',
        'if ! command -v node >/dev/null; then',
        '  echo "⚠️ Node.js not installed. Installing latest LTS using nvm..."',
        '  if ! command -v nvm >/dev/null; then',
        '    echo "📥 Installing NVM..."',
        '    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash',
        '    export NVM_DIR="$HOME/.nvm"',
        '    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"',
        '  fi',
        '  nvm install --lts',
        '  nvm use --lts',
        'else',
        '  echo "✅ Node.js found: $(node -v)"',
        '  echo "⬆️ Updating to latest LTS..."',
        '  if ! command -v nvm >/dev/null; then',
        '    echo "📥 Installing NVM to manage Node updates..."',
        '    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash',
        '    export NVM_DIR="$HOME/.nvm"',
        '    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"',
        '  fi',
        '  nvm install --lts',
        '  nvm use --lts',
        'fi',
        '',
        'echo "✅ Node.js is now: $(node -v)"',
    );

    // Check for package manager availability
    commands.push(
        '',
        'if ! command -v $PKG_MANAGER >/dev/null; then',
        '  echo "❌ $PKG_MANAGER is not installed. Please install it before running this script."',
        '  exit 1',
        'fi',
        ''
    );

    // Framework/Build-specific commands
    if (framework === "react") {
        if (buildTool === "vite") {
        commands.push(`${packageManager} create vite@latest ${projectName} -- --template react`);
        } else if (buildTool === "webpack") {
        commands.push(
            `mkdir ${projectName} && cd ${projectName}`,
            `${packageManager} init -y`,
            `${packageManager} install react react-dom webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin`,
            'echo "✅ Webpack setup ready. Add webpack.config.js and Babel config."'
        );
        }
    } else if (framework === "vue") {
        if (buildTool === "vite") {
        commands.push(`${packageManager} create vite@latest ${projectName} -- --template vue`);
        } else if (buildTool === "webpack") {
        commands.push(
            `mkdir ${projectName} && cd ${projectName}`,
            `${packageManager} init -y`,
            `${packageManager} install vue webpack webpack-cli webpack-dev-server vue-loader vue-template-compiler babel-loader @babel/core @babel/preset-env html-webpack-plugin`,
            'echo "✅ Webpack setup ready. Add webpack.config.js."'
        );
        }
    } else if (framework === "angular") {
        commands.push(
            'echo "⚠️ Angular typically uses its CLI for scaffolding."',
            `${packageManager} install -g @angular/cli`, 
            `ng new ${projectName}`
        );
    } else {
        commands.push(`
            echo "❌ Unknown frontend framework: $FE_FRAMEWORK"`, 
            'exit 1'
        );
    }

    commands.push(
        '',
        'echo "✅ Project $PROJECT_NAME created."',
        'echo "➡️ Next steps:"',
        'echo "  cd $PROJECT_NAME"',
        `echo "  ${packageManager} install"`,
        ''
    );

    return commands.join("\n");
}

// Example usage:
const script = generateSetupCommands({
  framework: "react",
  buildTool: "vite",
  packageManager: "npm",
  projectName: "my-app"
});

console.log(script);
