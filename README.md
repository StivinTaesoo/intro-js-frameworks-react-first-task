# Profile Cards React App

A simple and elegant React application that displays reusable profile cards for different individuals. This project demonstrates the creation of reusable components and basic React concepts.

## 🎯 Overview

This React application showcases a collection of profile cards displaying information about different individuals. Each card includes a profile image, name, and description, demonstrating the power of reusable React components.

## ✨ Features

-   **Reusable ProfileCard Component**: A flexible component that can display user profile information
-   **Clean, Modern Design**: Simple and elegant card layout with proper spacing and typography
-   **Type Safety**: Built with TypeScript interfaces for better development experience

## 🛠 Technologies Used

-   **React 18+** - Frontend framework
-   **TypeScript** - Type safety and better development experience
-   **CSS3** - Custom styling and layout
-   **Vite** - Build tool and development server (assumed)

## 📸 Screenshot

![Screenshot](./src/assets/Opera%20Snapshot_2025-09-03_123907_localhost.png)
![Screenshot](./src/assets/Opera%20Snapshot_2025-09-03_124242_localhost.png)
_Profile Cards App showing three example profiles_

## 📁 Project Structure

```
src/
├── components/
│   └── ProfileCard.tsx    # Reusable profile card component
├── assets/
│   ├── joe.png           # Profile image for Joe
│   ├── jane.png          # Profile image for Jane
│   └── ethan.png         # Profile image for Ethan
├── App.tsx               # Main application component
├── App.css               # Application styles
└── main.tsx              # Application entry point
```

## 🚀 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/StivinTaesoo/intro-js-frameworks-react-first-task
    cd intro-js-frameworks-react-first-task
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 💻 Usage

The application displays three profile cards by default:

-   **Joe Best** - Automobile engineer passionate about research
-   **Mimi Jane** - Olympic athlete with 25 gold medals
-   **Ethan Javic** - Tech enthusiast breaking into the industry

## 🧩 Component Details

### ProfileCard Component

The `ProfileCard` component is a reusable React functional component that accepts the following props:

```tsx
interface ProfileCardProps {
    name: string;
    image: string;
    description: string;
}
```

**Usage Example:**

```tsx
<ProfileCard
    name="John Doe"
    image={johnImage}
    description="Software developer with 5 years of experience"
/>
```

### Key CSS Classes

-   `.app` - Main application container
-   `.profile_card` - Individual card container with flex layout
-   `.image_container` - Container for profile images
-   `.profile-text` - Text content container

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as part of a React learning assignment to demonstrate reusable component creation and basic React concepts.
