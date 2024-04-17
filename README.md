# Employee Record Query Project

This project is a web application developed with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/), designed to query an employee's record by entering their ID number (DNI). The application includes a user interface for entering the ID number, a query and clear button, and displays employee data (full name, date of birth, record number) if the ID number matches any of the simulated employees.

## Project Structure

The project is well-organized following best practices for a Next.js application. Files and directories are logically arranged, making navigation and code maintenance straightforward.

## Technologies Used

- **Next.js**: Used for building the web application, leveraging its file-based routing and TypeScript support.
- **Tailwind CSS**: For designing and styling the user interface, providing a modern and responsive user experience.
- **TypeScript**: For writing JavaScript code with static types, improving code quality and maintenance.

## Testing

The project includes unit tests performed with Jest and React Testing Library. These tests ensure the functionality (limited to 2 test files) of the components and application logic.
To run unit tests, use the command `npm test` or `yarn test` from the terminal.

## Data Mocking

A mock is used to simulate employee data, allowing testing of the application's functionality without the need for a real database.

## ID Validation

Validations for the ID number have been added, ensuring it contains at least 7 characters, simulating current IDs in Argentina. If the entered ID number does not match any of the simulated employees, an error message will be displayed.

## Loader

A loader has been implemented that activates when the search begins and hides when it finishes. Although the application's response time is very fast, in real scenarios, this loader enhances the user experience by providing visual feedback on the search status.

## Getting Started

To start working on this type of project, the following steps are typically followed:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm run dev` or `yarn dev`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
