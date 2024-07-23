Sure! Here’s the complete README.md file in markdown format:

```markdown
# NY Times Most Popular Articles

This is a Next.js application that fetches and displays the NY Times Most Popular Articles. It uses Tailwind CSS for styling and environment variables for API keys.

## Getting Started

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nyt-most-popular.git
   cd nyt-most-popular
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env.local` file in the root directory of your project and add your API key:

   ```plaintext
   NEXT_PUBLIC_NYT_API_KEY=your-nyt-api-key
   ```

4. **Run the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Tests

**Unit Tests:**

Using npm:

   ```bash
   npm run test
   ```

Using yarn:

   ```bash
   yarn test
   ```

**UI Tests:**

   ```bash
   npx cypress open
   ```

### Building and Running in Production

1. **Build the project:**

   Using npm:

   ```bash
   npm run build
   ```

   Using yarn:

   ```bash
   yarn build
   ```

2. **Start the production server:**

   Using npm:

   ```bash
   npm start
   ```

   Using yarn:

   ```bash
   yarn start
   ```

### Linting

Run linting:

Using npm:

   ```bash
   npm run lint
   ```

Using yarn:

   ```bash
   yarn lint
   ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README.md file provides clear instructions for both npm and yarn users, covering the installation, running, testing, building, and linting processes.