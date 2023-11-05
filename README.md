# Exercise: Implement a Language Switcher using the Context API

Your task is to create a simple React application that supports switching between two languages: English and Spanish. This should be accomplished using React's Context API.

**Requirements**:

1. The main page should display a greeting message: "Hello, World!" in English and "¡Hola, Mundo!" in Spanish.
1. There should be a button to toggle between English and Spanish.
1. The current language setting should be accessible across multiple components using the Context API.

**Steps:**

1. Create a LanguageContext using React.createContext().
1. Create a LanguageProvider component that uses the LanguageContext.Provider to share the current language and a function to toggle the language.
1. Create a Header component that displays the greeting message based on the current language. This component should consume the LanguageContext.
1. Create a Footer component with a button that toggles the language when clicked. This component should also consume the LanguageContext.
1. Render both the Header and Footer components within the LanguageProvider in the main App component.
