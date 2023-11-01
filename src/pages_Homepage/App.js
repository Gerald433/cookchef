import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './pages_Homepage/Content';
import WishContent from './pages_Homepage/WishContent';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [wishList, setWishList] = useState([]); // Ajout de wishList dans l'état de l'application
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/recipes"
            element={
              <div>
                <Header />
                <Content setSelectedRecipe={setSelectedRecipe} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/wishlist"
            element={
              <div>
                <Header />
                <WishContent wishList={wishList} />
                <Footer />
              </div>
            }
          />
          {/* ... Autres routes */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;