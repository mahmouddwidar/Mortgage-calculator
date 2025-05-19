// Main Page
import Page from './components/Page';
// Header
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import Calculator from './components/Calculator';
// Footer
import Footer from './components/Footer';


function App() {
  return (
    <Page>
      <Header>
        <h1 className='font-bold text-2xl text-gray-800 dark:text-white font-playWrite'>Mortgage Calculator</h1>
        <ThemeToggle />
      </Header>

      <main className="container mx-auto px-4 py-8 min-h-screen flex justify-center items-center">
        <Calculator />
      </main>

      <Footer />
    </Page>
  )
}

export default App;
