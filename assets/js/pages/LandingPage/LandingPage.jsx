// Import des modules React nécessaires
import React from 'react';
import Navbar from '../../components/Navbar'
import './style.css';

const LandingPage = (props) => {
  return (
    <div className="landing-page">
        <div className="feature-box">
        <h2>Fonctionnalités du site</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget condimentum libero. Sed tincidunt fermentum tortor. Vestibulum nec volutpat libero.</p>
        <p>Curabitur nec euismod augue. Fusce sed justo eu arcu consectetur laoreet vel a libero. In hac habitasse platea dictumst.</p>
        <p>Quisque nec tristique justo. Morbi eget nisi quis justo dignissim lacinia vel non arcu. Donec non augue non urna tincidunt efficitur.</p>
      </div>
      <div className="box-primary">
      <div className="box">
  <h3>Déjà inscrit ?</h3>
  <p>Connectez-vous à votre compte :</p>
  <form>
    <div>
      <label  htmlFor="email">Email :</label>
      <input className='input' type="email" id="email" name="email" />
    </div>
    <div>
      <label htmlFor="password">Mot de passe :</label>
      <input className='input' type="password" id="password" name="password" />
    </div>
    <button className='button' type="submit">Se connecter</button>
  </form>
</div>
<div className="box">
  <h3>Pas encore inscrit ?</h3>
  <p>Inscrivez-vous pour accéder à toutes nos fonctionnalités :</p>
    <button className='button' type="submit">S'inscrire</button>
</div>
 </div>
    </div>
  );
}

export default LandingPage;
