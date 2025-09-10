# JEPLIGOM Ministry Website

Jesus Power Liberation Gospel Global Ministry - A professional ministry platform for Pastor Joshua O. Ogugua and global members.

## Features

- Modern, responsive design
- Animated sections with Framer Motion
- Tailwind CSS for styling
- TypeScript for type safety
- Vite for fast development and building

## Tech Stack

- React 18
- TypeScript
- Vite 5.x
- Tailwind CSS 3.x
- Framer Motion for animations
- Lucide React for icons
- Vercel (Deployment)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/e-ogugua/jepligom-ministry.git
   cd jepligom-ministry
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
jepligom-ministry/
├── public/            # Static files
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── .gitignore         # Git ignore file
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Deployment

This project is configured for deployment on Vercel. Push your changes to the `main` branch to trigger automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Emmanuel Chukwuka Ogugua - [@emmachuka](https://github.com/e-ogugua)

Project Link: [https://github.com/e-ogugua/jepligom-ministry](https://github.com/e-ogugua/jepligom-ministry)
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application is deployed on Vercel. Any push to the `main` branch will trigger an automatic deployment.

### Manual Deployment

1. Install Vercel CLI (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel
   ```bash
   vercel
   # or
   vercel --prod
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file:

```
NEXT_PUBLIC_APP_NAME="jepligom-ministry"
NEXT_PUBLIC_APP_URL="https://jepligom-ministry.vercel.app"
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Last Updated

2025-09-08
