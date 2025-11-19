bash
#!/bin/bash

# ---- User selections ----
FE_FRAMEWORK=${FE_FRAMEWORK:-"react"}  # Options: react, angular, vue
BUILD_TOOL=${BUILD_TOOL:-"vite"}       # Options: vite, webpack
PKG_MANAGER=${PKG_MANAGER:-"npm"}      # Options: npm, yarn, pnpm
PROJECT_NAME=${PROJECT_NAME:-"my-app"}

echo "🚀 Starting setup..."
echo "📦 Framework: $FE_FRAMEWORK | Build: $BUILD_TOOL | Package Manager: $PKG_MANAGER | Project: $PROJECT_NAME"

# ---- Ensure latest Node.js ----
echo "🟢 Checking Node.js version..."
if ! command -v node >/dev/null; then
  echo "⚠️ Node.js not installed. Installing latest LTS using nvm..."
  if ! command -v nvm >/dev/null; then
    echo "📥 Installing NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    # Load nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  fi
  nvm install --lts
  nvm use --lts
else
  echo "✅ Node.js found: $(node -v)"
  echo "⬆️ Updating to latest LTS..."
  if ! command -v nvm >/dev/null; then
    echo "📥 Installing NVM to manage Node updates..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  fi
  nvm install --lts
  nvm use --lts
fi

echo "✅ Node.js is now: $(node -v)"

# ---- Check for package manager availability ----
if ! command -v $PKG_MANAGER >/dev/null; then
  echo "❌ $PKG_MANAGER is not installed. Please install it before running this script."
  exit 1
fi

# ---- Function to initialise project ----
init_project() {
  case "$FE_FRAMEWORK" in
    react)
      if [ "$BUILD_TOOL" = "vite" ]; then
        $PKG_MANAGER create vite@latest $PROJECT_NAME -- --template react
      elif [ "$BUILD_TOOL" = "webpack" ]; then
        mkdir $PROJECT_NAME && cd $PROJECT_NAME
        $PKG_MANAGER init -y
        $PKG_MANAGER install react react-dom webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
        echo "✅ Webpack setup ready. Add webpack.config.js and Babel config."
        return
      fi
      ;;
    vue)
      if [ "$BUILD_TOOL" = "vite" ]; then
        $PKG_MANAGER create vite@latest $PROJECT_NAME -- --template vue
      elif [ "$BUILD_TOOL" = "webpack" ]; then
        mkdir $PROJECT_NAME && cd $PROJECT_NAME
        $PKG_MANAGER init -y
        $PKG_MANAGER install vue webpack webpack-cli webpack-dev-server vue-loader vue-template-compiler babel-loader @babel/core @babel/preset-env html-webpack-plugin
        echo "✅ Webpack setup ready. Add webpack.config.js."
        return
      fi
      ;;
    angular)
      echo "⚠️ Angular typically uses its CLI for scaffolding."
      $PKG_MANAGER install -g @angular/cli
      ng new $PROJECT_NAME
      ;;
    *)
      echo "❌ Unknown frontend framework: $FE_FRAMEWORK"
      exit 1
      ;;
  esac
}

# ---- Run project init ----
init_project

echo "✅ Project $PROJECT_NAME created."
echo "➡️ Next steps:"
echo "  cd $PROJECT_NAME"
echo "  $PKG_MANAGER install"