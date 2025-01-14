echo "Installing dependencies..."
npm install || { echo "npm install failed"; exit 1; }


echo "Building TypeScript files..."
npm run build || { echo "Build failed"; exit 1; }

echo "Seeding the database..."
npm run seed || { echo "Seeding failed"; exit 1; }

echo "Setup complete!"
